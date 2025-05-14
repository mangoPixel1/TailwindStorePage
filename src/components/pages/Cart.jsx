import { useContext } from "react";
import { CartContext } from "../../CartContext";

function Cart() {
  const { cart, removeItem, updateQuanity, getTotalQuantity, getTotalPrice } =
    useContext(CartContext);

  const cartItems = [
    {
      id: 1,
      data: {
        title: "product 1",
        category: "men's clothing",
        description: "description of product 1",
        price: 12.5,
        image: "https://placehold.co/75x75",
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
        image: "https://placehold.co/75x75",
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
        image: "https://placehold.co/75x75",
      },
      quantity: 2,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row lg:h-screen text-gray-900">
      <div className="px-5 md:px-10 xl:px-15 py-15 w-full lg:w-2/3 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <h2>{`${getTotalQuantity()} items`}</h2>
        </div>

        <hr className="my-4 border-t border-slate-300" />

        <div className="hidden lg:grid lg:grid-cols-12 mb-3 text-xs text-gray-500">
          <span className="col-span-6">Product Details</span>
          <span className="col-span-2">Quantity</span>
          <span className="col-span-2">Price</span>
          <span className="col-span-2">Total</span>
        </div>

        {cart.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="hidden lg:grid lg:grid-cols-12 mb-2 text-sm">
              <div className="col-span-6 flex gap-2 items-center">
                <div className="w-[75px] h-[75px] bg-white">
                  <img
                    src={item.data.image}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <span>{item.data.title}</span>
                </div>
              </div>

              <span className="col-span-2 flex items-center">
                {item.quantity}
              </span>
              <span className="col-span-2 flex items-center">
                {`$${item.data.price.toFixed(2)}`}
              </span>
              <span className="col-span-2 flex items-center">
                {`$${(item.data.price * item.quantity).toFixed(2)}`}
              </span>
            </div>
            <div className="lg:hidden flex gap-4 ">
              <div className="w-[75px] h-[75px] bg-white">
                <img
                  src={item.data.image}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow">
                <div className="flex flex-col">
                  <span className="text-sm">{item.data.title}</span>
                  <span className="text-xs text-gray-500">{`Category: ${item.data.category}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{`$${item.data.price.toFixed(2)}`}</span>
                  <input
                    type="number"
                    min={1}
                    max={99}
                    defaultValue={item.quantity}
                    className="pl-5 py-1 mr-3 border border-gray-300 rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 md:px-10 xl:px-15 py-15 flex justify-center items-start w-full lg:w-1/3 bg-gray-200">
        <div className="w-full">
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
              <span>{`$${getTotalPrice().toFixed(2)}`}</span>
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
          <button className="block w-full px-3 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer">
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
