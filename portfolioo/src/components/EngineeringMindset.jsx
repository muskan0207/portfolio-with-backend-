import React, { useState } from "react";
import "./EngineeringMindset.css";

const STEPS = [
  {
    id: "understand",
    label: "Understand",
    icon: "bx-search-alt",
    color: "#06b6d4",
    desc: "Break down requirements, identify edge cases, and define what 'done' actually means before writing a line of code.",
    techs: ["Requirements Analysis", "System Design", "API Contracts"],
  },
  {
    id: "design",
    label: "Design",
    icon: "bx-sitemap",
    color: "#8b5cf6",
    desc: "Plan the data models, API structure, and component architecture before implementation.",
    techs: ["Database Schema", "REST API Design", "Component Architecture"],
  },
  {
    id: "build",
    label: "Build",
    icon: "bx-code-block",
    color: "#6366f1",
    desc: "Write clean, modular code using the right tools for the job — NestJS for structured backends, React for interactive UIs.",
    techs: ["NestJS", "React.js", "TypeORM", "Express.js", "MongoDB"],
  },
  {
    id: "secure",
    label: "Secure",
    icon: "bx-shield-quarter",
    color: "#10b981",
    desc: "Security is built in, not bolted on. Authentication, input validation, and injection prevention are non-negotiable.",
    techs: ["JWT", "AWS Cognito", "Rate Limiting", "NoSQL Injection Prevention", "Input Sanitization"],
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: "bx-cloud-upload",
    color: "#f59e0b",
    desc: "Connect to cloud infrastructure and ship to production with proper environment configuration.",
    techs: ["AWS S3", "AWS EC2", "CloudFront", "Environment Config"],
  },
  {
    id: "improve",
    label: "Improve",
    icon: "bx-trending-up",
    color: "#f43f5e",
    desc: "Production is the beginning. Monitor, debug, and iterate based on real-world usage.",
    techs: ["Bug Fixes", "Performance Optimization", "Code Reviews", "Refactoring"],
  },
];

const EngineeringMindset = () => {
  const [active, setActive] = useState("build");

  const activeStep = STEPS.find((s) => s.id === active);

  return (
    <section className="mindset" id="mindset" aria-labelledby="mindset-heading">
      <div className="section-container">
        <div className="mindset__header">
          <p className="section-label">Process</p>
          <h2 className="section-heading" id="mindset-heading">
            How I Think as a <span>Developer</span>
          </h2>
          <p className="section-sub">
            Good software isn't just about writing code. It's about the thinking
            that happens before, during, and after.
          </p>
        </div>

        <div className="mindset__flow" role="tablist" aria-label="Development process steps">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.id}>
              <button
                role="tab"
                aria-selected={active === step.id}
                aria-controls={`mindset-panel-${step.id}`}
                className={`mindset__step${active === step.id ? " mindset__step--active" : ""}`}
                onClick={() => setActive(step.id)}
                style={{ "--step-color": step.color }}
              >
                <div className="mindset__step-icon">
                  <i className={`bx ${step.icon}`} aria-hidden="true"></i>
                </div>
                <span className="mindset__step-label">{step.label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div className="mindset__connector" aria-hidden="true">
                  <i className="bx bx-chevron-right"></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {activeStep && (
          <div
            className="mindset__panel"
            id={`mindset-panel-${activeStep.id}`}
            role="tabpanel"
            key={activeStep.id}
            style={{ "--step-color": activeStep.color }}
          >
            <div className="mindset__panel-left">
              <div className="mindset__panel-icon">
                <i className={`bx ${activeStep.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="mindset__panel-title">{activeStep.label}</h3>
              <p className="mindset__panel-desc">{activeStep.desc}</p>
            </div>
            <div className="mindset__panel-right">
              <span className="mindset__panel-tech-label">Relevant tools & practices</span>
              <div className="mindset__panel-techs">
                {activeStep.techs.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EngineeringMindset;
