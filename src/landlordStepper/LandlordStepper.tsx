import {
  EuroIcon,
  FileMarkIcon,
  HouseIcon,
  ImagesIcon,
  LegalIcon,
  PersonIcon,
} from "@/assets/images";
import { Step } from "@/src/components";
import { initialLegelDetails, initialPropertyDetails, initPropertyComplaint, initRentExpected, step1Data } from "@/src/stepDataInit";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./step6";

interface StepData {
  icon: JSX.Element;
  inActiveIcon: JSX.Element;
  stepCount: number;
  stepDetail: string;
  isActive: boolean;
  isDone: boolean;
  IconColor: string;
}

const data: StepData[] = [
  {
    icon: <PersonIcon />,
    inActiveIcon: <PersonIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 1,
    stepDetail: "Basic Details",
    isActive: true,
    isDone: false,
  },
  {
    icon: <HouseIcon />,
    inActiveIcon: <HouseIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 2,
    stepDetail: "Property Details",
    isActive: false,
    isDone: false,
  },
  {
    icon: <FileMarkIcon />,
    inActiveIcon: <FileMarkIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 3,
    stepDetail: "Property Complaints",
    isActive: false,
    isDone: false,
  },
  {
    icon: <EuroIcon />,
    inActiveIcon: <EuroIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 4,
    stepDetail: "Rent Expectations",
    isActive: false,
    isDone: false,
  },
  {
    icon: <LegalIcon />,
    inActiveIcon: <LegalIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 5,
    stepDetail: "Legals",
    isActive: false,
    isDone: false,
  },
  {
    icon: <ImagesIcon />,
    inActiveIcon: <ImagesIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 6,
    stepDetail: "Attachments",
    isActive: false,
    isDone: false,
  },
];


interface Props {
  closeLandlordModal: () => void;
}

function LandlordStepper(props: Props) {
  const { closeLandlordModal } = props
  const [stepsData, setStepsData] = useState<StepData[]>([...data]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<Step1Data>(step1Data);
  const [propertyDetailData, setPropertyDetailData] = useState<PropertyDetailData>(initialPropertyDetails);
  const [propertyComplaint, setPropertyComplaint] = useState<PropertyComplaint>(initPropertyComplaint);
  const [rentExpectation, setRentExpectation] = useState(initRentExpected)
  const [legalDetails, setLegalDetails] = useState<LegelDetails>(initialLegelDetails);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const saveUniqueId = (id: string) => {
    setPropertyDetailData({
      ...propertyDetailData,
      uniqueId: id
    })
    setPropertyComplaint({
      ...propertyComplaint,
      uniqueId: id
    })
    setRentExpectation({
      ...rentExpectation,
      uniqueId: id
    })
    setLegalDetails({
      ...legalDetails,
      uniqueId: id
    })
  }
  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      isWorkingWithLocalAuthority: !formData.isWorkingWithLocalAuthority,
    });
  }

  const handleComplaintCheckbox = (property: PropertyComplaintKey) => {
    setPropertyComplaint((prev) => ({
      ...prev,
      propertyComplaint: {
        ...prev.propertyComplaint,
        [property]: !prev.propertyComplaint[property],
      },
    }))
  }
  const handleNextStep = () => {
    if (currentStep < stepsData.length - 1) {
      const updatedSteps = stepsData.map((item, index) => ({
        ...item,
        isActive: index === currentStep + 1,
        isDone: index < currentStep + 1,
      }));
      setStepsData(updatedSteps);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      const updatedSteps = stepsData.map((item, index) => ({
        ...item,
        isActive: index === currentStep - 1,
        isDone: index < currentStep - 1,
      }));

      setStepsData(updatedSteps);
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1
            saveUniqueId={saveUniqueId}
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            handleInputChange={handleInputChange}
            handleNextStep={handleNextStep}
          />
        );
      case 1:
        return (
          <Step2
            propertyDetailData={propertyDetailData}
            setPropertyDetailData={setPropertyDetailData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 2:
        return (
          <Step3
            propertyDetails={propertyComplaint}
            handleComplaintCheckbox={handleComplaintCheckbox}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 3:
        return (
          <Step4
            setRentExpectation={setRentExpectation}
            rentExpectation={rentExpectation}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 4:
        return (
          <Step5
            setLegalDetails={setLegalDetails}
            legalDetails={legalDetails}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 5:
        return (
          <Step6
            closeLandlordModal={closeLandlordModal}
            uniqueId={propertyDetailData.uniqueId}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="container w-100 customModal"
    >
      <div className="row flex-wrap justify-content-between px-3 py-3">
        <div className="border-22 primaryBgColor step_container progress-bar-vertical">
          {stepsData.map((item, index) => (
            <Step
              key={index}
              stepCount={item.stepCount}
              stepDetail={item.stepDetail}
              isDone={item.isDone}
              isActive={item.isActive}
              icon={item.icon}
              inActiveIcon={item.inActiveIcon}
              IconColor={item.IconColor}
            />
          ))}
        </div>
        <div className="d-flex flex-column justify-content-between step_content_container">
          <form id="multiStepForm">{renderCurrentForm()}</form>
        </div>
      </div>
    </div>
  );
}

export default LandlordStepper;
