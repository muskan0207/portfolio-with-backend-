import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="container">
          <header className="header">
            <Link to="/" className="logo">
              <span>M</span>USKAN
            </Link>

            {/* Mobile Menu Toggle Button */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
              <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
              <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
              <li><Link to="/contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact Me</Link></li>
            </ul>
          </header>
        </div>
      </nav>

      {/* Thin Navbar for Social Links */}
      
    </>
  );
};

export default Nav;
