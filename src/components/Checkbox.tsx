// Checkbox.tsx
import React from 'react';

interface Props {
    label?: string;
    isChecked: boolean;
    handleCheckboxChange: () => void;
}

const Checkbox: React.FC<Props> = ({ label, isChecked, handleCheckboxChange }) => {

    return (
        <div className="form-check mb-3" >
            <input
                type="checkbox"
                className="form-check-input"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label className="form-check-label mt-1 fs-6" onClick={handleCheckboxChange}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
