import "./Contact.css";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14369.461218900944!2d55.94033380294823!3d25.791519735772464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef676caf1a11b73%3A0xba7f4e8e25ac41aa!2sJulphar%20Towers%20-%20Al%20Hisn%20Rd%20-%20Dafan%20Al%20Nakheel%20-%20Ras%20al%20Khaimah!5e0!3m2!1sen!2sae!4v1717334620581!5m2!1sen!2sae";
  return (
    <div className="contact" id="contact">
      <div className="about-heading">
        <h1>CONTACT US</h1>
      </div>
      <div className="contact_container">
        <div className="contact-form">
          <h1>Ras Al Khaimah - Dafan Al Nakheel - Julphar Tower - Office No 2605</h1>
          <form>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <button type="submit">APPLY HERE</button>
          </form>
        </div>
        <div className="map-container">
          <div
            className="elementor-element elementor-element-9e5d0bf e-con-full e-flex e-con e-child"
            data-id="9e5d0bf"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-3e5ee4b elementor-widget elementor-widget-text-editor"
              data-id="3e5ee4b"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <iframe
                  src={map}
                  width="600"
                  height="550"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
