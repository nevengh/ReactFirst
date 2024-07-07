/* eslint-disable react/prop-types */
import "./ServicesPage.css";
import home from "../../assets/images/mortgage-svgrepo-com.svg";
import business from "../../assets/images/dollar-finance-money-20-svgrepo-com.svg";
import mobile from "../../assets/images/mobile-dollar-svgrepo-com.svg";
import translations from '../../translations.json';

const ServicesPage = ({ language}) => {
  return (
    <div className="services" id="services">
      
      <div className="about-heading">
        <h1> {translations[language].our_services_heading}</h1>
      </div>
      <div className="services-content ">
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img src={business} alt={translations[language].personal_loans_alt} />
            </div>
            <div className="content">
              <p>{translations[language].personal_loans}</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img src={mobile} alt={translations[language].automobile_loans_alt} />
            </div>
            <div className="content">
              <p>{translations[language].automobile_loans}</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img src={home} alt={translations[language].home_finance_alt} />
            </div>
            <div className="content">
              <p>{translations[language].home_finance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
