import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  
  // Ensure cartItems is an array
  const items = Array.isArray(cartItems) ? cartItems : [];

  return (
    <div className="cart-page" style={{ minHeight: "100vh" }}>
      {items.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
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
