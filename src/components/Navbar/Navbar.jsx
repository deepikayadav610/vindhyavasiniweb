import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span className="gold">𝓋𝒾𝓃𝒹𝒽𝓎𝒶𝓋𝒶𝓈𝒾𝓃𝒾 </span> 𝓌𝑒𝒷  
                </div>

                <div
                    className={`menu-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span><span></span><span></span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact" className="btn-gold">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
