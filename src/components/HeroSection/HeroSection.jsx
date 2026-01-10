import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tagline" data-aos="fade-up">
          Professional Website Developer
        </span>

        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Hi, I’m <span className="gold">Deepika Yadav</span>
        </h1>

        <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          I build{" "}
          <span className="highlight">
            modern, professional websites
          </span>{" "}
          that help businesses grow online.
        </h2>

        <p className="hero-text" data-aos="fade-up" data-aos-delay="300">
          I design and develop clean, fast, and user-friendly websites for
          businesses and brands, focusing on modern UI, performance, and
          conversion-driven layouts.
        </p>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="#portfolio" className="btn-gold">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Let’s Build Your Website
          </a>
        </div>

        <p className="hero-trust" data-aos="fade-up" data-aos-delay="500">
          Trusted by businesses for clean and scalable web solutions
        </p>
      </div>

      <div className="hero-image" data-aos="zoom-in" data-aos-delay="300">
        <div className="img-wrapper">
          <img src="/img/deepikaydv610.jpeg" alt="Deepika Yadav" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
