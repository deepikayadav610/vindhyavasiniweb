import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="section-title">
                My <span className="gold">Services</span>
            </h2>
            <p className="section-subtitle">
                I help brands and businesses grow with custom websites built for speed, beauty, and results.
            </p>

            <div className="services-container">
                <div className="service-card">
                    <div className="icon">💻</div>
                    <h3>Web Development</h3>
                    <p>
                        I build high-performing, responsive, and dynamic websites using React, Node.js, and MongoDB.
                    </p>
                </div>

                <div className="service-card">
                    <div className="icon">🎨</div>
                    <h3>UI / UX Design</h3>
                    <p>
                        I design elegant, intuitive interfaces with a focus on user experience and clean visual balance.
                    </p>
                </div>

                <div className="service-card">
                    <div className="icon">🚀</div>
                    <h3>Website Optimization</h3>
                    <p>
                        Speed and SEO-focused improvements that make your site fast, discoverable, and scalable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
