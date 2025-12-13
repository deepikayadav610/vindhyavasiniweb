import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        Get In <span className="gold">Touch</span>
      </h2>

      <p className="contact-intro">
        Have a project in mind or need a professional website for your business?
        Fill out the form or contact me directly — I’ll get back to you shortly.
      </p>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Your Mobile Number" required />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Tell me about your project"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-gold">
            Send Enquiry
          </button>
        </form>

        {/* Direct Contact Info */}
        <div className="contact-details">
          <p className="contact-label">Or reach me directly:</p>

          {/* <p>
            📞
            <a href="tel:+91XXXXXXXXXX" className="contact-link">
              +91 XXXXX XXXXX
            </a>
          </p> */}

          <p>
            ✉️
            <a href="mailto:deepikay.tech@gmail.com" className="contact-link">
              deepikay.tech@gmail.com
            </a>
          </p>

          <div className="social-links">
            <a
              href="https://github.com/deepikayadav610/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/deepika-yadav-5a3502274/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
