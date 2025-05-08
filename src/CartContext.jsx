import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  /*
  Need to generate a unique id for each cart item
  Use this format:
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

  */

  function addToCart() {}

  function removeFromCart() {}

  function updateQuantity() {}

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
