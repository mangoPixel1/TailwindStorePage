import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShippingFormInput from "./ShippingFormInput";

function ShippingForm() {
  const EMAIL_INDEX = 0;
  const OPT_IN_EMAIL_INDEX = 1;
  const PHONE_INDEX = 2;
  const OPT_IN_PHONE_INDEX = 3;

  const navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      id: 1,
      type: "email",
      name: "email",
      placeholder: "Email",
      autoComplete: "email",
      pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage:
        "Please enter a valid email address (e.g., name@example.com)",
    },
    {
      id: 2,
      type: "checkbox",
      name: "optInEmail",
    },
    {
      id: 3,
      type: "tel",
      name: "phone",
      placeholder: "Phone number",
      autoComplete: "tel",
      pattern:
        "^\\+?1?[.\\s\\-]?\\(?\\d{3}\\)?[.\\s\\-]?\\d{3}[.\\s\\-]?\\d{4}$",
      errorMessage:
        "Enter a valid US phone number (e.g., 123-456-7890 or (123) 456-7890)",
    },
    {
      id: 4,
      type: "checkbox",
      name: "optInText",
    },
    {
      id: 5,
      type: "text",
      name: "region",
      placeholder: "Country/region",
      autoComplete: "country-name",
      pattern: "^[A-Za-z\\s]{2,56}$",
      errorMessage:
        "Country name should contain only letters and spaces (e.g., United States)",
    },
    {
      id: 6,
      type: "text",
      name: "name",
      placeholder: "Name",
      autoComplete: "name",
      pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ' \\-]{2,50}$",
      errorMessage:
        "Name can include letters, spaces, hyphens, and apostrophes only (e.g., Anne-Marie O'Neil)",
    },
    {
      id: 7,
      type: "text",
      name: "addrLine1",
      placeholder: "Address",
      autoComplete: "address-line1",
      pattern: "^[A-Za-z0-9\\s.,'#\\-]{5,100}$",
      errorMessage:
        "Address should include letters, numbers, and common punctuation (e.g., 123 Main St., Apt #4)",
    },
    {
      id: 8,
      type: "text",
      name: "addrLine2",
      placeholder: "Apartment, suite, etc. (optional)",
      autoComplete: "address-line2",
      pattern: "^[A-Za-z0-9\\s.,'#\\-]{0,100}$",
      errorMessage:
        "Use letters, numbers, and common punctuation only (e.g., Apt 5B or Suite #101)",
    },
    {
      id: 9,
      type: "text",
      name: "city",
      placeholder: "City",
      autoComplete: "address-level2",
      pattern: "^[A-Za-z\\s'\\-]{2,85}$",
      errorMessage:
        "City name should only contain letters, spaces, apostrophes, and hyphens (e.g., Los Angeles or St. John's)",
    },
    {
      id: 10,
      type: "text",
      name: "state",
      placeholder: "State",
      autoComplete: "address-level1",
      pattern: "^[A-Z]{2}$",
      errorMessage:
        "Enter a 2-letter state abbreviation in uppercase (e.g., CA, TX)",
    },
    {
      id: 11,
      type: "text",
      name: "zip",
      placeholder: "ZIP code",
      autoComplete: "postal-code",
      pattern: "^\\d{5}(-\\d{4})?$",
      errorMessage: "Enter a 5-digit ZIP code (e.g., 12345)",
    },
  ]);

  const [values, setValues] = useState({
    email: "",
    optInEmail: false,
    phone: "",
    optInText: false,
    region: "",
    name: "",
    addrLine1: "",
    addrLine2: "",
    city: "",
    state: "",
    zip: "",
  });

  function handleInputChange(e) {
    const { name, type, value, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting");
    navigate("/checkout/payment");
  }

  //console.log(values);

  return (
    <form onSubmit={handleSubmit}>
      {/* Contact Information */}
      <div className="mb-5">
        <h1 className="mb-2 text-lg text-gray-800 font-semibold">
          Contact Information
        </h1>
        <div className="mb-4">
          <ShippingFormInput
            {...inputs[EMAIL_INDEX]}
            value={values[inputs[EMAIL_INDEX].name]}
            handleInputChange={handleInputChange}
          />

          <div className="mt-2">
            <ShippingFormInput
              {...inputs[OPT_IN_EMAIL_INDEX]}
              value={values[inputs[OPT_IN_EMAIL_INDEX].name]}
              handleInputChange={handleInputChange}
              label="Email me with news and offers"
            />
          </div>
        </div>

        <div>
          <ShippingFormInput
            {...inputs[PHONE_INDEX]}
            value={values[inputs[PHONE_INDEX].name]}
            handleInputChange={handleInputChange}
          />
          <div className="mt-2">
            <ShippingFormInput
              {...inputs[OPT_IN_PHONE_INDEX]}
              value={values[inputs[OPT_IN_PHONE_INDEX].name]}
              handleInputChange={handleInputChange}
              label="I agree to receive order updates and promotional texts. Message & data rates may apply."
            />
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="mb-5">
        <h1 className="mb-2 text-lg text-gray-800 font-semibold">
          Shipping Address
        </h1>
        <div className="space-y-3">
          {inputs
            .filter(
              (input) =>
                input.name !== "email" &&
                input.name !== "phone" &&
                input.name !== "optInEmail" &&
                input.name !== "optInText"
            )
            .map((input) => (
              <ShippingFormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                handleInputChange={handleInputChange}
              />
            ))}
        </div>
      </div>
      <button
        type="submit"
        className="mb-5 block w-full px-3 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer"
      >
        Continue to Payment
      </button>
    </form>
  );
}

export default ShippingForm;
