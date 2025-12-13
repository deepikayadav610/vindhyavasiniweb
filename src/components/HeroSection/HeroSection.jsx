import React from "react";
import "./HeroSection.css";

const Hero = () => {
    return (
        <section className="hero" id="home">
  <div className="hero-content">
    {/* Optional small tagline */}
    <span className="hero-tagline">
      Professional Website Developer
    </span>

    <h1 className="hero-title">
      Hi, I’m <span className="gold">Deepika Yadav</span>
    </h1>

    <h2 className="hero-subtitle">
      I build <span className="highlight">modern, professional websites</span> that help
      businesses grow online.
    </h2>

    <p className="hero-text">
      I design and develop clean, fast, and user-friendly websites for businesses and brands,
      focusing on modern UI, performance, and conversion-driven layouts.
    </p>

    <div className="hero-buttons">
      <a href="#portfolio" className="btn-gold">
        View My Work
      </a>
      <a href="#contact" className="btn-outline">
        Let’s Build Your Website
      </a>
    </div>

    {/* Optional trust line */}
    <p className="hero-trust ">
      Trusted by businesses for clean and scalable web solutions
    </p>
  </div>

  <div className="hero-image">
    <div className="img-wrapper">
      <img src="/img/deepikaydv610.jpeg" alt="Deepika Yadav" />
    </div>
  </div>
</section>

    );
};

export default Hero;
