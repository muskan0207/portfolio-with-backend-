import React, { useState } from "react";
import "./WhatIBuild.css";

const CAPABILITIES = [
  {
    id: "fullstack",
    icon: "bx-layer",
    title: "Full-Stack Applications",
    subtitle: "End-to-end web systems",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Building complete web applications from interactive React frontends to RESTful Node.js backends with MongoDB persistence.",
    color: "#6366f1",
  },
  {
    id: "backend",
    icon: "bx-server",
    title: "Backend Systems",
    subtitle: "Scalable server-side architecture",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "REST APIs"],
    description:
      "Designing modular backend services with NestJS, TypeORM, and PostgreSQL — the same stack used in production at RemoteBricks.",
    color: "#10b981",
  },
  {
    id: "cloud",
    icon: "bx-cloud",
    title: "Cloud-Connected Apps",
    subtitle: "AWS-integrated services",
    stack: ["AWS S3", "AWS EC2", "CloudFront", "Cognito"],
    description:
      "Integrating AWS services for file storage, CDN delivery, and authentication in production backend systems.",
    color: "#f59e0b",
  },
  {
    id: "security",
    icon: "bx-shield-quarter",
    title: "Secure Applications",
    subtitle: "Security-first development",
    stack: ["JWT", "AWS Cognito", "Rate Limiting", "NoSQL Injection Prevention"],
    description:
      "Implementing authentication, authorization, input sanitization, and rate limiting — security is not an afterthought.",
    color: "#06b6d4",
  },
];

const WhatIBuild = () => {
  const [active, setActive] = useState("fullstack");

  const activeItem = CAPABILITIES.find((c) => c.id === active);

  return (
    <section className="wib" id="build" aria-labelledby="wib-heading">
      <div className="section-container">
        <div className="wib__header">
          <p className="section-label">Capabilities</p>
          <h2 className="section-heading" id="wib-heading">
            What I <span>Build</span>
          </h2>
          <p className="section-sub">
            Not just features — systems. Here's what I actually build and the
            technologies behind each.
          </p>
        </div>

        <div className="wib__layout">
          {/* Selector */}
          <div className="wib__selector" role="tablist" aria-label="Capability categories">
            {CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                role="tab"
                aria-selected={active === cap.id}
                aria-controls={`wib-panel-${cap.id}`}
                className={`wib__tab${active === cap.id ? " wib__tab--active" : ""}`}
                onClick={() => setActive(cap.id)}
                style={{ "--cap-color": cap.color }}
              >
                <div className="wib__tab-icon">
                  <i className={`bx ${cap.icon}`} aria-hidden="true"></i>
                </div>
                <div className="wib__tab-text">
                  <span className="wib__tab-title">{cap.title}</span>
                  <span className="wib__tab-sub">{cap.subtitle}</span>
                </div>
                <i className="bx bx-chevron-right wib__tab-arrow" aria-hidden="true"></i>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {activeItem && (
            <div
              className="wib__panel"
              id={`wib-panel-${activeItem.id}`}
              role="tabpanel"
              key={activeItem.id}
              style={{ "--cap-color": activeItem.color }}
            >
              <div className="wib__panel-icon">
                <i className={`bx ${activeItem.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="wib__panel-title">{activeItem.title}</h3>
              <p className="wib__panel-desc">{activeItem.description}</p>
              <div className="wib__panel-stack">
                {activeItem.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
