import { useState } from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import type { SelectItem } from "../../../interface/interfaces";

const TypeSelect = ({ employmentTypes, textType, name }:
  { employmentTypes: SelectItem[], textType: string, name: string }) => {
  const [selectedType, setSelectedType] = useState("");
  const [touched, setTouched] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSelect = (typeId: string) => {
    setSelectedType(typeId);
    setTouched(true);
  };

  const hasError = touched && !selectedType;

  return (
    <div className="w-full max-w-md mx-auto p-0">
      <div className="relative">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {textType}
          <span className="text-red-500 ml-1">*</span>
          <button
            type="button"
            className="ml-2 text-gray-400 hover:text-gray-500"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Show data type descriptions"
          >
            <BsExclamationCircleFill />
          </button>
        </label>

        {showTooltip && (
          <div className="absolute z-10 w-64 p-2 mt-1 text-sm text-white bg-gray-800 rounded-md shadow-lg">
            <ul className="space-y-1">
              {employmentTypes.map((type) => (
                <li key={type.id}>
                  <strong>{type.label}:</strong> {type.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative">
          <select
            id={name}
            value={selectedType}
            onChange={(e) => handleSelect(e.target.value)}
            // onBlur={() => setTouched(true)}
            className={`
              block w-full px-4 py-3 pr-8 rounded-lg border
              appearance-none bg-white
              focus:outline-none focus:ring-2 focus:border-blue-500
              transition duration-150 ease-in-out
              ${hasError ? 'border-red-500' : 'border-gray-300'}
              ${!selectedType ? 'text-gray-500' : 'text-gray-900'}
            `}
            aria-invalid={hasError}
            aria-describedby={hasError ? "error-message" : undefined}
          >
            <option value="" disabled>
              Select {textType}
            </option>
            {employmentTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {selectedType && (
          <div className="mt-2 flex items-center text-sm text-gray-600">
            {/* {employmentTypes.find(type => type.id === selectedType)?.icon({ className: "w-4 h-4 mr-2" })} */}
            <span>Selected: {employmentTypes.find(type => type.id === selectedType)?.label}</span>
          </div>
        )}

        {hasError && (
          <p id="error-message" className="mt-2 text-sm text-red-600 flex items-center">
            <BsExclamationCircleFill className="w-4 h-4 mr-1" />
            Please select an {textType}
          </p>
        )}
      </div>
    </div>
  );
};

export default TypeSelect;