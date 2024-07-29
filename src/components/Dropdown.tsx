import { useState } from "react";

interface DropdownOption {
  label: string;
  value: string;
  action: () => void;
}

interface Props {
  label: string;
  options: DropdownOption[];
}

const Dropdown: React.FC<Props> = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    option.action();
  };

  return (
    <div className="dropdown mt-2">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption ? selectedOption.label : label}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
