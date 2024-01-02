import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setItemCount((prevItemCount) => prevItemCount + product.quantity);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, itemCount, setItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
