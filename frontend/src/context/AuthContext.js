import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/auth/check', { credentials: 'include' });
        if (response.ok) {
          const data = await response.json();
          const userID = sessionStorage.getItem('userID') || localStorage.getItem('userID');
          setIsAuthenticated(!!userID);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsAuthenticated(false);
      }
    };
    checkAuthStatus();
  }, []);

  // Function to log in
  const login = (userID) => {
    sessionStorage.setItem('userID', userID);
    setIsAuthenticated(true);
  };

  // Function to log out
  const logout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      if (response.ok) {
        sessionStorage.removeItem('userID');
        sessionStorage.setItem('auth', 'false')
        setIsAuthenticated(false);
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
