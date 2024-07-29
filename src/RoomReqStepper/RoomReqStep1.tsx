import { CREATE_BASIC_ROOM } from "@/services";
import { ChecboxWithLabel, CustomSpinner, InputField } from "@/src/components";
import { useMutation } from "@apollo/client";

interface Props {
  handleNextStep: () => void;
  handleInputChange: (fieldName: string, value: string) => void;
  handleCheckboxChange: () => void;
  formData1: RoomReqData1
}

function RoomReqStep1(props: Props) {
  const { handleNextStep, handleInputChange, handleCheckboxChange, formData1, } = props;
  const { email, firstName, phoneNumber, surName, isWorkingWithLocalAuthority } = formData1.basicDetails
  const [createBasicRoomRequest, { loading, error }] = useMutation(CREATE_BASIC_ROOM);

  const handleCreate = async () => {
   
    try {
      const { data } = await createBasicRoomRequest({
        variables: formData1,
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

      <div className="px-3 py-1 mt-4">
        <h2 className="pb-1 fw-normal mt-1">Let's start with the basics</h2>
        <p className="subTextColor">
          Please provide essential details about yourself to begin the process
        </p>
        <div className="mt-4 row align-items-center">
          <div className="col-12 col-md-6 col-sm-12">
            <InputField
              handleChange={(val) => handleInputChange("firstName", val)}
              value={firstName}
              label="First Name"
              type="text"
              id="firstName"
              placeholder="Enter first name"
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-2">
            <InputField
              handleChange={(val) => handleInputChange("surName", val)}
              value={surName}
              label="Surname"
              type="text"
              id="surName"
              placeholder="Enter surname"
            />
          </div>
        </div>
        <div className="row  align-items-center mt-3">
          <div className="col-md-6 col-sm-12">
            <InputField
              handleChange={(val) => handleInputChange("email", val)}
              value={email}
              label="Email"
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <InputField
              handleChange={(val) => handleInputChange("phoneNumber", val)}
              value={phoneNumber}
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              placeholder="Enter phone number"
            />
          </div>
          <ChecboxWithLabel
            description=""
            showDescription={false}
            label='Are you currently working with the local authority?'
            onChangeHandler={handleCheckboxChange}
            defultCheck={isWorkingWithLocalAuthority}
          />
          
        </div>
      </div>
      <div className={`d-flex justify-content-${error ? "between" : "end"}`}>
        {error && <div className="text-danger">Submission error ${error.message}</div>}
        <div className="div"
        style={{ marginRight:"15px",marginLeft:"10px"}}
        
        >
        <button
          type="button"
          className="btn btn-primary black mt-5 next-btn"
          style={{ borderRadius: 50, width: 100 }}
          onClick={handleCreate}
        >
          Next
        </button>
      </div>
      </div>
    </>
  );
}

export default RoomReqStep1;
