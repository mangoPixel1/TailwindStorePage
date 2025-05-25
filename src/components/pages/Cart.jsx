import { useContext } from "react";
import { CartContext } from "../../CartContext";

// Icons
import { FaTrash } from "react-icons/fa";

function Cart() {
  const { cart, removeItem, updateQuantity, getTotalQuantity, getTotalPrice } =
    useContext(CartContext);

  return (
    <section className="flex flex-col lg:flex-row lg:h-screen text-gray-900">
      <div className="px-5 md:px-10 xl:px-15 py-15 w-full lg:w-2/3 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Shopping Cart
          </h1>
          <h2>{`(${getTotalQuantity()} ${
            getTotalQuantity() === 1 ? `item` : `items`
          })`}</h2>
        </div>

        <hr className="my-4 border-t border-slate-300" />

        {/* Desktop - column labels */}
        <div className="hidden lg:grid lg:grid-cols-12 mb-3 text-xs text-gray-500">
          <span className="col-span-8">Product Details</span>
          <span className="col-span-2">Quantity</span>
          <span className="col-span-2">Total</span>
        </div>

        {cart.map((item, index) => (
          <div key={index} className="mb-8">
            {/* Desktop view */}
            <div className="hidden lg:grid lg:grid-cols-12 mb-2 text-sm">
              <div className="col-span-2 w-[75px] h-[75px] bg-white">
                <img
                  src={item.data.image}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="col-span-6 pr-8 flex gap-2 items-center">
                <div className="flex flex-col items-start">
                  <span>{item.data.title}</span>
                  <span className="capitalize text-gray-500 text-xs">
                    {item.data.category}
                  </span>
                  <span className="font-semibold">{`$${item.data.price.toFixed(
                    2
                  )}`}</span>
                </div>
              </div>

              <div className="col-span-2 flex flex-col justify-center items-start">
                <div className="flex space-x-4 px-4 py-1 rounded-lg border border-solid border-gray-300">
                  <button
                    className="cursor-pointer text-gray-600"
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="flex items-center font-light">
                    {item.quantity}
                  </span>
                  <button
                    className="cursor-pointer text-gray-600"
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="col-span-2 flex justify-between items-center">
                <span>
                  {`$${(item.data.price * item.quantity).toFixed(2)}`}
                </span>
                <button
                  className="cursor-pointer"
                  onClick={() => removeItem(index)}
                >
                  <FaTrash color="#b05d5d" />
                </button>
              </div>
            </div>

            {/* Mobile view */}
            <div className="lg:hidden grid grid-cols-8 sm:grid-cols-12 ">
              <div className="col-span-2 sm:col-span-2 aspect-square bg-white">
                <img
                  src={item.data.image}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="col-span-4 sm:col-span-7 flex flex-col justify-between flex-grow">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm">{item.data.title}</span>
                  <span className="hidden sm:block text-xs text-gray-500 capitalize">
                    {item.data.category}
                  </span>
                  <span>{`$${item.data.price.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-3 flex flex-col justify-center items-center">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex flex-col-reverse sm:flex-row sm:items-center items-center space-y-4 px-4 py-1 rounded-lg border border-solid border-gray-300">
                    <div className="flex flex-col sm:flex-row-reverse sm:space-x-4 sm:space-x-reverse items-center justify-center">
                      <button
                        className="text-xs sm:text-base cursor-pointer text-gray-600"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        +
                      </button>
                      <span className="text-xs sm:text-base font-light text-center leading-tight">
                        {item.quantity}
                      </span>
                      <button
                        className="text-xs sm:text-base cursor-pointer text-gray-600"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <button
                    className="cursor-pointer"
                    onClick={() => removeItem(index)}
                  >
                    <FaTrash color="#b05d5d" />
                  </button>
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
              <span>-$0.00</span>
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
            <span>{`$${getTotalPrice().toFixed(2)}`}</span>
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
