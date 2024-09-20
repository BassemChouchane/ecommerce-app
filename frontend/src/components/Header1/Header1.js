// Header1.js
import React, { useContext } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "../../assets/pngwing.com.png";
import { useCart } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

export default function Header1() {
  const { cartItemCount, saveCart } = useCart();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await saveCart(); // Save cart before logging out
    await logout();  // Call logout from AuthContext
    navigate('/login'); // Redirect to login page
  };

  return (
    <Navbar
      fluid
      rounded
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md border-b border-gray-200 dark:border-gray-700 py-4 px-6 z-10"
    >
      <NavbarBrand as={Link} to="/" className="flex items-center mr-4">
        <img
          src={logo}
          className="mr-20 h-8 sm:h-12 transition-transform transform hover:scale-105"
          alt="Flowbite React Logo"
        />
        <span className="self-center text-2xl font-bold whitespace-nowrap">
          MyLaptop
        </span>
      </NavbarBrand>
      <NavbarToggle className="lg:hidden" />
      <NavbarCollapse>
        <NavbarLink
          as={Link}
          to="/"
          active
          className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/products"
          className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Products
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/contact"
          className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contact
        </NavbarLink>
        
        {isAuthenticated ? (
          <NavbarLink
            as="button"
            onClick={handleLogout}
            className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center relative"
          >
            Logout
          </NavbarLink>
        ) : (
          <NavbarLink
            as={Link}
            to="/login"
            className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Login
          </NavbarLink>
        )}
        <NavbarLink
          as={Link}
          to="/cart"
          className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center relative"
        >
          <AddShoppingCartIcon fontSize="large" />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 translate-x-1 -translate-y-1/2 bg-blue-600 dark:bg-blue-400 text-white rounded-full px-2 py-1 text-xs">
              {cartItemCount}
            </span>
          )}
        </NavbarLink>
        
      </NavbarCollapse>
    </Navbar>
  );
}
