import { UPDATE_EDUCATION } from "@/services";
import { CustomSpinner } from "@/src/components";
import { useMutation } from "@apollo/client";
import NextPreviousButtons from "../landlordStepper/NextPreviousButtons";

interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  education: EducationInterface
  updateEducationHandle: (propertyName: string, value: any) => void
}
function RoomReqStep4({ handleNextStep, handlePreviousStep, education, updateEducationHandle }: Props) {
  const [updateEducation, { loading, error }] = useMutation(UPDATE_EDUCATION);
  const { isStudying } = education.education;

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value === "true";
    updateEducationHandle('isStudying', value);
  }
  const handleCreate = async () => {

    try {
      const { data } = await updateEducation({
        variables: education,
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
      {loading && <div style={{ position: 'absolute', top: '40%', left: '60%', zIndex: '1000' }}><CustomSpinner /> </div>}

      <div className="container p-5 pt-0 h-100 d-flex flex-column px-3 py-1 mt-3 ">
        <div className="row mt-3">
          <div className="col">
            <div className="price_container">
              <h2 className="fw-normal">Tell us about your education</h2>
              <p className="subTextColor">
                This information helps us understand the support you have and ensure a smoother experience</p>
              <div className="mt-4 mb-3">
                <h4 className="fs-6">Are you studying?</h4>
                <div className="d-flex pt-2">
                  <div className="item">
                    <input onChange={handleEducationChange} type="radio" id="yes" name="education" value="true" checked={isStudying} />
                    <label className="px-2" htmlFor="yes">Yes</label>
                  </div>
                  <div className="item">
                    <input onChange={handleEducationChange} type="radio" id="no" name="education" value="false" checked={!isStudying} />
                    <label className="px-2" htmlFor="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className={`d-flex justify-content-${error ? "between" : "end"}`}>
        {error && <div className="text-danger">Submission error ${error.message}</div>}
        <NextPreviousButtons
          showSkipBtn={false}
          handleNextStep={handleCreate}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </>
  );
}

export default RoomReqStep4;

