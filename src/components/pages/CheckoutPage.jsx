import { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <section className="px-5">
      <header className="md:px-5 py-5">
        <h1 className="mb-3 text-2xl text-gray-700 font-bold">Fake Store</h1>
        <div className="flex gap-2 text-sm text-gray-500">
          <div>
            <span className="mr-2">{`Cart`}</span>
            <span>{`>`}</span>
          </div>
          <div>
            <span className="mr-2 text-gray-700">{`Shipping`}</span>
            <span>{`>`}</span>
          </div>
          <div>
            <span>{`Payment`}</span>
          </div>
        </div>
      </header>

      <hr className="mb-5" />

      <div>
        <h1 className="text-xl text-gray-800 font-semibold">
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

      <div>
        <h1 className="text-xl text-gray-800 font-semibold">
          Contact Information
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input type="checkbox" id="opt-in" name="opt-in" value="true" />
        <label htmlFor="opt-in" className="text-sm text-gray-600">
          Email me with news and offers
        </label>
      </div>

      <div>
        <h1 className="text-xl text-gray-800 font-semibold">
          Shipping Address
        </h1>
        <input
          type="text"
          placeholder="Country/region"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="First name"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="Last name"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="Address"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="City"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="State"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="ZIP code"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="Phone (optional)"
          className="block border-2 border-gray-300 py-1 rounded-sm"
        />
      </div>
      <button>Continue to Payment</button>
    </section>
  );
}

export default CheckoutPage;
