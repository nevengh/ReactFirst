// import React from 'react'
import "./ServicesPage.css";
import automobile from "../../assets/images/sports-car-icon.svg";
import creditcard from "../../assets/images/credit-card-swipe-icon.svg";
import personal from "../../assets/images/sponsorship-icon.svg";
import commercial from "../../assets/images/residential-apartments-icon.svg";
import home from "../../assets/images/home-care-icon.svg";
import hand from "../../assets/images/hand-money-income-dollar-icon.svg";
const ServicesPage = () => {
  return (
    <div className="ServicesPage">
      <div className="card_container">
        <div className="card">
          <img src={automobile} alt="" />
          <h1>AUTOMOBILE LOAN</h1>
        </div>
        <div className="card">
          <img src={creditcard} alt="" />
          <h1 style={{ width: "max-content" }}>CREDIT CARD </h1>
        </div>
        <div className="card">
          <img src={personal} alt="" />
          <h1>PERSONAL LOAN</h1>
        </div>
        <div className="card">
          <img src={commercial} alt="" />
          <h1>COMMERCIAL LOAN </h1>
        </div>
        <div className="card">
          <img src={home} alt="" />
          <h1>HOME FINANCE</h1>
        </div>
        <div className="card">
          <img src={hand} alt="" />
          <h1>BUSINESS LOAN </h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
