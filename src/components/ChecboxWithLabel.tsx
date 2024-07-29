import React, { useState } from "react";

interface Props {
  label: string;
  description: string;
  itemIndex?: number;
  showDescription: boolean
  onChangeHandler?: (isChecked: boolean, index: any) => void;
  defultCheck: boolean

}

const ChecboxWithLabel: React.FC<Props> = ({
  label,
  description,
  showDescription,
  itemIndex,
  onChangeHandler,
  defultCheck
}) => {
  const [isChecked, setIsChecked] = useState(defultCheck);

  const handleCheckboxClick = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    localStorage.setItem("checkboxState", JSON.stringify(newState));
    onChangeHandler && onChangeHandler(isChecked, itemIndex);
  };

  return (
    <div className="row align-items-center mb-4 p-0">
      <div
        className="col-1 d-flex justify-content-center align-items-center p-0"
        style={{ height: "100%" }}
      >
        <input
          type="checkbox"
          className="form-check-input"
          checked={defultCheck}
          onChange={handleCheckboxClick}
        />
      </div>
      <div className="col-11 px-0 mt-1" onClick={handleCheckboxClick}>
        <div className="d-flex flex-column justify-content-start mt-1">
          <div className="fs-6">{label}</div>
          {showDescription && (
            <div className="fs-6 mt-1" style={{color:"#C3C3C3"}}>{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChecboxWithLabel;
