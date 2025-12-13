import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container about-center">
        <div className="about-content full-width">
          <h2 className="section-title">
            About <span className="gold">Me</span>
          </h2>

          <p className="about-text">
            I’m <span className="gold">Deepika Yadav</span>, a professional
            website developer specializing in building modern, clean, and
            high-quality websites for businesses and brands.
          </p>

          <p className="about-text">
            I help companies establish a strong online presence through
            user-friendly design, performance-optimized development, and layouts
            that are focused on real business goals.
          </p>

          <p className="about-text">
            My approach combines <span className="gold">design clarity</span>{" "}
            and
            <span className="gold"> technical precision</span> to deliver
            websites that are not only visually appealing but also reliable,
            scalable, and easy to maintain.
          </p>

          <div className="about-buttons">
            <a href="#contact" className="btn-outline">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
