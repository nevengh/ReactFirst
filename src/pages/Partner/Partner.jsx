/* eslint-disable react/prop-types */
import "./Partner.css";
import hands from "../../assets/images/partner.webp";
import translations from "../../translations.json";


const Partner = ({ language }) => {
  return (
    
    <div className="partner" id="partner">
      
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
