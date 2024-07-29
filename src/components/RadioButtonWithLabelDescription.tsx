import React, { useState } from "react";
import { MdDescription } from "react-icons/md";

interface Props {
  label: string;
  description: string;
  itemIndex?: number;
  showDescription: boolean;
  onChangeHandler?: (isChecked: boolean, index: any) => void;
  defultCheck: boolean;
  name: string; // Add a name prop for the radio group
}

const RadioButtonWithLabelDescription: React.FC<Props> = ({
  label,
  description,
  showDescription,
  itemIndex,
  onChangeHandler,
  defultCheck,
  name, // Use the name prop to group the radio buttons
}) => {
  const [isChecked, setIsChecked] = useState(defultCheck);

  const handleRadioClick = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    localStorage.setItem("radioState", JSON.stringify(newState));
    onChangeHandler && onChangeHandler(newState, itemIndex);
  };

  return (
    <div className="row align-items-center mb-4 pl-0">
      <div
        className="col-1 d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <input
          type="radio"
          className="form-check-input"
          checked={isChecked}
          onChange={handleRadioClick}
          name={name} // Ensure all radio buttons with the same name are grouped together
        />
      </div>
      <div className="col-11 px-0" onClick={handleRadioClick}>
        <div className="d-flex flex-column justify-content-start">
          <div className="fs-6">{label}</div>
          {showDescription && (
            <div className="fs-6 mt-1" style={{ color: "#C3C3C3" }}>
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RadioButtonWithLabelDescription;
