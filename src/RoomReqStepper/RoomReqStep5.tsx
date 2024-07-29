import { UPDATE_JOB_DETAILS } from "@/services";
import { Checkbox, CustomSpinner } from "@/src/components";
import { checkboxDataAdditionalDetails } from "@/src/stepDataInit";
import { useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";
type AdditionalDetailsKeys = keyof AdditionalDetailsInterface['additionalDetails'];

interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  additionalDetails: AdditionalDetailsInterface;
  handleCheckboxDetailsChange: (property: AdditionalDetailsKeys) => void;
}
function RoomReqStep5({ handleNextStep, handlePreviousStep, additionalDetails, handleCheckboxDetailsChange }: Props) {
  const handleCheckboxChange = (property: AdditionalDetailsKeys) => {
    handleCheckboxDetailsChange(property);
  };
  const [updateJobDetailsApi, { loading, error }] = useMutation(UPDATE_JOB_DETAILS);
  const handleCreate = async () => {

    try {
      const { data } = await updateJobDetailsApi({
        variables: additionalDetails
      });
      if (data) {
        handleNextStep()
      }
    } catch (error) {
      console.error('Error creating landlord:', error);
    }
  };
  return (<>
    {loading && <div style={{ position: 'absolute', top: '40%', left: '60%', zIndex: '1000' }}><CustomSpinner /></div>}


    <div className="additionals d-flex flex-column justify-content-space-around px-3 py-0 mt-4">

  
    <div className=" mt-2">
      <h2 className="fw-normal fs-4">Need informatin about additional things</h2>
      <p className="defultBlackColor">
        you need to provide us some basic information about your and your family
        this information will not be made public, and it will be used to finding
        perfect finding for you.
      </p>
      <div className="row mt-3">
        {checkboxDataAdditionalDetails.map((item, index) => (
          <div key={index} className="col-12">
            <Checkbox
              isChecked={additionalDetails.additionalDetails[item.property]}
              key={index}
              label={item.label}
              handleCheckboxChange={() => handleCheckboxChange(item.property as AdditionalDetailsKeys)}
            />
          </div>
        ))}
      </div>
    
    </div>
    <div className="row mt-5"
     style={{  marginRight:"22px" }}>
        <div className={`${error ? "d-flex justify-content-end " : "col-3 offset-9 mt-5"}` }>
          {error && <div className="text-danger">Submission error ${error.message}</div>}
          <div className="d-flex gap-3 testimonial_btn_container">
            <Button variant="" onClick={handlePreviousStep}>
              Previous
            </Button>
            <Button
              variant="outline-dark"
              style={{
                borderRadius: 20,
                background: "black",
                color: "white",
                padding: "0 20px",
              }}
              onClick={handleCreate}
            >
              Finish
            </Button>
          </div>
        </div>
      </div>
</div>
  </>

  );
}

export default RoomReqStep5;
