import { UPDATE_PERSONAL_ADVISOR } from "@/services";
import { CustomSpinner, InputField, RadioInput } from "@/src/components";
import { useMutation } from "@apollo/client";
import NextPreviousButtons from "../landlordStepper/NextPreviousButtons";
interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  updateAdvisor: (propertyName: string, value: any) => void;
  personalAdvisor: PersonalAdvisorInterface

}
function RoomReqStep2({ handleNextStep, handlePreviousStep, personalAdvisor, updateAdvisor }: Props) {
  const { hasPersonalAdvisor, firstName, surName, email, phoneNumber, personalAdvisorlocalAuthority } = personalAdvisor.personalAdvisor;
  const handleAdvisorChange = (e: any) => {
    const value = e.target.value === "true";
    updateAdvisor('hasPersonalAdvisor', value);
  }

  const handleSelectChange = (e: any) => {
    updateAdvisor('personalAdvisorlocalAuthority', e.target.value);
  };
  const [updatePersonalAdvisor, { loading, error }] = useMutation(UPDATE_PERSONAL_ADVISOR);
  const handleCreate = async () => {
    handleNextStep()
    try {
      const { data } = await updatePersonalAdvisor({
        variables: personalAdvisor,
      });
      // if (data.updateJobDetails.uniqueId) {
      if (data) {
        handleNextStep()
      }
    } catch (error) {
      console.error('Error creating landlord:', error);
    }
  };
  return (<>
    {loading && <div style={{ position: 'absolute', top: '40%', left: '60%', zIndex: '1000' }}><CustomSpinner /></div>}
    <div className="advisory px-3 pt-1 mt-3">
      <h2 className="fw-normal mt-3">Tell us about your personal adivisor</h2>
      <p className="subTextColor" >This information helps us understand the support you have and ensure a smoother experience
      </p>
      <div className="mt-4 mb-3">
        <h4 className="fs-6">Do you have a personal advisor?</h4>
        <div className="d-flex pt-2">
        <RadioInput label="Yes" id="yes" name="hasPersonalAdvisor" value="true" checked={hasPersonalAdvisor} onChange={handleAdvisorChange} />
        <RadioInput label="No" id="no" name="hasPersonalAdvisor" value="false" checked={!hasPersonalAdvisor} onChange={handleAdvisorChange} />
        </div>
      </div>
      <div className="row">
        <div className="row my-0">
          <h5 >Which local authority does your personal advisor work for ?</h5>
        </div>
        <div className="div" style={{ maxWidth: "260px" }} >
          <div className="row ">
            <div className="input-group mb-3">
              <select onChange={handleSelectChange} className="form-select" id="inputGroupSelect01">
                <option value={personalAdvisorlocalAuthority} selected disabled>{personalAdvisorlocalAuthority}</option>
                <option value={'one'}>One</option>
                <option value={'two'}>Two</option>
                <option value={'three'}>Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <InputField
              handleChange={(e) => updateAdvisor('firstName', e)}
              value={firstName}
              label="First Name mention"
              type="text"
              id="firstName"
              placeholder="Enter first name"
            />
          </div>
          <div className="col-12 col-md-6">
            <InputField
              handleChange={(e) => updateAdvisor('surName', e)}
              value={surName}
              label="Surname"
              type="text"
              id="surName"
              placeholder="Enter surname"
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center ">
          <div className="col-12 col-md-6">
            <InputField
              handleChange={(e) => updateAdvisor('email', e)}
              value={email}
              label="Email"
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="col-12 col-md-6">
            <InputField
              handleChange={(e) => updateAdvisor('phoneNumber', e)}
              value={phoneNumber}
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <div className={`d-flex mt-2 justify-content-${error ? "between" : "end"}`}>
          {error && <div className="text-danger">Submission error ${error.message}</div>}
          
          <div className=""
          style={{  marginRight:"22px" }}
         >

          <NextPreviousButtons
            showSkipBtn={false}
            handleNextStep={handleCreate}
            handlePreviousStep={handlePreviousStep}
          />
          </div>
        </div>
      </div>
    </div>
  </>

  );
}

export default RoomReqStep2;
