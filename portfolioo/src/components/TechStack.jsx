import React, { useState } from "react";
import "./TechStack.css";

const GROUPS = [
  {
    id: "languages",
    label: "Languages",
    icon: "bx-code",
    items: [
      { name: "HTML5", icon: "bxl-html5", color: "#e34f26" },
      { name: "CSS3", icon: "bxl-css3", color: "#1572b6" },
      { name: "JavaScript", icon: "bxl-javascript", color: "#f7df1e" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "bx-layout",
    items: [
      { name: "React.js", icon: "bxl-react", color: "#61dafb" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "bx-server",
    items: [
      { name: "Node.js", icon: "bxl-nodejs", color: "#68a063" },
      { name: "Express.js", icon: "bxl-nodejs", color: "#68a063" },
      { name: "NestJS", icon: "bxl-nodejs", color: "#e0234e" },
      { name: "Socket.IO", icon: "bx-transfer-alt", color: "#010101" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "bx-data",
    items: [
      { name: "MongoDB", icon: "bxl-mongodb", color: "#47a248" },
      { name: "PostgreSQL", icon: "bx-data", color: "#336791" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: "bxl-aws",
    items: [
      { name: "AWS S3", icon: "bxl-aws", color: "#f59e0b" },
      { name: "AWS EC2", icon: "bxl-aws", color: "#f59e0b" },
      { name: "CloudFront", icon: "bxl-aws", color: "#f59e0b" },
      { name: "Cognito", icon: "bxl-aws", color: "#f59e0b" },
    ],
  },
  {
    id: "cms",
    label: "CMS",
    icon: "bx-globe",
    items: [
      { name: "WordPress", icon: "bxl-wordpress", color: "#21759b" },
      { name: "Shopify", icon: "bx-store", color: "#96bf48" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "bx-wrench",
    items: [
      { name: "Git", icon: "bxl-git", color: "#f05032" },
      { name: "GitHub", icon: "bxl-github", color: "#f1f5f9" },
      { name: "VS Code", icon: "bxl-visual-studio", color: "#007acc" },
    ],
  },
];

const TechStack = () => {
  const [activeGroup, setActiveGroup] = useState("backend");

  const group = GROUPS.find((g) => g.id === activeGroup);

  return (
    <section className="stack" id="stack" aria-labelledby="stack-heading">
      <div className="section-container">
        <div className="stack__header">
          <p className="section-label">Technologies</p>
          <h2 className="section-heading" id="stack-heading">
            My <span>Tech Stack</span>
          </h2>
          <p className="section-sub">
            Tools I use to build, deploy, and maintain real applications.
          </p>
        </div>

        <div className="stack__layout">
          {/* Group tabs */}
          <div className="stack__groups" role="tablist" aria-label="Technology groups">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={activeGroup === g.id}
                aria-controls={`stack-panel-${g.id}`}
                className={`stack__group-btn${activeGroup === g.id ? " stack__group-btn--active" : ""}`}
                onClick={() => setActiveGroup(g.id)}
              >
                <i className={`bx ${g.icon}`} aria-hidden="true"></i>
                {g.label}
              </button>
            ))}
          </div>

          {/* Items */}
          {group && (
            <div
              className="stack__items"
              id={`stack-panel-${group.id}`}
              role="tabpanel"
              key={group.id}
            >
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="stack__item"
                  style={{ "--item-color": item.color }}
                >
                  <div className="stack__item-icon">
                    <i className={`bx ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <span className="stack__item-name">{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
