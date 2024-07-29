import { CREATE_BASIC_LANDLORD } from "@/services";
import { ChecboxWithLabel, CustomSpinner, InputField } from "@/src/components";
import { useMutation } from '@apollo/client';
interface Props {
  handleNextStep: () => void;
  formData: Step1Data
  saveUniqueId: (id: string) => void
  handleInputChange: (fieldName: string, value: string) => void;
  handleCheckboxChange: () => void;
}

function Step1(props: Props) {
  const { handleNextStep, formData, handleInputChange,
    handleCheckboxChange, saveUniqueId } = props;
  const [createBasicLandlord, { loading, error }] = useMutation(CREATE_BASIC_LANDLORD);

  const handleCreate = async () => {
   
    try {
      const { data } = await createBasicLandlord({
        variables: { basicDetails: formData },
      });
      if (data && data.createBasicLandLord.uniqueId) {
        saveUniqueId(data.createBasicLandLord.uniqueId)
        handleNextStep()
      }
    } catch (error) {
      console.error('Error creating landlord:', error);
    }
  };

  return (
    <>
      {loading && <div style={{ position: 'absolute', top: '40%', left: '60%', zIndex: '1000' }}><CustomSpinner /></div>}
      <div className="px-3 py-1 mt-4">
        <h2 className="pb-1 fw-normal mt-1">Let's start with the basics</h2>
        <p className="subTextColor">
          Please provide essential details about yourself as the property owner
          to begin the process
        </p>
        <div className="mt-4 row align-items-center">
          <div className="col-12 col-md-6 col-sm-12">
            <InputField
              label="First Name"
              type="text"
              id="firstName"
              placeholder="Enter name"
              value={formData.firstName}
              handleChange={(value: any) => handleInputChange('firstName', value)}

            />
          </div>
          <div className="col-md-6 col-sm-12 mt-2">
            <InputField
              label="Surname"
              type="text"
              id="surName"
              placeholder="Enter surname"
              value={formData.surName}
              handleChange={(value: any) => handleInputChange('surName', value)}
            />
          </div>
        </div>
        <div className="row  align-items-center mt-3">
          <div className="col-md-6 col-sm-12">
            <InputField
              label="Email"
              type="email"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              handleChange={(value: any) => handleInputChange('email', value)}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <InputField
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              handleChange={(value: any) => handleInputChange('phoneNumber', value)}
            />
          </div>
          <ChecboxWithLabel
            description=""
            showDescription={true}
            label='Are you currently working with the local authority?'
            onChangeHandler={handleCheckboxChange}
            defultCheck={formData.isWorkingWithLocalAuthority}
          />
        </div>
      </div>
      <div className={`d-flex justify-content-${error ? "between" : "end"}`}>
        {error && <div className="text-danger">Submission error ${error.message}</div>}
        <button
          type="button"
          className="btn btn-primary black mt-5 next-btn"
          style={{ borderRadius: 50, width: 100, marginRight:"15px" }}
          onClick={handleCreate}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Step1;
