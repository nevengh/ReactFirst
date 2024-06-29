import about_img from "../../assets/images/david-rodrigo-Fr6zexbmjmc-unsplash.jpg";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="about-us " id="about" >
      <div className="about-heading">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-content main-container">
        <div className="about-text">
          <p>
            Welcome to Alhosn Financing Broker, where over 15 years of expertise
            meet an unwavering commitment to excellence.{" "}
          </p>
          <p>
            Beyond delivering exceptional results, we prioritize building
            enduring relationships that offer tailored solutions to meet your
            unique requirements.
          </p>
          <p>
            What truly sets us apart is the depth of experience ingrained in our
            team, bringing collaborative knowledge and promoting the outstanding
            jig in the banking sector.
          </p>
          <p>
            Join us on a journey derived from expertise, excellence, and a
            relentless pursuit of perfection. Alhosn Financing Broker is where
            experience meets innovation and success is a tradition.
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
