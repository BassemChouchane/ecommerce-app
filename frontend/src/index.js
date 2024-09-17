import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

const clearSessionOnFirstLoad = () => {
  // Check if the flag exists in local storage
  const hasLoadedBefore = localStorage.getItem('appHasLoaded');

  if (!hasLoadedBefore) {
    // Clear session storage
    sessionStorage.clear();

    // Set the flag in local storage
    localStorage.setItem('appHasLoaded', 'true');
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<AuthProvider>
    <CartProvider >
    <App />
    </CartProvider>
</AuthProvider>
  </React.StrictMode>
);

