import { UPDATE_JOB_DETAILS } from "@/services";
import {
  Counter,
  CustomSpinner,
  RadioInput
} from "@/src/components";
import { useMutation } from "@apollo/client";
import NextPreviousButtons from "../landlordStepper/NextPreviousButtons";
interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  jobDetail: JobDeailInterface;
  updateJobDetail: (propertyName: string, value: any) => void;
}
function RoomReqStep2({ handleNextStep, handlePreviousStep, jobDetail, updateJobDetail }: Props) {
  const { isWorking, workHoursPerDay, localConnection, otherBenefitsDescription, rcvAnyOtherBenefits, rcvUniversalCredit } = jobDetail.jobDetails
  const [updateJobDetails, { loading, error }] = useMutation(UPDATE_JOB_DETAILS);

  const handleWorkingChange = (e: any) => {
    updateJobDetail('isWorking', e.target.value);
  };
  const rcvUniversalCreditChange = (e: any) => {
    const value = e.target.value === "true";
    updateJobDetail('rcvUniversalCredit', value);
  };

  const rcvAnyOtherBenefitsChange = (e: any) => {
    const value = e.target.value === "true";
    updateJobDetail('rcvAnyOtherBenefits', value)
  };
  const handleCreate = async () => {
    
    try {
      const { data } = await updateJobDetails({
        variables: jobDetail,
      });
      // if (data.updateJobDetails.uniqueId) {
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
      <div className="job px-3 py-1 mt-4">
        <h2 className="fw-normal mt-1">Next, tell us about your job</h2>
        <p className="subTextColor my-2">
          you need to provide us some basic information about your and your family
          this information will not be made public, and it will be used to finding
          perfect finding for you.
        </p>
        <div className="mt-4 mb-3 w-100">
          <h4 className="fs-6 fw-normal">Are you working?</h4>
          <div className="d-flex pt-2 gap-2 flex-wrap">
            <RadioInput label="Full time" id="fullTime" name="working" value="FULL_TIME" checked={isWorking === "FULL_TIME"} onChange={handleWorkingChange} />
            <RadioInput label="Part time" id="partTime" name="working" value="PART_TIME" checked={isWorking === "PART_TIME"} onChange={handleWorkingChange} />
          </div>
        </div>
        <div className="row">
          <Counter count={workHoursPerDay} onChange={(value: any) => updateJobDetail('workHoursPerDay', value)} />
        </div>
        <div className="my-2">
          <h4 className="fs-6 fw-medium">Do you receive universal credit?</h4>
          <div className="d-flex pt-2">
            <RadioInput label="Yes" id="yes" name="credit" value="true" checked={rcvUniversalCredit} onChange={rcvUniversalCreditChange} />
            <RadioInput label="No" id="no" name="credit" value="false" checked={!rcvUniversalCredit} onChange={rcvUniversalCreditChange} />
          </div>
        </div>

        <div className="col-12 fs-6 mt-2">
          <h4 className="fs-6 fw-medium defultBlackColor">Do you receive any other benefits?</h4>
          <div className="d-flex pt-2">
            <RadioInput label="Yes" id="yes1" name="benefits" value="true" checked={rcvAnyOtherBenefits} onChange={rcvAnyOtherBenefitsChange} />
            <RadioInput label="No" id="no1" name="benefits" value="false" checked={!rcvAnyOtherBenefits} onChange={rcvAnyOtherBenefitsChange} />
          </div>
        </div>

        <div className="row my-2">
         <div className=""
          style={{  marginRight:"15px" }}
         >

          <textarea
            onChange={(e) => updateJobDetail("otherBenefitsDescription", e.target.value)}
            value={otherBenefitsDescription}
            className="form-control"
            placeholder="Write your description here..."
            style={{ minHeight: "calc(2.5em + 3.25rem + 2px)", padding:"14px 10px" }}
          />
          
         </div>
          {/* <div className="row mt-4 w-100">
            <h4>Local Connection</h4>
            <div className="div" >
              <div className="row m-0 p-0 w-100 ">
                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroupSelect01">
                    <option value={localConnection} key={localConnection} selected disabled>Select Local Connections</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className={`d-flex justify-content-${error ? "between" : "end"}`}>
          {error && <div className="text-danger">Submission error ${error.message}</div>}
          <NextPreviousButtons
            showSkipBtn={false}
            handleNextStep={handleCreate}
            handlePreviousStep={handlePreviousStep}
          />
        </div>
      </div>
    </>

  );
}

export default RoomReqStep2;
