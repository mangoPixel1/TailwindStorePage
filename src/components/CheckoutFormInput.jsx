import { useState } from "react";

function CheckoutFormInput(props) {
	const [focused, setFocused] = useState(false);
	function handleFocus(e) {
		setFocused(true);
	}

	const { handleInputChange, errorMessage, ...inputProps } = props;

	return (
		<div>
			<input {...inputProps} onChange={handleInputChange} required className="w-full block border-2 border-gray-300 invalid:border-red-700 rounded-sm placeholder:text-sm pl-2 py-2 text-sm" />
			<span className="text-xs text-red-700">{errorMessage}</span>
		</div>
	);
}

export default CheckoutFormInput;
