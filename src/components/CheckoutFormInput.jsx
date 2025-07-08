import { useState } from "react";

function CheckoutFormInput(props) {
	const [blurred, setBlurred] = useState(false);
	const [isValid, setIsValid] = useState(true);

	function handleBlur(e) {
		setBlurred(true);
		setIsValid(e.target.checkValidity());
	}

	const { handleInputChange, errorMessage, label, ...inputProps } = props;

	if (label !== undefined) {
		return (
			<div className="flex">
				<input id={props.id} {...inputProps} onChange={handleInputChange} required />
				<label htmlFor={props.id} className="ml-2 text-xs text-gray-600">
					{label}
				</label>
			</div>
		);
	}

	return (
		<div>
			<input {...inputProps} onChange={handleInputChange} onBlur={handleBlur} required className={`w-full block border-2 border-gray-300 ${blurred && `invalid:border-red-700`} rounded-sm placeholder:text-sm pl-2 py-2 text-sm`} />
			<span className="text-xs text-red-700">{blurred && !isValid && errorMessage}</span>
		</div>
	);
}

export default CheckoutFormInput;
