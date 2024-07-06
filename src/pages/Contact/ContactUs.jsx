/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import translations from "../../translations.json";
import { Helmet } from "react-helmet";

const Contact = ({ language }) => {
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
          // Clear the form fields
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14369.461218900944!2d55.94033380294823!3d25.791519735772464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef676caf1a11b73%3A0xba7f4e8e25ac41aa!2sJulphar%20Towers%20-%20Al%20Hisn%20Rd%20-%20Dafan%20Al%20Nakheel%20-%20Ras%20al%20Khaimah!5e0!3m2!1sen!2sae!4v1717334620581!5m2!1sen!2sae";

  return (
    <div className="contact" id="contact">
      {/* 
        ==================================
                Helmet
        ==================================
      */}
      <Helmet>
        <title>
          {translations[language].contactUs} | ALHOSN FINANCING BROKER
        </title>
        <meta
          name="description"
          content={`${translations[language].contact_heading_h1}. Get in touch with ALHOSN FINANCING BROKER for all your financial needs.`}
        />
        <meta
          name="keywords"
          content="contact, ALHOSN FINANCING BROKER, financial services, Ras al Khaimah"
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
        <meta
          property="og:title"
          content={`${translations[language].contactUs} | ALHOSN FINANCING BROKER`}
        />
        <meta
          property="og:description"
          content={`${translations[language].contact_heading_h1}. Get in touch with ALHOSN FINANCING BROKER for all your financial needs.`}
        />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "ContactPage",
              "name": "${translations[language].contactUs}",
              "description": "${translations[language].contact_heading_h1}",
              "url": "https://yourdomain.com/contact",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-8901",
                "contactType": "customer support",
                "areaServed": "AE",
                "availableLanguage": ["en", "ar"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Julphar Towers - Al Hisn Rd - Dafan Al Nakheel",
                "addressLocality": "Ras al Khaimah",
                "addressCountry": "AE"
              }
            }
          `}
        </script>
      </Helmet>
      {/* 
        ==================================
                End Helmet
        ==================================
      */}
      <div className="about-heading">
        <h1>{translations[language].contactUs}</h1>
      </div>
      <div className="contact_container">
        <div className="contact-form">
          <h1>{translations[language].contact_heading_h1}</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder={translations[language].name}
              name="user_name"
            />
            <input
              type="email"
              placeholder={translations[language].Email}
              name="email"
            />
            <input
              type="tel"
              placeholder={translations[language].PhoneNumber}
              name="phone"
            />
            <button type="submit">{translations[language].applyHere}</button>
          </form>
        </div>
        <div className="map-container">
          <div
            className="elementor-element elementor-element-9e5d0bf e-con-full e-flex e-con e-child"
            data-id="9e5d0bf"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-3e5ee4b elementor-widget elementor-widget-text-editor"
              data-id="3e5ee4b"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <iframe
                  src={map}
                  width="600"
                  height="550"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
