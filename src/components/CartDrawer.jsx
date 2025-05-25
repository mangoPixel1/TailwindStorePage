import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

// Icons
import { FaTrash } from "react-icons/fa";

function CartDrawer() {
  const {
    cart,
    isCartOpen,
    removeItem,
    updateQuantity,
    getTotalQuantity,
    getTotalPrice,
    closeCart,
  } = useContext(CartContext);

  return (
    <div
      className={`${
        isCartOpen === false && `hidden`
      } flex flex-col justify-between fixed right-0 top-0 h-full w-[500px] bg-white shadow-lg z-50 px-5 py-3`}
    >
      <div>
        <div className="flex justify-between mb-5">
          <h1>{`Cart (${getTotalQuantity()} ${
            getTotalQuantity() === 1 ? `item` : `items`
          })`}</h1>
          <button className="cursor-pointer" onClick={() => closeCart()}>
            X
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {cart.map((item, index) => (
            <div className="grid grid-cols-8" key={index}>
              <div className="col-span-2 w-[80px] h-[80px] bg-white">
                <img src={item.data.image} className="object-contain" />
              </div>
              <div className="col-span-5 text-xs">
                <p>{item.data.title}</p>
                <p>{`$${item.data.price.toFixed(2)}`}</p>
                <p>{`x${item.quantity}`}</p>
              </div>
              <div className="col-span-1 flex justify-end">
                <button onClick={() => removeItem(index)}>
                  <FaTrash color="#b05d5d" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/cart" onClick={() => closeCart()}>
        <button className="block w-full px-3 py-2 rounded-sm text-white bg-slate-500 hover:bg-slate-600 transition duration-300 cursor-pointer">
          View Cart
        </button>
      </Link>
    </div>
  );
}

export default CartDrawer;
