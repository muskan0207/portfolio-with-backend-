import React, { useState } from "react";
import "./ExperienceTimeline.css";

const EXPERIENCE = [
  {
    id: "rb-fulltime",
    company: "RemoteBricks Pvt Ltd",
    role: "Full-Stack Developer",
    type: "Full-Time",
    period: "December 2025 – Present",
    current: true,
    color: "#6366f1",
    highlights: [
      "Continued development on Bugnova — a production bug-tracking and project management platform",
      "Building and maintaining NestJS backend modules with TypeORM and PostgreSQL",
      "Integrating AWS services: S3 for file storage, Cognito for authentication",
      "Collaborating with the engineering team on production deployments",
    ],
    stack: ["NestJS", "TypeORM", "PostgreSQL", "AWS S3", "AWS Cognito"],
  },
  {
    id: "rb-intern",
    company: "RemoteBricks Pvt Ltd",
    role: "Software Development Intern",
    type: "Internship",
    period: "June 2025 – November 2025",
    current: false,
    color: "#8b5cf6",
    highlights: [
      "Joined as an intern and contributed to the Bugnova backend from day one",
      "Learned and applied NestJS, TypeORM, and PostgreSQL in a production environment",
      "Worked on AWS integrations including S3 and Cognito",
      "Transitioned to full-time based on performance",
    ],
    stack: ["NestJS", "TypeORM", "PostgreSQL", "AWS", "Node.js"],
  },
];

const EDUCATION = {
  institution: "Ahmedabad Institute of Technology",
  degree: "Bachelor of Engineering",
  period: "2022 – 2026",
  location: "Gujarat, Ahmedabad",
  cpi: "8.46",
};

const CERTIFICATIONS = [
  {
    name: "MERN Stack for Web Developers",
    provider: "KICT Education Pvt Ltd",
    date: "April 2024",
    icon: "bxl-nodejs",
    color: "#68a063",
  },
  {
    name: "AI Aware and AI Appreciate",
    provider: "Intel India",
    date: "December 2024",
    icon: "bx-brain",
    color: "#06b6d4",
  },
  {
    name: "Leadership Course",
    provider: "IIM Ahmedabad",
    date: "February 2024",
    icon: "bx-group",
    color: "#f59e0b",
  },
  {
    name: "Git and GitHub Workshop",
    provider: "AIT",
    date: "October 2023",
    icon: "bxl-github",
    color: "#f1f5f9",
  },
  {
    name: "Web Development Fundamentals",
    provider: "IBM SkillsBuild",
    date: "December 2024",
    icon: "bx-code-block",
    color: "#6366f1",
  },
];

const ExperienceTimeline = () => {
  const [activeExp, setActiveExp] = useState("rb-fulltime");

  const active = EXPERIENCE.find((e) => e.id === activeExp);

  return (
    <section className="timeline" id="experience" aria-labelledby="exp-heading">
      <div className="section-container">
        {/* Experience */}
        <div className="timeline__block">
          <div className="timeline__block-header">
            <p className="section-label">Career</p>
            <h2 className="section-heading" id="exp-heading">
              Professional <span>Experience</span>
            </h2>
          </div>

          <div className="timeline__exp-layout">
            {/* Selector */}
            <div className="timeline__exp-list">
              {EXPERIENCE.map((exp, i) => (
                <React.Fragment key={exp.id}>
                  <button
                    className={`timeline__exp-btn${activeExp === exp.id ? " timeline__exp-btn--active" : ""}`}
                    onClick={() => setActiveExp(exp.id)}
                    style={{ "--exp-color": exp.color }}
                    aria-pressed={activeExp === exp.id}
                  >
                    <div className="timeline__exp-dot">
                      {exp.current && <span className="dot-live" aria-label="Current position"></span>}
                    </div>
                    <div className="timeline__exp-info">
                      <span className="timeline__exp-role">{exp.role}</span>
                      <span className="timeline__exp-company">{exp.company}</span>
                      <span className="timeline__exp-period">{exp.period}</span>
                    </div>
                    <span className={`timeline__exp-badge${exp.current ? " timeline__exp-badge--current" : ""}`}>
                      {exp.type}
                    </span>
                  </button>
                  {i === 0 && (
                    <div className="timeline__transition" aria-label="Promoted to full-time">
                      <i className="bx bx-trending-up" aria-hidden="true"></i>
                      Promoted to Full-Time
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Detail */}
            {active && (
              <div
                className="timeline__exp-detail"
                key={active.id}
                style={{ "--exp-color": active.color }}
              >
                <div className="timeline__exp-detail-header">
                  <div>
                    <h3 className="timeline__exp-detail-role">{active.role}</h3>
                    <p className="timeline__exp-detail-company">{active.company} · {active.period}</p>
                  </div>
                  {active.current && (
                    <span className="timeline__current-badge">
                      <span className="dot-live" aria-hidden="true"></span>
                      Current
                    </span>
                  )}
                </div>

                <ul className="timeline__exp-highlights">
                  {active.highlights.map((h, i) => (
                    <li key={i}>
                      <i className="bx bx-chevron-right" aria-hidden="true"></i>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="timeline__exp-stack">
                  {active.stack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Education */}
        <div className="timeline__block">
          <div className="timeline__block-header">
            <p className="section-label">Education</p>
            <h2 className="section-heading">
              Academic <span>Background</span>
            </h2>
          </div>

          <div className="timeline__edu-card">
            <div className="timeline__edu-icon">
              <i className="bx bx-buildings" aria-hidden="true"></i>
            </div>
            <div className="timeline__edu-info">
              <h3 className="timeline__edu-institution">{EDUCATION.institution}</h3>
              <p className="timeline__edu-degree">{EDUCATION.degree}</p>
              <div className="timeline__edu-meta">
                <span><i className="bx bx-calendar" aria-hidden="true"></i> {EDUCATION.period}</span>
                <span><i className="bx bx-map-pin" aria-hidden="true"></i> {EDUCATION.location}</span>
                <span className="timeline__edu-cpi">
                  <i className="bx bx-star" aria-hidden="true"></i> CPI: {EDUCATION.cpi}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="timeline__block">
          <div className="timeline__block-header">
            <p className="section-label">Learning</p>
            <h2 className="section-heading">
              Continuous <span>Learning</span>
            </h2>
          </div>

          <div className="timeline__certs">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="timeline__cert-card"
                style={{ "--cert-color": cert.color }}
              >
                <div className="timeline__cert-icon">
                  <i className={`bx ${cert.icon}`} aria-hidden="true"></i>
                </div>
                <div className="timeline__cert-info">
                  <h4 className="timeline__cert-name">{cert.name}</h4>
                  <p className="timeline__cert-provider">{cert.provider}</p>
                  <span className="timeline__cert-date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
