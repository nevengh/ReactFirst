/* eslint-disable react/prop-types */
// src/Navbar.js
import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/images/Alhosn svg.svg";
import translations from "../../translations.json";


const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <p>
            <span> {translations[language].spanPageName} </span> {translations[language].PageName}
          </p>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? "✖" : "☰"}
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#home">{translations[language].home}</a>
          <a href="#about">{translations[language].aboutUs}</a>
          <a href="#services">{translations[language].services}</a>
          <a href="#partner">{translations[language].beAPartner}</a>
          <a href="#contact">{translations[language].contactUs}</a>
          <div className="language-selector">
            <select value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
