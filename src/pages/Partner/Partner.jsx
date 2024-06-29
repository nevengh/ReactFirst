import "./Partner.css";
import hands from "../../assets/images/partner.webp";
const Partner = () => {
  return (
    <div className="partner" id="partner">
      <div className="about-heading">
        <h1>BE A PARTNER </h1>
      </div>
      <div className="partner-content">
        <div className="partner-text">
          <p>
            <span>Are</span> you seeking a dynamic environment where your skills and
            expertise in brokering can truly shine? Look no further than Alhosn
            Financing Broker.<br/>  We extend an invitation to join our team of
            dedicated professionals who are committed to providing exceptional
            brokerage services to our clients.<br/> At Alhosn Financing Broker, we
            pride ourselves on offering personalized solutions tailored to meet
            the unique needs of each client.<br/> Whether you’re an experienced
            broker or just starting your career in the industry, Alhosn
            Financing Broker welcomes individuals who are passionate about
            delivering outstanding service and making a positive impact in the
            lives of our clients.<br/> <span>Join</span> us in reshaping the future of brokering.
            Take the next step in your career journey and become part of the
            Alhosn Financing Broker family today! To learn more about this
            exciting opportunity, please apply below and let us start our
            journey together.
          </p>
        </div>
        <div className="partner-image">
          <img src={hands} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Partner;
