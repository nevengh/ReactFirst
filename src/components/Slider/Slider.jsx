import "./Slider.css";
// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_01 from '../../assets/images/slider1.png'
import slide_02 from '../../assets/images/slider3.png'
import slide_04 from '../../assets/images/slider4.png'
import slide_05 from '../../assets/images/slider5.png'
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slidercomponent  " id="home">
      <Slider {...settings}>
        <div className="slide-con">
          <div className="form-container">
            <h1> <span>APPLY</span> FOR YOUR DREAM HOME</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <button type="submit">APPLY HERE</button>
            </form>
          </div>
          <div className="slide-img">
            <img src={slide_01} alt="" />
          </div>
        </div>
        <div className="slide-con">
          <div className="form-container">
            <h1> <span>APPLY</span> FOR YOUR DREAM Car</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <button type="submit">APPLY HERE</button>
            </form>
          </div>
          <div className="slide-img">
            <img src={slide_02} alt="" />
          </div>
        </div>
        <div className="slide-con">
          <div className="form-container">
            <h1> <span>APPLY</span> FOR YOUR DREAM LifeStyle</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <button type="submit">APPLY HERE</button>
            </form>
          </div>
          <div className="slide-img">
            <img src={slide_01} alt="" />
          </div>
        </div>
        <div className="slide-con">
          <div className="form-container">
            <h1> <span>APPLY</span> FOR YOUR DREAM PARTNERSHIP</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <button type="submit">APPLY HERE</button>
            </form>
          </div>
          <div className="slide-img">
            <img src={slide_04} alt="" />
          </div>
        </div>
        <div className="slide-con">
          <div className="form-container">
            <h1> <span>APPLY</span> FOR YOUR DREAM BUSINESS</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <button type="submit">APPLY HERE</button>
            </form>
          </div>
          <div className="slide-img">
            <img src={slide_05} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;


// service_wh6bij9