// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(() => {
    let savedCartId = sessionStorage.getItem('cartId');
    if (!savedCartId) {
      savedCartId = uuidv4();
      sessionStorage.setItem('cartId', savedCartId);
    }
    return savedCartId;
  });
  const [cartItemCount, setCartItemCount] = useState(0);
  const userID = sessionStorage.getItem('userID');

  useEffect(() => {
    const fetchCartFromDatabase = async () => {
      try {
        const response = await fetch(`/api/cart/${userID || cartId}`);
        const data = await response.json();
        setCartItems(data.cartItems || []);
        setCartItemCount(data.cartItems.reduce((count, item) => count + item.quantity, 0));
      } catch (error) {
        console.error('Error fetching cart from database:', error);
      }
    };

    fetchCartFromDatabase();
  }, [userID, cartId]);

  useEffect(() => {
    const saveCartToDatabase = async () => {
      try {
        await fetch(`/api/cart/${userID || cartId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cartItems }),
        });
      } catch (error) {
        console.error('Error saving cart to database:', error);
      }
    };

    if (cartItems.length > 0) {
      saveCartToDatabase();
    }
  }, [cartItems, userID, cartId]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      const itemIndex = updatedItems.findIndex(item => item.id === product.id);

      if (itemIndex > -1) {
        updatedItems[itemIndex].quantity += 1;
      } else {
        updatedItems.push({ ...product, quantity: 1 });
      }

      setCartItemCount(updatedItems.reduce((count, item) => count + item.quantity, 0));
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      setCartItemCount(updatedItems.reduce((count, item) => count + item.quantity, 0));
      return updatedItems;
    });
  };

  const saveCart = async () => {
    if (userID) {
      try {
        await fetch(`/api/cart/${userID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cartItems }),
        });
      } catch (error) {
        console.error('Error saving cart to database:', error);
      }
    } else {
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, cartItemCount, addToCart, removeFromCart, saveCart }}>
      {children}
    </CartContext.Provider>
  );
};
