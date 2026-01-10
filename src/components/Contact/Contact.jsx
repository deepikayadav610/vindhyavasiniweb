import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          // Auto-hide success after 5s
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2 className="section-title">
        Get In <span className="gold">Touch</span>
      </h2>

      <p className="contact-intro">
        Have a project in mind or need a professional website? Fill out the form
        or reach me directly.
      </p>

      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Mobile Number"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell me about your project"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-gold"
            disabled={loading || success}
          >
            {loading ? <span className="loader"></span> : "Send Enquiry"}
          </button>

          {success && (
            <div className="success-bar">
              <span className="success-fill"></span>
              <p>✅ Enquiry sent successfully!</p>
            </div>
          )}
        </form>

        <div className="contact-details" data-aos="fade-left">
          <p className="contact-label">Or reach me directly:</p>
          <p>
            ✉️{" "}
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
