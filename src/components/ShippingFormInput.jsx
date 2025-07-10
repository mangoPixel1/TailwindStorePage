import { useState } from "react";

function ShippingFormInput(props) {
  const { handleInputChange, errorMessage, label, ...inputProps } = props;

  const [blurred, setBlurred] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const [hasFocused, setHasFocused] = useState(false);

  function handleBlur(e) {
    setBlurred(true);
    setIsValid(e.target.checkValidity());
  }

  function handleChange(e) {
    handleInputChange(e);
    setIsValid(e.target.checkValidity());
  }

  // For checkbox inputs
  if (label !== undefined) {
    return (
      <div className="flex">
        <input id={props.id} {...inputProps} onChange={handleInputChange} />
        <label htmlFor={props.id} className="ml-2 text-xs text-gray-600">
          {label}
        </label>
      </div>
    );
  }

  // For last input field
  if (props.name === "zip") {
    return (
      <div>
        <input
          {...inputProps}
          onChange={handleChange}
          onFocus={() => setHasFocused(true)}
          required={props.name !== "addrLine2"}
          className={`w-full block border-2 border-gray-300 ${
            hasFocused && `invalid:border-red-700`
          } rounded-sm placeholder:text-sm pl-2 py-2 text-sm`}
        />
        <span className="text-xs text-red-700">
          {hasFocused && !isValid && errorMessage}
        </span>
      </div>
    );
  }

  return (
    <div>
      <input
        {...inputProps}
        onChange={handleInputChange}
        onBlur={handleBlur}
        required={props.name !== "addrLine2"}
        className={`w-full block border-2 border-gray-300 ${
          blurred && `invalid:border-red-700`
        } rounded-sm placeholder:text-sm pl-2 py-2 text-sm`}
      />
      <span className="text-xs text-red-700">
        {blurred && !isValid && errorMessage}
      </span>
    </div>
  );
}

export default ShippingFormInput;
