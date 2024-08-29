import React from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "../../assets/pngwing.com.png";

export default function Header1() {
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
          UnKnown
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
        <NavbarLink
          as={Link}
          to="/cart"
          className="text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
        >
          <AddShoppingCartIcon fontSize="large" />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
