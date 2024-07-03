import "./ServicesPage.css";
import home from "../../assets/images/mortgage-svgrepo-com.svg";
import business from "../../assets/images/dollar-finance-money-20-svgrepo-com.svg";
import mobile from "../../assets/images/mobile-dollar-svgrepo-com.svg";
const ServicesPage = () => {
  return (
    <div className="services" id="services">
      <div className="about-heading">
        <h1> Our Services</h1>
      </div>
      <div className="services-content ">
        {/* <div className="card">
            <img src={home} alt="" />
            <h1>HOME FINANCE</h1>
        </div>
        <div className="card">
            <img src={money} alt="" />
            <h1>PERSONAL LOANS</h1>
        </div>
        <div className="card">
            <img src={car} alt="" />
            <h1>AUTOMATIV LOANS</h1>
        </div>
        <div className="card">
            <img src={bank} alt="" />
            <h1>COMMERCIAL LOANS</h1>
        </div>
        <div className="card">
            <img src={card} alt="" />
            <h1>CREDITE CARDS</h1>
        </div>
        <div className="card">
            <img src={business} alt="" />
            <h1>BUSINESS LOANS</h1>
        </div> */}
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img src={business} alt="" />
            </div>
            <div className="content">
              {/* <p className="heading">Card Hover</p> */}
              <p>PERSONAL LOANS</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img src={mobile} alt="" />
            </div>
            <div className="content">
              {/* <p className="heading">Card Hover</p> */}
              <p>AUTOMOBILE LOANS</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img src={home} alt="" />
            </div>
            <div className="content">
              {/* <p className="heading">Card Hover</p> */}
              <p>HOME FINANCE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
