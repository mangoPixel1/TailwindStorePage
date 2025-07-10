import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import CheckoutForm from "../ShippingForm";

function CheckoutPayment() {
  const { cart, getTotalQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <section className="px-5 md:px-10 flex justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-12 w-full max-w-7xl">
        <div className="lg:col-span-5 lg:mb-20">
          <header className="py-5">
            <Link to="/">
              <h1 className="mb-3 text-2xl min-[600px]:text-3xl text-gray-700 font-bold">
                Fake Store
              </h1>
            </Link>

            <div className="flex gap-2 text-sm text-gray-500">
              <Link to="/cart">
                <div>
                  <span className="mr-2">{`Cart`}</span>
                  <span>{`>`}</span>
                </div>
              </Link>

              <div>
                <span>{`Shipping`}</span>
                <span>{`>`}</span>
              </div>

              <div>
                <span className="mr-2 text-gray-700 font-medium">{`Payment`}</span>
              </div>
            </div>
          </header>

          <hr className="border border-gray-200 mb-5" />

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

          {/* Shipping Form - Left Column */}
        </div>

        {/* Order Summary - Right Column */}
        <div className="lg:col-span-3 lg:mt-35 my-15">
          <div className="p-5 border border-gray-200 rounded-md">
            <h2 className="mb-4 font-semibold">Order Summary</h2>
            {cart.map((item) => (
              <div
                key={item.data.id}
                className="flex justify-between sm:flex-row mb-4"
              >
                <div className="flex">
                  <div className="mr-4 w-16 h-16 bg-gray-200 border-gray-300 border rounded-md flex-shrink-0"></div>
                  <div>
                    <span className="block text-sm font-medium">
                      {item.data.title}
                    </span>
                    <span className="block text-sm text-gray-600">{`Qty: ${item.quantity}`}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <span className="block text-sm font-medium">{`$${item.data.price.toFixed(
                    2
                  )}`}</span>
                </div>
              </div>
            ))}

            <hr className="border-gray-200 mt-5 mb-4" />

            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="block text-gray-700">Subtotal</span>
                <span className="block font-medium">$229.96</span>
              </div>
              <div className="flex justify-between">
                <span className="block text-gray-700">Shipping</span>
                <span className="block font-medium">$4.99</span>
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

export default CheckoutPayment;
