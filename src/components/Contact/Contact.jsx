import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="section-title">
                Let’s <span className="gold">Connect</span>
            </h2>
            <p className="contact-intro">
                Whether you’re looking to collaborate, discuss a project, or just say
                hello — I’d love to hear from you!
            </p>

            <form className="contact-form">
                <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-gold">
                    Send Message
                </button>
            </form>

            <div className="social-links">
                <a href="https://github.com/deepikayadav610" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/deepikayadav" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:deepikayadav610@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </section>
    );
};

export default Contact;
