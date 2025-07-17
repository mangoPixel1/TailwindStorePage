import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentFormInput from "./PaymentFormInput";

function PaymentForm() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      type: "text",
      name: "card",
      placeholder: "Card number",
      //autoComplete: "email",
      //pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage: "Please enter a valid card number",
      isFullWidth: true,
    },
    {
      id: 2,
      type: "text",
      name: "expiration",
      placeholder: "Expiration date (MM/YY)",
      //autoComplete: "email",
      //pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage: "Please enter a valid date in MM/YY",
      isFullWidth: false,
    },
    {
      id: 3,
      type: "text",
      name: "cvv",
      placeholder: "Security Code (CVV)",
      //autoComplete: "email",
      //pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage: "Please enter a valid code",
      isFullWidth: false,
    },
    {
      id: 4,
      type: "text",
      name: "name",
      placeholder: "Name on Card",
      //autoComplete: "email",
      //pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage: "Please enter a valid name as it appears on your card",
      isFullWidth: true,
    },
  ]);

  const [values, setValues] = useState({
    card: "",
    expiration: "",
    cvv: "",
    name: "",
  });

  const [useSameAddr, setUseSameAddr] = useState(true);

  return (
    <form className="space-y-3">
      <h1 className="mb-2 text-lg text-gray-800 font-semibold">Payment</h1>
      {inputs.map((input) => (
        <PaymentFormInput key={input.id} {...input} />
      ))}
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
    </form>
  );
}

export default PaymentForm;
