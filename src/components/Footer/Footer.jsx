/* eslint-disable react/prop-types */

import "./Footer.css";
import logo from '../../assets/images/Alhosn svg.svg'
import translations from '../../translations.json';
import location from '../../assets/images/icons8-location-24.png'
import phone from '../../assets/images/icons8-phone-24.png'
import mail from '../../assets/images/icons8-envelope-24.png'
const Footer = ({language}) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="" />
          <p><span>ALHOSN</span> FINANCE BROKER</p>
        </div>
        <div className="footer-links">
          <a href="#home">{translations[language].home}</a>
          <a href="#about"> {translations[language].aboutUs}</a>
          <a href="#services">{translations[language].services}</a>
          <a href="#partner">{translations[language].beAPartner}</a>
          <a href="#contact">{translations[language].contactUs}</a>
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
                // eslint-disable-next-line react/no-unknown-property
                autocomplete="off"
              />
              <input
                className="button--submit"
                value="Subscribe"
                type="submit"
              />
            </div>
          </div>
          <div className="info">
            <p className="address">
              <span><img src={location} alt="" /> </span>{translations[language].contact_heading_h1}
            </p>
            <p className="address">
              <span><img src={phone} alt="" /> </span>+0509347099
            </p>
            <p className="address">
              <span><img src={mail} alt="" /> </span>info@alhosnfb.com 
            </p>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com/profile.php?id=61561586488358">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#e6cd89" width="100" height="100" viewBox="0 0 24 24">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path>
            </svg>
            </a>
            <a href="https://www.instagram.com/iam_alhosn/">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" fill="#e6cd89" height="100" viewBox="0 0 24 24">
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
            </a>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" fill="#e6cd89" height="100" viewBox="0 0 24 24">
            <path d="M 11.941406 2 C 10.44006 2 9.0197829 2.3412832 7.7402344 2.9375 C 7.7318419 2.9350471 7.723233 2.9321205 7.7148438 2.9296875 L 7.7070312 2.9550781 C 4.3079768 4.5545168 1.9414062 8.0036548 1.9414062 12 C 1.9414062 17.511002 6.4304007 22 11.941406 22 C 17.452412 22 21.941406 17.511002 21.941406 12 C 21.941406 6.4889982 17.452412 2 11.941406 2 z M 11.941406 4 C 13.657837 4 15.156466 4.6541789 16.457031 5.5683594 C 15.82545 6.1959812 15.089919 6.7511088 14.279297 7.203125 C 13.218022 5.9232251 11.92657 4.9041032 10.568359 4.140625 C 11.013413 4.0578722 11.467449 4 11.941406 4 z M 7.9765625 5.1445312 C 9.5261871 5.727606 11.083012 6.6842895 12.335938 8.03125 C 10.255733 8.6629299 7.8727211 8.6247295 5.4804688 7.5253906 C 6.144503 6.5676373 6.9934191 5.7540149 7.9765625 5.1445312 z M 17.955078 6.8632812 C 18.812659 7.8685526 19.351381 9.0869574 19.626953 10.433594 C 18.504078 10.295389 17.358675 10.360744 16.236328 10.587891 C 16.008339 9.9709737 15.730811 9.388059 15.414062 8.8398438 C 16.357582 8.2827458 17.216233 7.6142914 17.955078 6.8632812 z M 4.4707031 9.3710938 C 7.6503928 10.893288 10.874955 10.783354 13.613281 9.71875 C 13.882417 10.169566 14.11829 10.647248 14.314453 11.154297 C 11.180821 12.379806 8.4850686 14.959562 7.4160156 18.427734 C 5.3641713 16.981851 3.9414062 14.7103 3.9414062 12 C 3.9414062 11.066479 4.1790273 10.202866 4.4707031 9.3710938 z M 17.800781 12.386719 C 18.486321 12.374364 19.15505 12.492293 19.818359 12.609375 C 19.618166 15.147299 18.276058 17.35498 16.294922 18.681641 C 16.755243 17.353288 17.110099 15.605394 16.900391 13.474609 C 16.868577 13.151845 16.819349 12.838322 16.763672 12.529297 C 16.879289 12.505865 16.993531 12.466165 17.109375 12.447266 C 17.342126 12.409292 17.572268 12.390837 17.800781 12.386719 z M 14.832031 13.134766 C 14.859562 13.312804 14.892087 13.488551 14.910156 13.671875 C 15.247834 17.102926 14.055291 19.157268 13.591797 19.822266 C 13.060483 19.935144 12.509851 20 11.941406 20 C 10.968416 20 10.062462 19.764916 9.2011719 19.449219 C 9.961496 16.505095 12.219059 14.259566 14.832031 13.134766 z"></path>
            </svg>
            </a>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" fill="#e6cd89" height="100" viewBox="0 0 24 24">
            <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
            </svg>
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
