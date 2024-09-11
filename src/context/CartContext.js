import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = sessionStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartItemCount, setCartItemCount] = useState(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  });

  // Update sessionStorage whenever cartItems change
  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      // Check if the item was not already in the cart
      const itemExists = updatedItems.some(item => item.id === product.id);
      if (!itemExists) {
        updatedItems.push({ ...product, quantity: 1 });
      }

      const newCount = updatedItems.reduce((count, item) => count + item.quantity, 0);
      setCartItemCount(newCount);
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; // Mark item for removal
          }
        }
        return item;
      }).filter(item => item !== null); // Remove items marked for removal

      const newCount = updatedItems.reduce((count, item) => count + item.quantity, 0);
      setCartItemCount(newCount);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, cartItemCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
