import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="section-container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a
              href="#hero"
              className="footer__logo"
              onClick={(e) => scrollTo(e, "#hero")}
              aria-label="Back to top"
            >
              <span className="footer__logo-bracket">&lt;</span>
              MG
              <span className="footer__logo-bracket">/&gt;</span>
            </a>
            <p className="footer__tagline">
              Building real systems, one commit at a time.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {[
              ["#build", "What I Build"],
              ["#projects", "Projects"],
              ["#experience", "Experience"],
              ["#stack", "Stack"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="footer__nav-link"
                onClick={(e) => scrollTo(e, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/muskan-gupta-755473247"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/muskan-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <i className="bx bxl-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://medium.com/@gmuskan.0203"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Medium"
            >
              <i className="bx bxl-medium" aria-hidden="true"></i>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Download Resume"
            >
              <i className="bx bx-file" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Muskan Gupta · Built with React.js + Node.js + MongoDB
          </p>
          <p className="footer__built">
            <span className="footer__built-tag">
              <i className="bx bx-code-alt" aria-hidden="true"></i>
              Open to opportunities
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
