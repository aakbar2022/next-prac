import { useState } from "react";
import Congratulations from "./Congratulations";
import LeaveRequest from "./LeaveRequest";

interface Props {
  closeModal: () => void
}
const initialRequestData: RequestData = {
  requestInput: {
    email: "",
    firstName: "",
    phoneNumber: "",
    queryDetail: "",
    surname: ""
  }
};

function RequestStepper({ closeModal }: Props) {
  const [requestData, setRequestData] = useState<RequestData>(initialRequestData);
  const [currentStep, setCurrentStep] = useState<number>(0);


  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <LeaveRequest
            requestData={requestData}
            setRequestData={setRequestData}
            currentStep={currentStep}
            handleNextStep={handleNextStep}
            handleCloseStep={closeModal}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 1:
        return (
          <Congratulations
            handleNextStep={closeModal}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <div className="container w-100 customModal"
    >
      <div className="d-flex flex-column justify-content-between step_content_container">
        <form id="multiStepForm">{renderCurrentForm()}</form>
      </div>
    </div>
  );
}

export default RequestStepper;
