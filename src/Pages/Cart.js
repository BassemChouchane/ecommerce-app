// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page" style={{minHeight : "100vh"}}>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <h2>{item.title}</h2>
                <p className="price">Price: {item.price}DT</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
