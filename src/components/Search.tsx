import { SearchIcon } from "@/assets/images";
import { localAuthority } from "@/data/localAuthority";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Select from 'react-select';

interface Props {
  label: string;
  placeholder?: string;
  styles?: any;
  Contaiinerstyles?: any;
  onInputChange?: (value: string) => void;
}



const Search: React.FC<Props> = ({
  label,
  styles,
  Contaiinerstyles,
  placeholder = "",
  onInputChange,
}) => {
  const router = useRouter();

  const [postalCodeInputValue, setPostalCodeInputValue] = useState("");

  const handleInputTypeOnlyNumbers = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow only numbers and backspace
    if (
      !(event.key === "Backspace" || /[0-9]/.test(event.key)) ||
      (event.currentTarget.value.length === 6 && event.key !== "Backspace")
    ) {
      event.preventDefault();
    }
  };

  // Handles postal code length and input
  const handlePostalCodeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.toUpperCase(); // Convert input to uppercase
  
    // Check if space is added
  if (inputValue.includes(' ')) {
    // Remove extra spaces and limit to a maximum of 7 characters
    inputValue = inputValue.replace(/\s+/g, ' ').substring(0, 7);
  } else {
    // Remove extra spaces and limit to a maximum of 6 characters
    inputValue = inputValue.replace(/\s+/g, '').substring(0, 6);
  }
  
    // Update state with formatted value
    setPostalCodeInputValue(inputValue);
  };


// Handles select options of local authority
  const options = localAuthority.map((item) => ({
    value: item.value,
    label: item.label
  }));

  // State to hold selected option
  var [limitedOptions, setLimitedOptions] = useState(options.slice(0, 5));
  const [selectedOption, setSelectedOption] = useState(null);
  const [authorityInputValue, setauthorityInputValue] = useState('');

  const handleSelectInputChange = (inputValue: string) => {
    const filteredOptions = localAuthority.filter((option) => option.label.toLowerCase().includes(inputValue.toLocaleLowerCase()));
    const updatedLimitedOptions = filteredOptions.slice(0, 5);
    setLimitedOptions(updatedLimitedOptions);

  
    setauthorityInputValue(inputValue);
  
  };
  const handleSelectChange = (finalSelectedOption: any) => {
    setSelectedOption(finalSelectedOption);

  };


  return (
    <div className="d-flex align-items-center my-1 search_parent_div gap-4">

      <div className="d-flex align-items-center search_fields_container mt-1">
        <div className="search_item_container_authority">
          <text className="fw-bold">Local Authority</text>
          <Select
            options={limitedOptions}
            value={selectedOption}
            onChange={handleSelectChange}
            onInputChange={handleSelectInputChange}
            placeholder="Select Local Authority"
            className="search_input_field"
            menuIsOpen={authorityInputValue.length > 0}
          />
        </div>

        <div className="search_separater_container" />

        <div className="search_item_container_postalcode">
          <text className="fw-bold">Postal Code</text>
          <input
            type="text"
            className="form-control search_input"
            style={{ padding: "6px 0", fontSize: "15px", border: "none", boxShadow: "none" }}
            placeholder="Enter postal code"
            aria-label="Postal Code"
            value={postalCodeInputValue}
            onChange={handlePostalCodeInputChange}
            // onKeyDown={handleInputTypeOnlyNumbers}
          />
        </div>

        <div className="search_icon_and_separater search_separater_container" style={{ marginLeft: '3px', marginRight: '-2px' }} />

        <button className="btn btn-outline-dark search_item_container text-center search_icon_text" onClick={() => router.push("/listPage")}>Search</button>
      </div>


      <div
        className=" d-flex align-items-center justify-content-center search_icon_and_separater"
        style={{
          width: "50px",
          height: "50px",
          background: "#b9c8ff",
          borderRadius: "999px",
          marginLeft: '5px',
        }}
        onClick={() => router.push("/listPage")}
      >
        <SearchIcon />
      </div>

    </div>
  );
};

export default Search;
