
/* eslint-disable react/prop-types */
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import translations from "../../translations.json";
import emailjs from "@emailjs/browser";
import slide_01 from "../../assets/images/silder1.png";
import slide_02 from "../../assets/images/slider3 (2).webp";
import slide_03 from "../../assets/images/slider2.webp";
import { useRef } from "react";


const SliderComponent = ({ language }) => {
  const form = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      user_name: e.target.elements.user_name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
    };
    emailjs
      .send("service_1n0hcmo", "template_0gmroi6", formData, "Dhw_22hh8etdn_F7B")
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
    <div className="slidercomponent" id="home">
      
      <Slider {...settings}>
        {[
          { title: translations[language].home_slider, img: slide_01 },
          { title: translations[language].car, img: slide_02 },
          { title: translations[language].LifeStyle, img: slide_03 },
        ].map((slide, index) => (
          <div className="slide-con" key={index}>
            <div className="form-container">
              <h1>
                {" "}
                <span>{translations[language].slider_heading_span}</span>
                {translations[language].slider_heading_h1} {slide.title}
              </h1>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder={translations[language].name}
                  name="user_name"
                  required
                />
                <input
                  type="email"
                  placeholder={translations[language].Email}
                  name="email"
                  required
                />
                <input
                  type="tel"
                  placeholder={translations[language].PhoneNumber}
                  name="phone"
                  required
                />
                <button type="submit">
                  {translations[language].applyHere}
                </button>
              </form>
            </div>
            <div className="slide-img">
              <img
                src={slide.img}
                alt={translations[language].sliderImg}
                className={`slide-img-${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
