import { useState } from "react";

function CheckoutFormInput(props) {
  return (
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
    />
  );
}

export default CheckoutFormInput;
