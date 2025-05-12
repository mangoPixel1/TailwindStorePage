import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter((_, i) => i !== action.payload);
      return { ...state, cart: newCart };
    case "UPDATE_QUANTITY":
      const updatedCart = state.cart.map((item, i) => {
        if (i === action.payload.index) {
          return {
            ...item,
            quantity: action.payload.newQuantity,
          };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addItem(item) {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }

  function removeItem(index) {
    dispatch({ type: "REMOVE_FROM_CART", payload: index });
  }

  function updateQuantity(index, newQuantity) {
    dispatch({ type: "UPDATE_QUANTITY", payload: { index, newQuantity } });
  }

  function getTotalQuantity() {
    const result = state.cart.reduce((accumulator, currentItem) => {
      accumulator + currentItem.quantity;
      // return the updated accumulator
    }, 0);
    return result;
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItem,
        removeItem,
        updateQuantity,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/*
  Use this format:
  {
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
