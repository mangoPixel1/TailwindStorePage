import { useEffect, useState } from "react";
import { useCart } from "../CartContext";
import CartDrawer from "./CartDrawer";

function CartDrawerWrapper() {
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);
  const { isCartOpen, closeCart } = useCart();

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function handleWindowResize() {
    if (window.innerWidth >= 768) {
      setIsMdOrLarger(true);
    } else {
      setIsMdOrLarger(false);
      closeCart();
    }
  }

  return (
    <>
      {isCartOpen && isMdOrLarger && (
        <div className="fixed inset-0 z-40">
          <div
            onClick={() => closeCart()}
            className="absolute inset-0 bg-black/30"
          ></div>
          <div className="absolute right-0 top-0 w-96 h-full bg-white shadow-lg z-50">
            <CartDrawer />
          </div>
        </div>
      )}
    </>
  );
}

export default CartDrawerWrapper;
