import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const ROLES = [
  "Full-Stack Developer",
  "Backend Engineer",
  "React Developer",
  "NestJS Developer",
];

const STACK_FLOW = [
  { label: "Frontend", tech: "React.js", icon: "bxl-react", color: "#61dafb" },
  { label: "Backend", tech: "Node · NestJS", icon: "bxl-nodejs", color: "#68a063" },
  { label: "Database", tech: "MongoDB · PostgreSQL", icon: "bx-data", color: "#10b981" },
  { label: "Cloud", tech: "AWS S3 · EC2 · Cognito", icon: "bxl-aws", color: "#f59e0b" },
  { label: "Deploy", tech: "Production", icon: "bx-rocket", color: "#6366f1" },
];

const CODE_LINES = [
  { indent: 0, text: "const developer = {", color: "var(--text-primary)" },
  { indent: 1, text: 'name: "Muskan Gupta",', color: "var(--text-secondary)" },
  { indent: 1, text: 'role: "Full-Stack Developer",', color: "var(--text-secondary)" },
  { indent: 1, text: "stack: [React, NestJS, AWS],", color: "#61dafb" },
  { indent: 1, text: 'location: "Ahmedabad, India",', color: "var(--text-secondary)" },
  { indent: 1, text: 'status: "Open to opportunities",', color: "#10b981" },
  { indent: 1, text: "buildsRealSystems: true,", color: "#f59e0b" },
  { indent: 0, text: "};", color: "var(--text-primary)" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [activeFlow, setActiveFlow] = useState(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const timeoutRef = useRef(null);

  // Typewriter for role
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  // Auto-cycle flow nodes
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActiveFlow(i);
      i = (i + 1) % STACK_FLOW.length;
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  // Animate code lines appearing
  useEffect(() => {
    if (visibleLines < CODE_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 180);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--1" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--2" aria-hidden="true"></div>

      <div className="hero__inner section-container">
        {/* Left: Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="dot-live" aria-hidden="true"></span>
            <span>Available for opportunities · Ahmedabad, India</span>
          </div>

          <h1 className="hero__name">
            Muskan <span className="gradient-text">Gupta</span>
          </h1>

          <div className="hero__role" aria-live="polite" aria-label={`Role: ${ROLES[roleIndex]}`}>
            <span className="hero__role-prefix">I'm a </span>
            <span className="hero__role-text">{displayed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero__tagline">
            I build full-stack systems — from React interfaces to NestJS APIs,
            PostgreSQL schemas, and AWS-connected backends. Currently at{" "}
            <strong>RemoteBricks</strong>, shipping production code.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary" onClick={scrollTo("#projects")}>
              <i className="bx bx-code-block" aria-hidden="true"></i>
              View Projects
            </a>
            <a href="#contact" className="btn-outline" onClick={scrollTo("#contact")}>
              <i className="bx bx-send" aria-hidden="true"></i>
              Let's Talk
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="Download Resume PDF"
            >
              <i className="bx bx-download" aria-hidden="true"></i>
              Resume
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">2+</span>
              <span className="hero__stat-label">Real Projects</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">6mo+</span>
              <span className="hero__stat-label">Production Exp.</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">8.46</span>
              <span className="hero__stat-label">CPI</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero__visual" aria-label="Technology stack and code preview">
          {/* Code terminal */}
          <div className="hero__terminal" aria-hidden="true">
            <div className="hero__terminal-bar">
              <span className="hero__terminal-dot hero__terminal-dot--red"></span>
              <span className="hero__terminal-dot hero__terminal-dot--yellow"></span>
              <span className="hero__terminal-dot hero__terminal-dot--green"></span>
              <span className="hero__terminal-filename">developer.js</span>
            </div>
            <div className="hero__terminal-body">
              {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className="hero__terminal-line"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="hero__terminal-ln">{i + 1}</span>
                  <span
                    className="hero__terminal-code"
                    style={{
                      paddingLeft: `${line.indent * 16}px`,
                      color: line.color,
                    }}
                  >
                    {line.text}
                  </span>
                </div>
              ))}
              {visibleLines < CODE_LINES.length && (
                <div className="hero__terminal-line">
                  <span className="hero__terminal-ln">{visibleLines + 1}</span>
                  <span className="hero__terminal-cursor">▋</span>
                </div>
              )}
            </div>
          </div>

          {/* Stack flow */}
          <div className="hero__flow" aria-label="Technology stack flow">
            {STACK_FLOW.map((node, i) => (
              <React.Fragment key={node.label}>
                <div
                  className={`hero__flow-node${activeFlow === i ? " hero__flow-node--active" : ""}`}
                  style={{ "--node-color": node.color }}
                  onMouseEnter={() => setActiveFlow(i)}
                >
                  <div className="hero__flow-icon">
                    <i className={`bx ${node.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="hero__flow-info">
                    <span className="hero__flow-label">{node.label}</span>
                    <span className="hero__flow-tech">{node.tech}</span>
                  </div>
                </div>
                {i < STACK_FLOW.length - 1 && (
                  <div
                    className={`hero__flow-arrow${activeFlow === i ? " hero__flow-arrow--active" : ""}`}
                    aria-hidden="true"
                  >
                    <i className="bx bx-chevron-right"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
