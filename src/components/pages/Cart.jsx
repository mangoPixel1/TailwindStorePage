import React from "react";

function Cart() {
  const cartItems = [
    {
      id: 1,
      data: {
        title: "product 1",
        category: "men's clothing",
        description: "description of product 1",
        price: 12.5,
        image: "https://placehold.co/50x50",
      },
      quantity: 1,
    },
    {
      id: 2,
      data: {
        title: "product 2",
        category: "electronics",
        description: "description of product 2",
        price: 12.5,
        image: "https://placehold.co/50x50",
      },
      quantity: 1,
    },
    {
      id: 3,
      data: {
        title: "product 3",
        category: "jewelery",
        description: "description of product 3",
        price: 12.5,
        image: "https://placehold.co/50x50",
      },
      quantity: 2,
    },
  ];

  return (
    <section className="text-gray-900">
      <div className="px-5 py-20 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <h2>3 Items</h2>
        </div>

        <hr className="my-4 border-t border-slate-300" />

        <div className="grid grid-cols-12 mb-3 text-xs text-gray-500">
          <span className="col-span-5">Product Details</span>
          <span className="col-span-3">Quantity</span>
          <span className="col-span-2">Price</span>
          <span className="col-span-2">Total</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 mb-2 text-sm">
            <div className="col-span-5 flex gap-2 items-center">
              <img src={item.data.image} />
              <div>
                <span>{item.data.title}</span>
                <span>{item.data.category}</span>
              </div>
            </div>

            <span className="col-span-3 flex items-center">
              {item.quantity}
            </span>
            <span className="col-span-2 flex items-center">
              {item.data.price.toFixed(2)}
            </span>
            <span className="col-span-2 flex items-center">
              {(item.data.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="py-20 max-w-4xl flex justify-center items-center bg-gray-200">
        <div className="w-5/6">
          <h1 className="text-2xl font-semibold">Order Summary</h1>

          <hr className="my-5 border-t border-slate-300" />

          <div className="">
            <h3 className="mb-2">Have coupon?</h3>
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
