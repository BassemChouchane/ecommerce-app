// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cartItems from localStorage if available
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartItemCount, setCartItemCount] = useState(() => {
    // Initialize cartItemCount based on cartItems
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  });

  const updateLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const existingItem = updatedItems.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        updatedItems.push({ ...product, quantity: 1 });
      }
      
      updateLocalStorage(updatedItems);
      setCartItemCount(updatedItems.reduce((count, item) => count + item.quantity, 0));
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);
      
      updateLocalStorage(updatedItems);
      setCartItemCount(updatedItems.reduce((count, item) => count + item.quantity, 0));
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, cartItemCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
