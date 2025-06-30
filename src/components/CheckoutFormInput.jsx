import { useState } from "react";

function CheckoutFormInput(props) {
	const { onChange, ...inputProps } = props;

	return <input {...inputProps} onChange={onChange} className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm" />;
}

export default CheckoutFormInput;
