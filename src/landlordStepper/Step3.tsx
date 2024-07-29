import { UPDATE_LANDLORD_PROPERTY_COMPLAINT } from "@/services";
import { Checkbox, CustomSpinner } from "@/src/components";
import { propertyComplaintCheckboxes } from "@/src/stepDataInit";
import { useMutation } from "@apollo/client";
import NextPreviousButtons from "./NextPreviousButtons";

interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  propertyDetails: PropertyComplaint;
  handleComplaintCheckbox: (property: PropertyComplaintKey) => void;
}
function Step3({ handleNextStep, handlePreviousStep, propertyDetails, handleComplaintCheckbox }: Props) {
  const { propertyComplaint } = propertyDetails
  const [updateLandlordPropertyComplaint, { loading, error }] = useMutation(UPDATE_LANDLORD_PROPERTY_COMPLAINT);

  const handleCheckboxChange = (property: PropertyComplaintKey) => {
    handleComplaintCheckbox(property)
  };
  const handleCreate = async () => {
   
    try {
      const { data } = await updateLandlordPropertyComplaint({
        variables: propertyDetails,
      });
      if (data) {
        handleNextStep()
      }
    } catch (error) {
      console.error('Error creating landlord:', error);
    }
  };

  return (
    <>
      {loading && <div style={{ position: 'absolute', top: '40%', left: '60%', zIndex: '1000' }}><CustomSpinner /></div>}

      <div className="container " style={{ width: "100%", marginLeft: '0%' }}>
        <div className=" row mb-3 mt-4">
          <h3 className="fw-normal mt-3">
            Tell us which property complaints you have ?
          </h3>
          <div
            className="text-secondary mb-3 mt-1 px-3"
            style={{ fontSize: ".9rem" }}
          >
            If you don't have any property complaints, don't worry! We're here to help you every step of the way. If you prefer to skip this step, feel free to do so
          </div>
          {propertyComplaintCheckboxes.map((item, index) => (
            <div className="div"
            key={index}
            style={{ marginRight:"0px",marginLeft:"4px"}}>
            <Checkbox
              key={index}
              isChecked={propertyComplaint[item.property]}
              label={item.label}
              handleCheckboxChange={() => handleCheckboxChange(item.property)
              }
            />
            </div>
          ))}
        </div>
      </div>
      <div className={"container"}>
        {error && <div className="text-danger">Submission error ${error.message}</div>}
        <div className="
    " style={{ marginRight:"20px",marginLeft:"1px"}}>
        <NextPreviousButtons

          showSkipBtn={true}
          handleNextStep={handleCreate}
          handlePreviousStep={handlePreviousStep}
        />
        </div>
      </div>
    </>
  );
}

export default Step3;
