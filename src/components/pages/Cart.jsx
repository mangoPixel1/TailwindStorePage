import React from "react";

function Cart() {
  return (
    <section className="text-gray-900">
      <div className="px-5 py-20 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <h2>3 Items</h2>
        </div>

        <hr className="my-4 border-t border-slate-300" />

        <div></div>
      </div>
      <div className="py-20 max-w-4xl flex justify-center items-center bg-gray-200">
        <div className="w-5/6">
          <h1 className="text-2xl font-semibold">Order Summary</h1>

          <hr className="my-5 border-t border-slate-300" />

          <div className="">
            <h3>Have coupon?</h3>
            <div className="w-full flex space-x-1">
              <input
                className="flex-grow pl-2 py-1 bg-gray-50"
                type="text"
                placeholder="Coupon code"
              />
              <button className="px-3 py-1 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer">
                Apply
              </button>
            </div>
          </div>

          <hr className="my-5 border-t border-slate-300" />

          <div>
            <div className="flex justify-between">
              <span>Total price:</span>
              <span>$100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>-$60.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>TBD</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>TBD</span>
            </div>
          </div>

          <hr className="my-5 border-t border-slate-300" />

          <div className="mb-4 flex justify-between text-lg">
            <span>Total Cost</span>
            <span>$100.00</span>
          </div>
          <button className="block w-full px-3 py-1 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer">
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
