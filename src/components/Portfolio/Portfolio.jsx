import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  const projects = [
    {
      title: "Ventura Alloy & Steels Pvt. Ltd.",
      tech: [
        "MERN Stack",
        "React",
        "Bootstrap",
        "EmailJS",
        "SEO",
        "Google Search Console",
      ],
      description:
        "A professional B2B corporate website built using the MERN stack, focused on product presentation, enquiries, and performance.",
      image:
        "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764048075/home-bg_zwi4ic.png",
      link: "https://venturasteels.com/",
    },
    {
      title: "Pateluxe Jewelry Brand",
      tech: ["React", "Bootstrap", "Custom CSS", "EmailJS", "Responsive UI"],
      description:
        "An elegant jewelry brand website built with React and custom CSS, designed for premium product presentation and smooth UX.",
      image: "/img/pateluxe2.png",
      link: "https://pateluxe.com/",
    },
    {
      title: "Ventura Alloy & Steels Pvt. Ltd.",
      tech: [
        "MERN Stack",
        "React",
        "Bootstrap",
        "EmailJS",
        "SEO",
        "Google Search Console",
      ],
      description:
        "A professional B2B corporate website developed using the MERN stack. The project explores multiple design approaches with different color themes, layouts, and UI styles—focused on product presentation, lead enquiries, performance, and SEO optimization.",
      image:
        "/img/ventura2.png",
      link: "https://venturasteels.com/",
      altVersion: "https://ventura-alloy-steels-snzc.onrender.com/",
    },
    {
      title: "Personal Portfolio Website",
      tech: ["React", "AOS Animations", "Custom CSS", "Responsive Design"],
      description:
        "A modern personal portfolio website showcasing projects, services, and skills with a clean, professional UI.",
      image: "/img/image.png",
      link: "https://d-portfolio-client.onrender.com/",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title" data-aos="fade-up">
        My <span className="gold">Works</span>
      </h2>

      <p className="portfolio-intro" data-aos="fade-up" data-aos-delay="150">
        Real-world projects built from scratch to live deployment — focused on
        performance, usability, and business results.
      </p>

      {/* PORTFOLIO GRID */}
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            className="portfolio-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="image-container">
              <img src={project.image} alt={project.title} />

              {/* TECH STACK OVERLAY */}
              <div className="overlay">
                <h4>Tech Stack</h4>
                <div className="tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <a
                href={project.link}
                className="btn-gold"
                target="_blank"
                rel="noreferrer"
              >
                View Live Website
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="portfolio-cta" data-aos="zoom-in">
        <h3>Have a project in mind?</h3>
        <p>
          Let’s build a high-performance website that represents your brand and
          delivers real results.
        </p>
        <a href="#contact" className="btn-gold">
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
