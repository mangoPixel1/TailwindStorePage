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
    },
    {
      id: 2,
      type: "text",
      name: "expiration",
      placeholder: "Expiration date (MM/YY)",
      //autoComplete: "email",
      //pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage: "Please enter a valid date in MM/YY",
    },
    {
      id: 3,
      type: "text",
      name: "cvv",
      placeholder: "Security Code (CVV)",
      //autoComplete: "email",
      //pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage: "Please enter a valid code",
    },
    {
      id: 4,
      type: "text",
      name: "name",
      placeholder: "Name on Card",
      //autoComplete: "email",
      //pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      errorMessage: "Please enter a valid name as it appears on your card",
    },
  ]);

  const [values, setValues] = useState({
    card: "",
    expiration: "",
    cvv: "",
    name: "",
  });

  return (
    <form>
      <PaymentFormInput />
    </form>
  );
}

export default PaymentForm;
