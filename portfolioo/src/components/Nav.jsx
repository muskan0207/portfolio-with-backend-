import React, { useState, useEffect } from "react";
import "./Nav.css";

const NAV_LINKS = [
  { label: "Build", href: "#build" },
  { label: "Projects", href: "#projects" },
  { label: "Backend", href: "#backend" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const Nav = ({ onCommandOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Global ⌘K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onCommandOpen?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onCommandOpen]);

  return (
    <nav
      className={`nav${scrolled ? " nav--scrolled" : ""}${menuOpen ? " nav--open" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav__inner">
        <a
          href="#hero"
          className="nav__logo"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Go to top"
        >
          <span className="nav__logo-bracket">&lt;</span>
          MG
          <span className="nav__logo-bracket">/&gt;</span>
        </a>

        <ul
          className={`nav__links${menuOpen ? " nav__links--open" : ""}`}
          role="list"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button
            className="nav__cmd-btn"
            onClick={onCommandOpen}
            aria-label="Open command palette"
            title="Command Palette (⌘K)"
          >
            <i className="bx bx-terminal" aria-hidden="true"></i>
            <span className="nav__cmd-hint">⌘K</span>
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__resume-btn"
            aria-label="Download Resume"
          >
            Resume
          </a>

          <button
            className="nav__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`nav__bar${menuOpen ? " nav__bar--open" : ""}`}></span>
            <span className={`nav__bar${menuOpen ? " nav__bar--open" : ""}`}></span>
            <span className={`nav__bar${menuOpen ? " nav__bar--open" : ""}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
