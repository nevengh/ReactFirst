import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide_01 from '../../assets/images/slider1.webp';
import slide_02 from '../../assets/images/slider3.webp';
import slide_04 from '../../assets/images/slider4.webp';
import slide_05 from '../../assets/images/slider5.webp';

const SliderComponent = () => {

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
          { title: 'HOME', img: slide_01 },
          { title: 'Car', img: slide_02 },
          { title: 'LifeStyle', img: slide_01 },
          { title: 'PARTNERSHIP', img: slide_04 },
          { title: 'BUSINESS', img: slide_05 }
        ].map((slide, index) => (
          <div className="slide-con" key={index}>
            <div className="form-container">
              <h1> <span>APPLY</span> FOR YOUR DREAM {slide.title}</h1>
              <form >
                <input type="text" name="name" placeholder="Name"  required />
                <input type="email" name="email" placeholder="Email Address"  required />
                <input type="tel" name="phone" placeholder="Phone Number"  required />
                <button type="submit">APPLY HERE</button>
              </form>
            </div>
            <div className="slide-img">
              <img src={slide.img} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
