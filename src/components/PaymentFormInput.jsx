import { useState } from "react";

function PaymentFormInput(props) {
  const { errorMessage, isFullWidth, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      required={props.name !== "addrLine2"}
      className={`${
        isFullWidth ? `w-full` : `w-1/2 inline`
      } block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm`}
    />
  );
}

export default PaymentFormInput;
