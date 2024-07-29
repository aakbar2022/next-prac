import {
  AdditionalIcon,
  BriefCase,
  HouseIcon,
  PencilIcon,
  PersonIcon,
} from "@/assets/images";
import { Step } from "@/src/components";
import { initAdditionalDetails, initEducation, initialPersonalAdvisor, initJobDetail, roomReqData1 } from "@/src/stepDataInit";
import { useState } from "react";
import RoomReqStep1 from "./RoomReqStep1";
import RoomReqStep2 from "./RoomReqStep2";
import RoomReqStep3 from "./RoomReqStep3";
import RoomReqStep4 from "./RoomReqStep4";
import RoomReqStep5 from "./RoomReqStep5";

const data: StepData[] = [
  {
    icon: <PersonIcon />,
    inActiveIcon: <PersonIcon color="#D1DBFF" />,
    IconColor: "#D1DBFF",
    stepCount: 1,
    stepDetail: "Basic Details",
    isActive: true,
    isDone: false,
  },
  {
    icon: <BriefCase />,
    inActiveIcon: <BriefCase color="white" />,
    IconColor: "#FF0000",
    stepCount: 2,
    stepDetail: "Job Details",
    isActive: false,
    isDone: false,
  },
  {
    icon: <PencilIcon />,
    inActiveIcon: <PencilIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 3,
    stepDetail: "Personal Advisor",
    isActive: false,
    isDone: false,
  },
  {
    icon: <HouseIcon />,
    inActiveIcon: <HouseIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 4,
    stepDetail: "Education",
    isActive: false,
    isDone: false,
  },
  {
    icon: <AdditionalIcon />,
    inActiveIcon: <AdditionalIcon color="white" />,
    IconColor: "#FF0000",
    stepCount: 5,
    stepDetail: "Additional Details",
    isActive: false,
    isDone: false,
  },
];

function Stepper({ roomId }: { roomId: string }) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepsData, setStepsData] = useState<StepData[]>([...data]);
  // step data states
  const [formData1, setFormData1] = useState<RoomReqData1>(roomReqData1);
  const [jobDetail, setJobDetail] = useState<JobDeailInterface>(initJobDetail)
  const [personalAdvisor, setPersonalAdvisor] = useState<PersonalAdvisorInterface>(initialPersonalAdvisor)
  const [education, setEducation] = useState<EducationInterface>(initEducation)
  const [additionalDetails, setAdditionalDetails] = useState<AdditionalDetailsInterface>(initAdditionalDetails)
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData1({
      ...formData1,
      uniqueId: roomId,
      basicDetails: {
        ...formData1.basicDetails,
        [fieldName]: value,
      }
    });
  };

  const handleCheckboxChange = () => {
    setFormData1({
      ...formData1,
      uniqueId: roomId,
      basicDetails: {
        ...formData1.basicDetails,
        isWorkingWithLocalAuthority: !formData1.basicDetails
          .isWorkingWithLocalAuthority,
      }
    });
  }

  const handleChange = (propertyName: string, value: any) => {
    setJobDetail({
      uniqueId: roomId,
      jobDetails: {
        ...jobDetail.jobDetails,
        [propertyName]: value
      },
    });
  };

  const updatePersonalAdvisor = (propertyName: string, value: any) => {
    setPersonalAdvisor({
      ...personalAdvisor,
      uniqueId: roomId,
      personalAdvisor: {
        ...personalAdvisor.personalAdvisor,
        [propertyName]: value
      },
    });
  };

  const updateEducation = (propertyName: string, value: any) => {
    setEducation({
      ...education,
      uniqueId: roomId,
      education: {
        ...education.education,
        [propertyName]: value
      },
    });
  };
  const handleCheckboxDetailsChange = (property: keyof AdditionalDetailsInterface['additionalDetails']) => {
    setAdditionalDetails(prevState => ({
      ...prevState,
      uniqueId: roomId,
      additionalDetails: {
        ...prevState.additionalDetails,
        [property]: !prevState.additionalDetails[property],
      }
    }));
  };
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
          <RoomReqStep1
            handleInputChange={handleInputChange}
            formData1={formData1}
            handleNextStep={handleNextStep}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      case 1:
        return (
          <RoomReqStep2
            jobDetail={jobDetail}
            updateJobDetail={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 2:
        return (
          <RoomReqStep3
            updateAdvisor={updatePersonalAdvisor}
            personalAdvisor={personalAdvisor}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 3:
        return (
          <RoomReqStep4
            education={education}
            updateEducationHandle={updateEducation}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 4:
        return (
          <RoomReqStep5
            additionalDetails={additionalDetails}
            handleCheckboxDetailsChange={handleCheckboxDetailsChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <div className="container w-100 customModal">
      <div className="row flex-wrap justify-content-between px-3 py-3"
      >
        <div className="border-22 primaryBgColor step_container progress-bar-vertical"
      //  style={{maxWidth:"300px"}}
          
          >
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

export default Stepper;
