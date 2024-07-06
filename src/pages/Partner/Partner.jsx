/* eslint-disable react/prop-types */
import "./Partner.css";
import hands from "../../assets/images/partner.webp";
import translations from "../../translations.json";
import { Helmet } from "react-helmet";
const Partner = ({ language }) => {
  return (
    <div className="partner" id="partner">
      {/* 
        ==================================
                Helmet
        ==================================
      */}
      <Helmet>
        <title>
          {translations[language].beAPartner} | ALHOSN FINANCING BROKER
        </title>
        <meta
          name="description"
          content={`${translations[language].be_partner_paragraph_1} ${translations[language].be_partner_paragraph_2}`}
        />
        <meta
          name="keywords"
          content="partnership, financial partnership, ALHOSN FINANCING BROKER, financial services"
        />
        <link rel="canonical" href="https://yourdomain.com/partner" />
        <meta
          property="og:title"
          content={`${translations[language].beAPartner} | ALHOSN FINANCING BROKER`}
        />
        <meta
          property="og:description"
          content={`${translations[language].be_partner_paragraph_1} ${translations[language].be_partner_paragraph_2}`}
        />
        <meta property="og:url" content="https://yourdomain.com/partner" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={hands} />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "${translations[language].beAPartner}",
              "description": "${translations[language].be_partner_paragraph_1} ${translations[language].be_partner_paragraph_2}",
              "publisher": {
                "@type": "Organization",
                "name": "ALHOSN FINANCING BROKER"
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
        <h1>{translations[language].beAPartner} </h1>
      </div>
      <div className="partner-content">
        <div className="partner-text">
          <p>
            {translations[language].be_partner_paragraph_1}
            <br /> {translations[language].be_partner_paragraph_2}
            <br />
            {translations[language].be_partner_paragraph_3}
            <br />
            {translations[language].be_partner_paragraph_4}
            <br /> {translations[language].be_partner_paragraph_5}
          </p>
        </div>
        <div className="partner-image">
          <img src={hands} alt={translations[language].be_partner_alt} />
        </div>
      </div>
    </div>
  );
};

export default Partner;
