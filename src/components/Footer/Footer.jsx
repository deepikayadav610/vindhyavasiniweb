import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">
          © {new Date().getFullYear()}{" "}
          <span className="gold">Deepika Yadav</span>
        </p>

        <p className="footer-tagline">
          Professional Website Developer • Modern Business Websites
        </p>
      </div>
    </footer>
  );
};

export default Footer;
