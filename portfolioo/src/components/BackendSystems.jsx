import React, { useState } from "react";
import "./BackendSystems.css";

const AREAS = [
  {
    id: "api",
    icon: "bx-transfer-alt",
    title: "API Development",
    color: "#6366f1",
    desc: "Designing and building RESTful APIs with NestJS and Express.js — structured, versioned, and documented.",
    detail: "Built backend modules for Bugnova at RemoteBricks using NestJS's modular architecture. Designed clean REST endpoints with proper request validation, error handling, and response shaping.",
    tags: ["NestJS", "Express.js", "REST APIs", "Node.js"],
  },
  {
    id: "auth",
    icon: "bx-lock-alt",
    title: "Authentication & Authorization",
    color: "#10b981",
    desc: "Implementing secure auth flows — from JWT tokens to AWS Cognito for enterprise-grade multi-tenant systems.",
    detail: "Integrated AWS Cognito for Bugnova's multi-user authentication. Built JWT-based auth for FunBrain with role-based access control for parental controls and user management.",
    tags: ["AWS Cognito", "JWT", "Role-Based Access", "Session Management"],
  },
  {
    id: "database",
    icon: "bx-data",
    title: "Database Design",
    color: "#f59e0b",
    desc: "Designing normalized relational schemas with PostgreSQL/TypeORM and flexible document models with MongoDB.",
    detail: "Designed PostgreSQL schemas for Bugnova's project-bug-sprint relationships using TypeORM. Built MongoDB document models for FunBrain's educational content and user data.",
    tags: ["PostgreSQL", "TypeORM", "MongoDB", "Schema Design"],
  },
  {
    id: "cloud",
    icon: "bxl-aws",
    title: "Cloud Storage & CDN",
    color: "#06b6d4",
    desc: "Connecting backends to AWS S3 for file storage and CloudFront for content delivery.",
    detail: "Built file upload/download flows for Bugnova using AWS S3 — handling multipart uploads, signed URLs, and access control. AWS CloudFront for CDN delivery.",
    tags: ["AWS S3", "CloudFront", "EC2", "File Uploads"],
  },
  {
    id: "security",
    icon: "bx-shield-quarter",
    title: "Security",
    color: "#f43f5e",
    desc: "Security built in from the start — input sanitization, rate limiting, and injection prevention.",
    detail: "Implemented rate limiting and NoSQL injection prevention in FunBrain. Applied input sanitization across all API endpoints. Security is not an afterthought in any system I build.",
    tags: ["Rate Limiting", "NoSQL Injection Prevention", "Input Sanitization", "CORS"],
  },
  {
    id: "production",
    icon: "bx-rocket",
    title: "Production Systems",
    color: "#8b5cf6",
    desc: "Shipping code that runs in production — not just local demos. Real deployments, real users.",
    detail: "Contributed to Bugnova as a production system at RemoteBricks. Worked on real deployments, resolved production issues, and collaborated with the engineering team on live systems.",
    tags: ["Production Deployments", "Bug Resolution", "Code Reviews", "Team Collaboration"],
  },
];

const BackendSystems = () => {
  const [active, setActive] = useState("api");
  const activeArea = AREAS.find((a) => a.id === active);

  return (
    <section className="backend" id="backend" aria-labelledby="backend-heading">
      <div className="section-container">
        <div className="backend__header">
          <p className="section-label">Backend</p>
          <h2 className="section-heading" id="backend-heading">
            System <span>Thinking</span>
          </h2>
          <p className="section-sub">
            I don't just build UIs. Here's what happens on the server side.
          </p>
        </div>

        <div className="backend__layout">
          <div className="backend__grid">
            {AREAS.map((area) => (
              <button
                key={area.id}
                className={`backend__card${active === area.id ? " backend__card--active" : ""}`}
                style={{ "--area-color": area.color }}
                onClick={() => setActive(area.id)}
                aria-pressed={active === area.id}
              >
                <div className="backend__card-icon">
                  <i className={`bx ${area.icon}`} aria-hidden="true"></i>
                </div>
                <div className="backend__card-text">
                  <span className="backend__card-title">{area.title}</span>
                  <span className="backend__card-desc">{area.desc}</span>
                </div>
              </button>
            ))}
          </div>

          {activeArea && (
            <div
              className="backend__detail"
              key={activeArea.id}
              style={{ "--area-color": activeArea.color }}
            >
              <div className="backend__detail-icon">
                <i className={`bx ${activeArea.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="backend__detail-title">{activeArea.title}</h3>
              <p className="backend__detail-text">{activeArea.detail}</p>
              <div className="backend__detail-tags">
                {activeArea.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BackendSystems;
