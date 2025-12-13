import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">
        My <span className="gold">Services</span>
      </h2>

      <p className="section-subtitle">
        Professional web solutions designed to help businesses attract
        customers, build trust, and grow online.
      </p>

      <div className="services-container">
        <div className="service-card">
          <div className="icon">🌐</div>
          <h3>Business Website Development</h3>
          <p>
            Custom-designed business websites that are fast, responsive, and
            built to represent your brand professionally across all devices.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">✨</div>
          <h3>Modern UI / UX Design</h3>
          <p>
            Clean, user-friendly designs focused on clarity, engagement, and
            conversion—ensuring visitors stay longer and take action.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📈</div>
          <h3>Website Performance & Optimization</h3>
          <p>
            Speed, SEO, and performance optimization to improve load times,
            search visibility, and overall user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
