/* eslint-disable react/prop-types */
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import translations from '../../translations.json';

import slide_01 from '../../assets/images/silder1.png';
import slide_02 from '../../assets/images/slider3 (2).webp';
import slide_03 from '../../assets/images/slider2.webp';


const SliderComponent = ({language}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slidercomponent" id="home">
      <Slider {...settings}>
        {[
          { title: translations[language].home_slider, img: slide_01 },
          { title: translations[language].car, img: slide_02 },
          { title: translations[language].LifeStyle, img: slide_03 },
          // { title: 'PARTNERSHIP', img: slide_04 },
          // { title: 'BUSINESS', img: slide_05 }
        ].map((slide, index) => (
          <div className="slide-con" key={index}>
            <div className="form-container">
              <h1> <span>{translations[language].slider_heading_span}</span>{translations[language].slider_heading_h1}  {slide.title}</h1>
              <form >
                <input type="text" name={translations[language].name} placeholder="Name"  required />
                <input type="email" name={translations[language].Email} placeholder="Email Address"  required />
                <input type="tel" name={translations[language].PhoneNumber} placeholder="Phone Number"  required />
                <button  type="submit">{translations[language].applyHere}</button>
              </form>
            </div>
            <div className="slide-img">
              <img src={slide.img} alt={translations[language].sliderImg} className={`slide-img-${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
