import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    const projects = [
        {
            title: "Ventura Alloy & Steels Pvt. Ltd. Website",
            description: "Corporate website built for Ventura Alloy & Steels Pvt. Ltd. with a clean, professional UI."
            ,
            image: "https://res.cloudinary.com/dgujwx9r9/image/upload/f_auto,q_auto/v1764048075/home-bg_zwi4ic.png",
            link: "https://venturasteels.com/",
        }
        ,
        {
            title: "Pateluxe Website",
            description: "Elegant jewelry brand site with React and Bootstrap, showcasing timeless design and premium craftsmanship.",
            image: "/img/pateluxe1.png",
            link: "https://pateluxe.onrender.com/",
        },
        {
            title: "Portfolio Design",
            description: "My personal developer portfolio with a luxurious modern look — built using React + Vite + custom CSS.",
            image: "/img/image.png",
            link: "https://d-portfolio-client.onrender.com/",
        },
    ];

    return (
        <section className="portfolio" id="portfolio">
            <h2 className="section-title">
                My <span className="gold">Projects</span>
            </h2>
            <p className="portfolio-intro">
                Each project represents my passion for creativity, functionality,
                and clean UI — blending design with performance.
            </p>

            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="portfolio-card" key={index}>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="portfolio-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} className="btn-gold" target="_blank" rel="noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
