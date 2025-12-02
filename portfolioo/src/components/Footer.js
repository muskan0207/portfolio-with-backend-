import React from "react";
import { Link } from "react-router-dom";
// import "../styles/style.css";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔗 Social Media Links */}
        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        {/* 📂 Footer Links */}
        <ul className="footer-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* 📜 Copyright Text */}
        <p className="footer-copyright">
          © 2024 <span>Muskan</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
