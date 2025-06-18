import { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const cartItems = [
    {
      id: 1,
      title: "Premium Cotton T-Shirt",
      category: "Men's Clothing",
      quantity: 2,
      price: 49.98,
    },
    {
      id: 2,
      title: "Slim Fit Jeans",
      category: "Men's Clothing",
      quantity: 1,
      price: 49.99,
    },
    {
      id: 3,
      title: "Wireless Headphones",
      category: "Electronics",
      quantity: 1,
      price: 129.99,
    },
  ];

  return (
    <section className="px-5 md:px-10 flex justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-12 w-full max-w-7xl">
        <div className="lg:col-span-5 lg:mb-20">
          <header className="py-5">
            <h1 className="mb-3 text-2xl min-[600px]:text-3xl text-gray-700 font-bold">
              Fake Store
            </h1>
            <div className="flex gap-2 text-sm text-gray-500">
              <div>
                <span className="mr-2">{`Cart`}</span>
                <span>{`>`}</span>
              </div>
              <div>
                <span className="mr-2 text-gray-700 font-medium">{`Shipping`}</span>
                <span>{`>`}</span>
              </div>
              <div>
                <span>{`Payment`}</span>
              </div>
            </div>
          </header>

          <hr className="border border-gray-200 mb-5" />
          {/* Shipping Form - Left Column */}
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
                  <label
                    htmlFor="opt-in-text"
                    className="ml-2 text-xs text-gray-600"
                  >
                    I agree to receive order updates and promotional texts.
                    Message & data rates may apply.
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
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone (optional)"
                  className="w-full block border-2 border-gray-300 rounded-sm placeholder:text-sm pl-2 py-2 text-sm"
                />
              </div>
            </div>
            <button className="mb-5 block w-full px-3 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer">
              Continue to Payment
            </button>
          </div>
        </div>

        {/* Order Summary - Right Column */}
        <div className="lg:col-span-3 lg:mt-35 my-15">
          <div className="p-5 border border-gray-200 rounded-md">
            <h2 className="mb-4 font-semibold">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div className="flex">
                  <div className="mr-4 w-16 h-16 bg-gray-200 border-gray-300 border rounded-md"></div>
                  <div className="">
                    <span className="block text-sm font-medium">
                      {item.title}
                    </span>
                    <span className="block text-xs text-gray-600">
                      {item.category}
                    </span>
                    <span className="block text-sm text-gray-600">{`Qty: ${item.quantity}`}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <span className="block text-sm font-medium">{`$${item.price.toFixed(
                    2
                  )}`}</span>
                </div>
              </div>
            ))}

            <div className="mt-6 mb-4">
              <input
                id="discount-code"
                type="text"
                placeholder="Gift card or discount code"
                className="w-56 border-2 border-gray-300 rounded-sm mr-2 placeholder:text-sm pl-2 py-1 text-sm"
              />
              <button className="bg-gray-200 hover:bg-gray-300 transition duration-300 cursor-pointer text-sm rounded-sm px-4 py-1">
                Apply
              </button>
              {/* Show applied codes here */}
            </div>

            <hr className="border-gray-200 mt-5 mb-4" />

            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="block text-gray-700">Subtotal</span>
                <span className="block font-medium">$229.96</span>
              </div>
              <div className="flex justify-between">
                <span className="block text-gray-700">Discount</span>
                <span className="block font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="block text-gray-700">Estimated Taxes</span>
                <span className="block font-medium">$18.40</span>
              </div>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="flex justify-between font-semibold">
              <span className="block">Total</span>
              <span className="block">$18.40</span>
            </div>
          </div>

          <div className="my-4 text-center">
            <div className="flex justify-center gap-1 mb-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0110 0v4"></path>
              </svg>
              <span className="text-sm">Secure checkout</span>
            </div>
            <p className="text-xs text-gray-500">
              Your personal data is protected with 256-bit SSL encryption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
