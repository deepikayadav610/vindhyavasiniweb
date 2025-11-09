import React from "react";
import "./HeroSection.css";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I’m <span className="gold">Deepika Yadav</span>
                </h1>

                <h2 className="hero-subtitle">
                    A <span className="highlight">Full Stack Web Developer</span> passionate about crafting
                    elegant, functional, and luxury web experiences.
                </h2>

                <p className="hero-text">
                    I design and build visually stunning, fast, and scalable websites using
                    React, Node.js, and MongoDB — blending creativity with clean code.
                </p>

                <div className="hero-buttons">
                    <a href="#portfolio" className="btn-gold">
                        View My Work
                    </a>
                    <a href="#contact" className="btn-outline">
                        Let’s Connect
                    </a>
                </div>
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
