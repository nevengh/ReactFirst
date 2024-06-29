// src/Navbar.js
import React, { useState } from 'react';
import './NavBar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Alhosn Financial</div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? '✖' : '☰'}
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#partner">Be a Partner</a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
