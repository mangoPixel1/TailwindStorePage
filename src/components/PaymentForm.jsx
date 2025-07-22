import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentFormInput from "./PaymentFormInput";
import { DiVim } from "react-icons/di";

function PaymentForm() {
  const SHIPPING_INFO_INDEX = 5;

  const [inputs, setInputs] = useState([
    {
      id: 1,
      type: "text",
      name: "card",
      placeholder: "Card number",
      pattern:
        "^\\d{16}$|^\\d{4} \\d{4} \\d{4} \\d{4}$|^\\d{4}-\\d{4}-\\d{4}-\\d{4}$",
      errorMessage:
        "Please enter a valid 16-digit card number (e.g., 1234 5678 9012 3456)",
      isFullWidth: true,
    },
    {
      id: 2,
      type: "text",
      name: "expiration",
      placeholder: "Expiration date (MM/YY)",
      pattern: "^(0[1-9]|1[0-2])/\\d{2}$",
      errorMessage: "Enter a valid expiration in MM/YY format (e.g., 09/26)",
      isFullWidth: false,
    },
    {
      id: 3,
      type: "text",
      name: "cvv",
      placeholder: "Security Code (CVV)",
      pattern: "^\\d{3,4}$",
      errorMessage:
        "Enter a valid 3 or 4 digit security code (e.g., 123 or 1234)",
      isFullWidth: false,
    },
    {
      id: 4,
      type: "text",
      name: "card_name",
      placeholder: "Name on Card",
      pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ'\\-\\s]{2,50}$",
      errorMessage:
        "Name should match the cardholder's name (letters, spaces, hyphens, apostrophes allowed)",
      isFullWidth: true,
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
      isFullWidth: true,
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
      isFullWidth: true,
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
      isFullWidth: true,
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
      isFullWidth: true,
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
      isFullWidth: true,
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
      isFullWidth: true,
    },
    {
      id: 11,
      type: "text",
      name: "zip",
      placeholder: "ZIP code",
      autoComplete: "postal-code",
      pattern: "^\\d{5}(-\\d{4})?$",
      errorMessage: "Enter a 5-digit ZIP code (e.g., 12345)",
      isFullWidth: true,
    },
  ]);

  const [values, setValues] = useState({
    card: "",
    expiration: "",
    cvv: "",
    card_name: "",
    region: "",
    name: "",
    addrLine1: "",
    addrLine2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [useSameAddr, setUseSameAddr] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h1 className="mb-2 text-lg text-gray-800 font-semibold">Payment</h1>
      {inputs
        .filter((input) => input.id < SHIPPING_INFO_INDEX)
        .map((input) => (
          <PaymentFormInput key={input.id} {...input} />
        ))}
      <div className="mb-4">
        <input
          type="checkbox"
          id="useShipAddr"
          name="useShipAddr"
          checked={useSameAddr}
          onChange={() => setUseSameAddr((prev) => !prev)}
        />
        <label htmlFor="useShipAddr" className="ml-2 text-sm text-gray-800">
          Use shipping address as billing address
        </label>
      </div>

      {!useSameAddr && (
        <div className="space-y-3">
          {inputs
            .filter((input) => input.id >= SHIPPING_INFO_INDEX)
            .map((input) => (
              <PaymentFormInput key={input.id} {...input} />
            ))}
        </div>
      )}
      <button
        type="submit"
        className="mb-5 block w-full px-3 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer"
      >
        Pay Now
      </button>
    </form>
  );
}

export default PaymentForm;

/*
{inputs.map((input) => (
        <PaymentFormInput key={input.id} {...input} />
      ))}
*/
