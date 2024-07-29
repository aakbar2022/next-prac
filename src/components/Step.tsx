import { CheckIcon } from "@/assets/images";
import React from "react";

interface Props {
  icon: JSX.Element;
  inActiveIcon: JSX.Element;
  stepCount: number;
  stepDetail: string;
  isActive: boolean;
  isDone: boolean;
  IconColor: string;
}

const Step: React.FC<Props> = ({
  stepCount,
  stepDetail,
  isDone,
  isActive,
  icon,
  inActiveIcon,
}) => {

  return (
    <div className="step" >
      <div
        className={`bullet ${isDone ? "done" : isActive ? "active" : "inActive"}`}
      >
        {isDone ? <CheckIcon /> : isActive ? icon : inActiveIcon}
      </div>
      <div className="step_cont mt-2">
        <p className="subTextColor">STEP {stepCount}</p>
        <h6 className={`fw-normal ${isActive ? "defaultBlackColor" : ""}`}>
          {stepDetail}
        </h6>
      </div>
      <div className={`line ${isDone ? "doneBg" : "defaultBgColor"}`} />
    </div>
  );
};

export default Step;
