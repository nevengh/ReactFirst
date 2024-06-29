/* eslint-disable react/no-unknown-property */
import "./Footer.css";
// import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
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
            <a href="">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.7539" cy="12.5" r="12.5" fill="#283760" />
                <path
                  d="M17.6192 16.1127L18.1735 12.4993H14.7065V10.1544C14.7065 9.16587 15.1908 8.20228 16.7436 8.20228H18.32V5.12599C18.32 5.12599 16.8894 4.88184 15.5217 4.88184C12.6663 4.88184 10.8 6.61237 10.8 9.74531V12.4993H7.62598V16.1127H10.8V24.8479C11.4364 24.9478 12.0887 24.9998 12.7532 24.9998C13.4177 24.9998 14.07 24.9478 14.7065 24.8479V16.1127H17.6192Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            
          </div>
        </div>
      </div>
      <div className="copywriter">
        <p>© Copyright 2024 - All rights Al Hosn Financing Broker</p>
      </div>
    </div>
  );
};

export default Footer;
