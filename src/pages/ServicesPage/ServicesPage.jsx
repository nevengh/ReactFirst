import "./ServicesPage.css";
import home from '../../assets/images/service1.png'
import money from '../../assets/images/service2.png'
import car from '../../assets/images/service3.png'
import card from '../../assets/images/service4.png'
import business from '../../assets/images/service5.png'
import bank from '../../assets/images/service6.png'
const ServicesPage = () => {
  return (
    <div className="services" id="services">
      <div className="services-head">
        <h1> Our Services</h1>
      </div>
      <div className="services-content ">
        <div className="card">
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
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
