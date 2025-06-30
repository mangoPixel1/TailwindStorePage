import { useState } from "react";
import CheckoutFormInput from "./CheckoutFormInput";

function CheckoutForm() {
	const [inputs, setInputs] = useState([
		{
			id: 1,
			type: "email",
			name: "email",
			placeholder: "Email",
			autoComplete: "email"
		},
		{
			id: 2,
			type: "checkbox",
			name: "optInEmail"
		},
		{
			id: 3,
			type: "tel",
			name: "phone",
			placeholder: "Phone number",
			autoComplete: "tel"
		},
		{
			id: 4,
			type: "checkbox",
			name: "optInText"
		},
		{
			id: 5,
			type: "text",
			name: "region",
			placeholder: "Country/region",
			autoComplete: "country-name"
		},
		{
			id: 6,
			type: "text",
			name: "name",
			placeholder: "Name",
			autoComplete: "name"
		},
		{
			id: 7,
			type: "text",
			name: "addrLine1",
			placeholder: "Address",
			autoComplete: "address-line1"
		},
		{
			id: 8,
			type: "text",
			name: "addrLine2",
			placeholder: "Apartment, suite, etc. (optional)",
			autoComplete: "address-line2"
		},
		{
			id: 9,
			type: "text",
			name: "city",
			placeholder: "City",
			autoComplete: "address-level2"
		},
		{
			id: 10,
			type: "text",
			name: "state",
			placeholder: "State",
			autoComplete: "address-level1"
		},
		{
			id: 11,
			type: "text",
			name: "zip",
			placeholder: "ZIP code",
			autoComplete: "postal-code"
		}
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
		zip: ""
	});

	function onChange(e) {
		setValues({ ...values, [e.target.name]: e.target.value });
	}

	console.log(values);

	return (
		<form>
			{/* Express Checkout */}
			<div className="mb-5 max-w-2xl">
				<h1 className="text-lg text-gray-800 font-semibold">Express Checkout</h1>
				<div className="grid grid-cols-3 gap-2">
					<button className="block cursor-pointer py-2 w-full text-sm text-white bg-purple-900">Affirm</button>
					<button className="block cursor-pointer py-2 w-full text-sm bg-amber-600">Amazon Pay</button>
					<button className="block cursor-pointer py-2 w-full text-sm text-white bg-blue-900">PayPal</button>
				</div>
			</div>

			{/* Contact Information */}
			<div className="mb-5">
				<h1 className="mb-2 text-lg text-gray-800 font-semibold">Contact Information</h1>
				<div className="mb-4">
					<CheckoutFormInput {...inputs[0]} value={values["email"]} onChange={onChange} />

					<div className="mt-2">
						<input id="optInEmail" type="checkbox" name="optInEmail" value="true" />

						<label htmlFor="optInEmail" className="ml-2 text-xs text-gray-600">
							Email me with news and offers
						</label>
					</div>
				</div>

				<div>
					<CheckoutFormInput {...inputs[2]} value={values["phone"]} onChange={onChange} />
					<div className="mt-2">
						<input id="optInText" type="checkbox" name="opt-in-text" value="true" />

						<label htmlFor="optInText" className="ml-2 text-xs text-gray-600">
							I agree to receive order updates and promotional texts. Message & data rates may apply.
						</label>
					</div>
				</div>
			</div>

			{/* Shipping Address */}
			<div className="mb-5">
				<h1 className="mb-2 text-lg text-gray-800 font-semibold">Shipping Address</h1>
				<div className="space-y-3">
					{/* map the inputs using CheckoutForm */}
					{inputs
						.filter(input => input.name !== "email" && input.name !== "phone" && input.name !== "optInEmail" && input.name !== "optInText")
						.map(input => (
							<CheckoutFormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
						))}
				</div>
			</div>
			<button className="mb-5 block w-full px-3 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer">Continue to Payment</button>
		</form>
	);
}

export default CheckoutForm;

// <input {...inputs[0]} className="block w-full border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm" />
// <input {...inputs[2]} className="block w-full border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm" />

/*
inputs.map((input) => (
            <CheckoutFormInput key={input.id} {...input} />
          ))
*/

/* 
<input
            id="region"
            type="text"
            placeholder="Country/region"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />

          <input
            id="name"
            type="text"
            placeholder="Name"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />

          <input
            id="address-1"
            type="text"
            placeholder="Address"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />

          <input
            id="address-2"
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />

          <input
            id="city"
            type="text"
            placeholder="City"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />
          <input
            id="state"
            type="text"
            placeholder="State"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />

          <input
            id="zip"
            type="text"
            placeholder="ZIP code"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />
*/
