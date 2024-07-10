/* eslint-disable react/prop-types */
import about_img from "../../assets/images/david-east-6psstU2DLKs-unsplash.webp";
import "./AboutUs.css";
import translations from '../../translations.json';
const AboutUs = ({ language}) => {
  return (
    <div className="about-us " id="about" >
      <div className="about-heading">
        <h1>{translations[language].about_us_heading}</h1>
      </div>
      <div className="about-content main-container">
        <div className="about-text">
          <p>
            {translations[language].about_us_paragraph_1}
          </p>
          <p>
            {translations[language].about_us_paragraph_2}
          </p>
          <p>
            {translations[language].about_us_paragraph_3}
          </p>
          <p>
            {translations[language].about_us_paragraph_4}
          </p>
        </div>
        <div className="about-img">
          <img src={about_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
