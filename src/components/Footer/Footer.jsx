/* eslint-disable react/prop-types */

import "./Footer.css";
import logo from '../../assets/images/Alhosn svg.svg'
import translations from '../../translations.json';
import location from '../../assets/images/reshot-icon-location-marker-ZE5Y87KGQF.svg'
import phone from '../../assets/images/reshot-icon-phone-JVL4M2KR87.svg'
import mail from '../../assets/images/reshot-icon-mail-AV23TSMFWZ.svg'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Footer = ({language}) => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1n0hcmo",
        "template_0gmroi6",
        form.current,
        "Dhw_22hh8etdn_F7B"
      )
      .then(
        (response) => {
          console.log(response);
          alert("Email sent successfully");
          
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="" />
          <p><span>ALHOSN</span> FINANCIAL BROKER</p>
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
            <h1>{translations[language].SubscribeNewsletter}</h1>
            <div className="input-group">
              <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                className="input"
                id="Email"
                name="email"
                placeholder="Enter Your Email"
                // eslint-disable-next-line react/no-unknown-property
                autocomplete="off"
                
              />
              <input
                className="button--submit"
                value="Subscribe"
                type="submit"
                
              />
              </form>
            </div>
          </div>
          <div className="info">
            <p className="address">
              <span><img src={location} alt="Location icon" /> </span>{translations[language].contact_heading_h1}
            </p>
            <p className="address">
              <span><img src={phone} alt="Phone icon" className="phone_icon" /> </span>+971509347075
            </p>
            <p className="address">
              <span><img src={mail} alt="email icon" /> </span>info@alhosnfb.com 
            </p>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com/profile.php?id=61561586488358">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="facebook"><g><path fill="none" stroke="#e6cd89"  d="M21 1.5H3A1.5 1.5 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h8.5v-8h-2v-3h2v-2a4 4 0 0 1 4-4h3v3h-3a1 1 0 0 0-1 1v2h4l-.5 3h-3.5v8H21a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 21 1.5Z"></path></g></svg>
            </a>
            <a href="https://www.instagram.com/iam_alhosn/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="instagram"><g fill="none" stroke="#e6cd89" ><rect width="21" height="21" x="1.5" y="1.5" rx="5.48" ry="5.48"></rect><circle cx="12" cy="12" r="5.5"></circle><circle cx="18" cy="5" r=".5"></circle></g></svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B971509347075&context=ARC4t2Fc1khCEiyrbjM5uDILdCwXnVCrbdmPPIN-3Po9Rx6PWpDA9sVIKDAyqpXAnlOqTLFGUPb9HYFTYlxzgWYL6GjJ8HyezQNCWF4cQXHsCWiAkPq4KHYswUYFDeArYMHCZEyulJYiF9ZzARaEkZefQg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR06aCIR55z4LQZ2yf7EFAskaq2cR7we1Y20MJuun6wT4xWJx3xu0WdwAD8_aem_uMB0oXQThDIue46vuhMQ2g">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="whatsapp"><g fill="none" stroke="#e6cd89"><path d="M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z"></path><path d="M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z"></path></g></svg>
            </a>
            <a href="https://www.linkedin.com/company/hosn-financial-broker/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="linkedin"><g fill="#e6cd89"><path d="M23.247 21.927v-5.36c0-2.872-1.533-4.208-3.577-4.208-1.649 0-2.388.907-2.8 1.544v-1.324h-3.107c.041.877 0 9.348 0 9.348h3.107v-5.221c0-.279.02-.558.103-.757.224-.558.735-1.136 1.593-1.136 1.125 0 1.574.857 1.574 2.113v5.001h3.107zM10.49 11.303c1.083 0 1.758-.718 1.758-1.616-.02-.917-.675-1.614-1.738-1.614s-1.757.697-1.757 1.614c0 .897.675 1.616 1.717 1.616h.02zm1.553 10.624v-9.348H8.937v9.348h3.106z"></path><path d="M16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16 7.729 1 16 1m0-1C7.163 0 0 7.163 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0z"></path></g></svg>
            </a>
            
          </div>
        </div>
      </div>
      <div className="copywriter">
        <p>© Copyright 2024 - All rights reserved to Alhosn Financial Broker</p>
      </div>
    </div>
  );
};

export default Footer;
