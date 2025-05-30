import { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <section className="px-5">
      <div>
        <h1 className="text-3xl text-gray-700 font-semibold">Fake Store</h1>
        <Link to="/cart">
          <button className="cursor-pointer underline">Back to cart</button>
        </Link>
      </div>

      <hr className="my-4" />

      <div>
        <h1 className="text-xl text-gray-800 font-semibold">
          Express Checkout
        </h1>
      </div>

      <div>
        <h1 className="text-xl text-gray-800 font-semibold">Pay with card</h1>
      </div>

      <div>
        <h1 className="text-xl text-gray-800 font-semibold">
          Express Checkout
        </h1>
      </div>
    </section>
  );
}

export default CheckoutPage;
