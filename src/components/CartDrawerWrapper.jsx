import React, { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartDrawer from "./CartDrawer";

function CartDrawerWrapper() {
  const [isMdOrLarger, setIsMdOrLarger] = useState(false); // For conditionally rendering on md (768px) breakpoint
  const { isCartOpen, closeCart } = useContext(CartContext); // Access global state to check if cart open state
  const cartRef = useRef();

  // Detect window size to determine whether to show cart drawer for md (768px) breakpoint
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    handleWindowResize(); // run on mount

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

  // Listen for clicks outside CartDrawer
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideCartClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideCartClick);
    };
  }, [isCartOpen]);

  function handleOutsideCartClick(event) {
    if (
      isCartOpen &&
      cartRef.current &&
      !cartRef.current.contains(event.target)
    ) {
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

          <div
            className="absolute right-0 top-0 w-80 h-full bg-white shadow-lg z-50"
            ref={cartRef}
          >
            <CartDrawer />
          </div>
        </div>
      )}
    </>
  );
}

export default CartDrawerWrapper;
