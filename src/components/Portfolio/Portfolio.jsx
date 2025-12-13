import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Ventura Alloy & Steels Pvt. Ltd. Website",
      description:
        "A professional B2B corporate website designed to showcase products, certifications, and infrastructure, with a clean industrial UI and enquiry-focused layout.",
      image:
        "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764048075/home-bg_zwi4ic.png",
      link: "https://venturasteels.com/",
    },
    {
      title: "Jewelry Brand Website",
      description:
        "An elegant product-focused website built for a jewelry brand, highlighting collections with a modern layout and smooth user experience.",
      image: "/img/pateluxe1.png",
      link: "https://pateluxe.onrender.com/",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern personal portfolio website designed to present skills, projects, and services with a premium UI and clean navigation.",
      image: "/img/image.png",
      link: "https://d-portfolio-client.onrender.com/",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title">
        Selected <span className="gold">Projects</span>
      </h2>

      <p className="portfolio-intro">
        A selection of professional websites I’ve designed and developed to help
        businesses present their brand, showcase services, and generate
        enquiries.
      </p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="image-container">
              <img src={project.image} alt={project.title} />
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
    </section>
  );
};

export default Portfolio;
