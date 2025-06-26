import { useState } from "react";

function CheckoutForm() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      name: "email",
      placeholder: "Email",
      type: "text",
      width: "full",
    },
    {
      id: 2,
      name: "phone",
      placeholder: "Phone number",
      width: "full",
    },
    {
      id: 3,
      name: "region",
      placeholder: "Country/region",
      width: "full",
    },
    {
      id: 4,
      name: "firstName",
      placeholder: "First name",
      width: "full",
    },
    {
      id: 5,
      name: "lastName",
      placeholder: "Last name",
      width: "full",
    },
    {
      id: 6,
      name: "address",
      placeholder: "Address",
      width: "full",
    },
    {
      id: 7,
      name: "ext",
      placeholder: "Apartment, suite, etc. (optional)",
      width: "full",
    },
    {
      id: 8,
      name: "city",
      placeholder: "City",
      width: "full",
    },
    {
      id: 9,
      name: "state",
      placeholder: "State",
      width: "full",
    },
    {
      id: 10,
      name: "zip",
      placeholder: "ZIP code",
      width: "full",
    },
  ]);
  const [values, setValues] = useState({});

  return (
    <div>
      {/* Express Checkout */}
      <div className="mb-5 max-w-2xl">
        <h1 className="text-lg text-gray-800 font-semibold">
          Express Checkout
        </h1>
        <div className="grid grid-cols-3 gap-2">
          <button className="block cursor-pointer py-2 w-full text-sm text-white bg-purple-900">
            Affirm
          </button>
          <button className="block cursor-pointer py-2 w-full text-sm bg-amber-600">
            Amazon Pay
          </button>
          <button className="block cursor-pointer py-2 w-full text-sm text-white bg-blue-900">
            PayPal
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-5">
        <h1 className="mb-2 text-lg text-gray-800 font-semibold">
          Contact Information
        </h1>
        <div className="mb-4">
          <input
            id="contact-email"
            type="email"
            placeholder="Email"
            className="block w-full border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />
          <div className="mt-2">
            <input
              type="checkbox"
              id="opt-in-email"
              name="opt-in-email"
              value="true"
            />
            <label
              htmlFor="opt-in-email"
              className="ml-2 text-xs text-gray-600"
            >
              Email me with news and offers
            </label>
          </div>
        </div>
        <div>
          <input
            id="contact-phone"
            type="tel"
            placeholder="Phone number"
            className="block w-full border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />
          <div className="mt-2">
            <input
              type="checkbox"
              id="opt-in-text"
              name="opt-in-text"
              value="true"
            />
            <label htmlFor="opt-in-text" className="ml-2 text-xs text-gray-600">
              I agree to receive order updates and promotional texts. Message &
              data rates may apply.
            </label>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="mb-5">
        <h1 className="mb-2 text-lg text-gray-800 font-semibold">
          Shipping Address
        </h1>
        <div className="space-y-3">
          <input
            id="region"
            type="text"
            placeholder="Country/region"
            className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
          />
          <div className="flex w-full gap-2">
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
            />
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
            />
          </div>

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
        </div>
      </div>
      <button className="mb-5 block w-full px-3 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer">
        Continue to Payment
      </button>
    </div>
  );
}

export default CheckoutForm;
