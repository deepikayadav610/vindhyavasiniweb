import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">
          © {new Date().getFullYear()} <span className="gold">Deepika Yadav</span>
        </p>

        <p className="footer-tagline">
          Professional Website Developer • Modern Business Websites
        </p>

        <div className="footer-social">
          <a
            href="https://github.com/deepikayadav610/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/deepika-yadav-5a3502274/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <p className="footer-credit">
          Made with ❤️ using React, Bootstrap & Custom CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
