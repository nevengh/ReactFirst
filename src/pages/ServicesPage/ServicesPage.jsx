/* eslint-disable react/prop-types */
import "./ServicesPage.css";
import home from "../../assets/images/mortgage-svgrepo-com.svg";
import business from "../../assets/images/dollar-finance-money-20-svgrepo-com.svg";
import mobile from "../../assets/images/mobile-dollar-svgrepo-com.svg";
import translations from '../../translations.json';
import { Helmet } from "react-helmet";
const ServicesPage = ({ language}) => {
  return (
    <div className="services" id="services">
      {/* 
        ==================================
                Helmet
        ==================================
      */}
      <Helmet>
        <title>{translations[language].our_services_heading} | ALHOSN FINANCING BROKER</title>
        <meta name="description" content={`${translations[language].our_services_heading}: ${translations[language].personal_loans}, ${translations[language].automobile_loans}, ${translations[language].home_finance}`} />
        <meta name="keywords" content="financial services, personal loans, automobile loans, home finance, ALHOSN FINANCING BROKER" />
        <link rel="canonical" href="https://yourdomain.com/services" />
        <meta property="og:title" content={`${translations[language].our_services_heading} | ALHOSN FINANCING BROKER`} />
        <meta property="og:description" content={`Explore our financial services: ${translations[language].personal_loans}, ${translations[language].automobile_loans}, ${translations[language].home_finance}`} />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "name": "${translations[language].our_services_heading}",
              "provider": {
                "@type": "Organization",
                "name": "ALHOSN FINANCING BROKER"
              },
              "serviceType": ["Personal Loans", "Automobile Loans", "Home Finance"],
              "description": "${translations[language].our_services_heading}: ${translations[language].personal_loans}, ${translations[language].automobile_loans}, ${translations[language].home_finance}"
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
