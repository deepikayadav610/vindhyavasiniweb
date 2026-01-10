import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container about-center">
        <div className="about-content full-width" data-aos="fade-up">
          <h2 className="section-title" data-aos="fade-down">
            About <span className="gold">Me</span>
          </h2>

          <p className="about-text" data-aos="fade-up" data-aos-delay="100">
            I’m <span className="gold">Deepika Yadav</span>, a professional
            website developer specializing in building modern, clean, and
            high-quality websites for businesses and brands.
          </p>

          <p className="about-text" data-aos="fade-up" data-aos-delay="200">
            I help companies establish a strong online presence through
            user-friendly design, performance-optimized development, and layouts
            focused on real business goals.
          </p>

          <p className="about-text" data-aos="fade-up" data-aos-delay="300">
            My approach combines <span className="gold">design clarity</span>{" "}
            and <span className="gold">technical precision</span> to deliver
            websites that are visually appealing, scalable, and easy to
            maintain.
          </p>

          <div
            className="about-buttons"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
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
