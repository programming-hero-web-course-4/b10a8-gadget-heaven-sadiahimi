import React from 'react';
import './Navbar.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Gadget Heaven</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Statistics</li>
        <li>Dashboard</li>
      </ul>
      <div className="navbar-icons">
        <FaShoppingCart className="icon" />
        <FaHeart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;                      


