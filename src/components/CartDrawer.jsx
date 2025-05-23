import { useState, useContext } from "react";
import { CartContext } from "../CartContext";

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
      } fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 px-5 py-3`}
    >
      <div className="flex justify-between mb-5">
        <h1>{`Cart (${getTotalQuantity()} ${
          getTotalQuantity() === 1 ? `item` : `items`
        })`}</h1>
        <button className="cursor-pointer" onClick={() => closeCart()}>
          X
        </button>
      </div>
      <div>
        {cart.map((item, index) => (
          <div className="flex gap-3" key={index}>
            <div className="w-[40px] h-[40px] bg-white">
              <img src={item.data.image} className="object-contain" />
            </div>
            <div className="text-xs">
              <p>{item.data.title}</p>
              <p>{item.data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartDrawer;
