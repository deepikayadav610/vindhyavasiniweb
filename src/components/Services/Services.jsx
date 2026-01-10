import { useEffect } from "react";
import {
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaTools,
  FaWpforms,
  FaSearch,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 200,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="services" id="services">
      <h2 className="section-title" data-aos="fade-up">
        What I <span className="gold">Build & Ship</span>
      </h2>

      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
        I design, develop, and deploy production-ready websites and web
        applications — from scratch to live deployment, optimized for
        performance, SEO, and real business use.
      </p>

      <div className="services-badge" data-aos="zoom-in" data-aos-delay="300">
        From Scratch → Live Deployment → Google Search Console
      </div>

      <div className="services-container">
        {/* Service 1 */}
        <div className="service-card" data-aos="fade-up">
          <div className="icon">
            <FaRocket />
          </div>
          <h3>End-to-End Website Development</h3>
          <p>
            Complete website development from concept to live production. Ideal
            for startups, businesses, personal brands, and B2B companies.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="icon">
            <FaCode />
          </div>
          <h3>Custom Frontend Development (React)</h3>
          <p>
            Modern, scalable frontend development using React, Bootstrap, and
            custom CSS — built for speed, clarity, and maintainability.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="icon">
            <FaLayerGroup />
          </div>
          <h3>Full-Stack MERN Applications</h3>
          <p>
            Dynamic, database-driven web applications with secure APIs,
            real-world logic, and performance-optimized UI.
          </p>
        </div>

        {/* Service 4 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="icon">
            <FaTools />
          </div>
          <h3>Website Redesign & Optimization</h3>
          <p>
            Redesign outdated or slow websites to improve UI/UX, mobile
            responsiveness, speed, and Core Web Vitals.
          </p>
        </div>

        {/* Service 5 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <div className="icon">
            <FaWpforms />
          </div>
          <h3>Advanced Forms & Integrations</h3>
          <p>
            Production-grade forms with real-time validation, API integrations,
            secure handling, and lead-focused workflows.
          </p>
        </div>

        {/* Service 6 */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <div className="icon">
            <FaSearch />
          </div>
          <h3>SEO Setup & Deployment Support</h3>
          <p>
            SEO-ready websites with optimized structure, meta tags, performance,
            Google Search Console setup, and live deployment support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
