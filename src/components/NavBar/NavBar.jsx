/* eslint-disable react/prop-types */
// src/Navbar.js
import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/images/Alhosn svg.svg";
import translations from "../../translations.json";
import { Helmet } from "react-helmet";

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
      {/* 
        ==================================
                Helmet
        ==================================
      */}
      <Helmet>
        <title>ALHOSN Finance Broker | {translations[language].home}</title>
        <meta
          name="description"
          content={`ALHOSN Finance Broker - ${translations[language].aboutUs}, ${translations[language].services}, ${translations[language].beAPartner}, ${translations[language].contactUs}`}
        />
        <meta
          name="keywords"
          content="ALHOSN, Finance Broker, financial services, loans, mortgages"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
        <meta property="og:title" content="ALHOSN Finance Broker" />
        <meta
          property="og:description"
          content={`ALHOSN Finance Broker - ${translations[language].aboutUs}, ${translations[language].services}, ${translations[language].beAPartner}, ${translations[language].contactUs}`}
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <script type="application/ld+json">
          {`
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "ALHOSN Finance Broker",
      "url": "https://yourdomain.com",
      "logo": "${logo}",
      "sameAs": [
        "https://www.facebook.com/alhosn",
        "https://www.twitter.com/alhosn",
        "https://www.linkedin.com/company/alhosn"
      ]
    }
  `}
        </script>
      </Helmet>
      {/* 
        ==================================
               End Helmet
        ==================================
      */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <p>
            <span>Alhosn</span> Finance Broker
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
