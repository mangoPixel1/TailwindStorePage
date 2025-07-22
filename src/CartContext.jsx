import { useEffect, createContext, useReducer } from "react";

export const CartContext = createContext();

function getStoredCart() {
  const storedData = localStorage.getItem("cartData");
  return storedData ? JSON.parse(localStorage.getItem("cartData")) : [];
}

const initialState = {
  cart: getStoredCart(),
  isCartOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload; // The item from the payload
      const newItemIndex = state.cart.findIndex(
        (item) => item.data.id === newItem.data.id
      ); // The index of the cart item that matches the payload's item id if found

      // If payload item already exists in cart
      if (newItemIndex !== -1) {
        const updatedCart = state.cart.map((item, i) => {
          if (i === newItemIndex) {
            return {
              ...item,
              quantity: item.quantity + newItem.quantity,
            }; // increment the quantity
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      }

      // If payload item does NOT exist in cart
      const updatedCart2 = {
        ...state,
        cart: [...state.cart, newItem],
      };

      return updatedCart2;
    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter((_, i) => i !== action.payload);
      return { ...state, cart: newCart };
    case "UPDATE_QUANTITY":
      // ADD feature: remove item when newQuantity < 1
      const updatedCart = state.cart.map((item, i) => {
        if (i === action.payload.index && action.payload.newQuantity > 0) {
          return {
            ...item,
            quantity: action.payload.newQuantity,
          };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "CLOSE_CART":
      return { ...state, isCartOpen: false };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(state.cart));
  }, [state.cart]);

  function addItem(item) {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }

  function removeItem(index) {
    dispatch({ type: "REMOVE_FROM_CART", payload: index });
  }

  function updateQuantity(index, newQuantity) {
    dispatch({ type: "UPDATE_QUANTITY", payload: { index, newQuantity } });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function getTotalQuantity() {
    const result = state.cart.reduce((acc, currentItem) => {
      return acc + currentItem.quantity;
    }, 0);
    return result;
  }

  function getTotalPrice() {
    const result = state.cart.reduce((acc, currentItem) => {
      return acc + currentItem.quantity * currentItem.data.price;
    }, 0);
    return result;
  }

  function toggleCart() {
    dispatch({ type: "TOGGLE_CART" });
  }

  function closeCart() {
    dispatch({ type: "CLOSE_CART" });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        isCartOpen: state.isCartOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        toggleCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/*
  Use this format for state.cart:
  {
    data: {
      id: 1,
      title: "product 1",
      category: "men's clothing",
      description: "description of product 1",
      price: 12.5,
      image: "https://placehold.co/75x75",
    },
    quantity: 1,
  },

  */
