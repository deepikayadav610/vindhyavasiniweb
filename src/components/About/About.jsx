import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="/img/deepikaydv610.jpeg" alt="Deepika Yadav" />
                </div>

                <div className="about-content">
                    <h2 className="section-title">
                        About <span className="gold">Me</span>
                    </h2>
                    <p className="about-text">
                        I'm <span className="gold">Deepika Yadav</span>, a passionate{" "}
                        <strong>Frontend Developer</strong> who loves transforming ideas into
                        clean, modern, and engaging digital experiences.
                    </p>

                    <p className="about-text">
                        With a strong foundation in <span className="highlight">React</span>,
                        <span className="highlight"> JavaScript</span>, and
                        <span className="highlight"> UI/UX principles</span>, I build interfaces
                        that are not just beautiful but also intuitive and efficient.
                    </p>

                    <p className="about-text">
                        I enjoy working on projects that blend <span className="gold">creativity</span> and
                        <span className="gold"> logic</span> — delivering results that look elegant and perform flawlessly.
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
