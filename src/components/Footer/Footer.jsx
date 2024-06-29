/* eslint-disable react/no-unknown-property */
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          <h1>ALhosn FInancing broker</h1>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#partner">Be a Partner</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="social">
          <div className="newsletter">
            <h1>Subscribe to our newsletter</h1>
            <div className="input-group">
              <input
                type="email"
                className="input"
                id="Email"
                name="Email"
                placeholder="Enter Your Email"
                autocomplete="off"
              />
              <input
                className="button--submit"
                value="Subscribe"
                type="submit"
              />
            </div>
          </div>
          <h1 className="address">
            ACICO Business Park, Al Khabaisi, Dubai, United Arab Emirates Office
            706
          </h1>
          <div className="social-icon">
            
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
      </div>
      <div className="copywriter">
        <p>
        © Copyright 2024 - All rights Al Hosn Financing Broker
        </p>
      </div>
    </div>
  );
};

export default Footer;
