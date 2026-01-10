import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
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
        {/* LOGO */}
        <div className="navbar-logo">
          <a href="/"> <span className="gold">𝓋𝒾𝓃𝒹𝒽𝓎𝒶𝓋𝒶𝓈𝒾𝓃𝒾</span> web</a>
        </div>

        {/* MOBILE TOGGLE */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
          </li>

          {/* UNIQUE CONTACT CTA */}
          <li>
            <a
              href="#contact"
              className="contact-cta"
              onClick={() => setMenuOpen(false)}
            >
              <FaPaperPlane className="cta-icon" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
