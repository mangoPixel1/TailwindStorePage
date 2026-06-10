import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../CartContext";

function CartDrawer() {
  const { cart, removeItem, totalQuantity, closeCart } = useCart();

  return (
    <div className="flex flex-col justify-between h-full px-5 py-3">
      <div>
        <div className="flex justify-between mb-5">
          <h1 className="text-lg text-gray-500">
            {cart.length === 0
              ? "Your cart is empty."
              : `Cart (${totalQuantity} ${totalQuantity === 1 ? "item" : "items"})`}
          </h1>
          <button className="cursor-pointer" onClick={() => closeCart()}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="4"
                x2="16"
                y2="16"
                stroke="#787777"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="4"
                x2="4"
                y2="16"
                stroke="#787777"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {cart.map((item, index) => (
            <div className="grid grid-cols-8" key={item.data.id}>
              <div className="col-span-2 w-[80px] h-[80px] bg-white">
                <Link
                  to={`/product/${item.data.id}`}
                  onClick={() => closeCart()}
                >
                  <img src={item.data.image} className="object-contain" />
                </Link>
              </div>
              <div className="col-span-5 text-xs">
                <Link
                  to={`/product/${item.data.id}`}
                  onClick={() => closeCart()}
                >
                  <p>{item.data.title}</p>
                </Link>
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

      <Link
        to="/cart"
        onClick={() => closeCart()}
        className="block w-full px-3 py-2 rounded-sm text-white text-center bg-slate-500 hover:bg-slate-600 transition duration-300"
      >
        View Cart
      </Link>
    </div>
  );
}

export default CartDrawer;
