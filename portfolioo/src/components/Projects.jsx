import React, { useState } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    id: "bugnova",
    title: "Bugnova",
    type: "Professional · RemoteBricks",
    tagline: "Bug-tracking & project management platform",
    status: "Production",
    statusColor: "green",
    icon: "bx-bug",
    accentColor: "#6366f1",
    featured: true,
    problem:
      "Teams needed a reliable platform to track bugs, manage sprints, and collaborate — with secure multi-user access and scalable file handling.",
    built:
      "Contributed to the backend of Bugnova at RemoteBricks. Built and maintained NestJS modules, designed PostgreSQL schemas with TypeORM, integrated AWS Cognito for authentication, and connected AWS S3 for file storage.",
    technologies: [
      "NestJS", "TypeORM", "PostgreSQL", "AWS Cognito", "AWS S3", "REST APIs",
    ],
    challenges: [
      "Designing normalized PostgreSQL schemas for complex project-bug relationships",
      "Integrating AWS Cognito for secure multi-tenant authentication",
      "Building scalable file upload/download flows with AWS S3",
    ],
    result:
      "Delivered production-ready backend modules as part of the RemoteBricks engineering team.",
  },
  {
    id: "chatapp",
    title: "Chat App",
    type: "Personal Project",
    tagline: "Real-time one-to-one chat application",
    status: "Completed",
    statusColor: "accent",
    icon: "bx-chat",
    accentColor: "#f59e0b",
    featured: false,
    problem:
      "Users needed a fast, reliable way to communicate in real time — with persistent message history, secure authentication, and a responsive interface.",
    built:
      "Designed and developed a full-stack real-time chat application. Built the backend with Node.js and Express.js, integrated Socket.IO for real-time bidirectional messaging, used MongoDB for persistent message and conversation storage, and secured the app with JWT authentication.",
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT",
    ],
    challenges: [
      "Implementing real-time bidirectional communication with Socket.IO",
      "Managing live connection state and handling disconnections gracefully",
      "Persisting messages reliably in MongoDB while keeping delivery fast",
      "Securing user sessions with JWT across both HTTP and WebSocket layers",
    ],
    result:
      "A fully functional real-time chat application with persistent messaging, secure auth, and a responsive interface.",
  },
  {
    id: "funbrain",
    title: "FunBrain",
    type: "Personal Project",
    tagline: "MERN educational platform for children",
    status: "Completed",
    statusColor: "accent",
    icon: "bx-book-open",
    accentColor: "#10b981",
    featured: false,
    problem:
      "Children needed a safe, engaging educational platform with parental oversight, content filtering, and secure user management.",
    built:
      "Built a full MERN stack educational platform with JWT authentication, parental controls, content search/filtering, user management, and multiple security layers.",
    technologies: [
      "React.js", "Express.js", "MongoDB", "Node.js", "JWT", "Rate Limiting",
    ],
    challenges: [
      "Implementing parental control logic with role-based access",
      "Preventing NoSQL injection attacks on MongoDB queries",
      "Building rate limiting to protect against abuse",
      "Designing search and filtering for educational content",
    ],
    result:
      "A secure, full-featured educational platform demonstrating both functionality and security awareness.",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    type: "Personal Project",
    tagline: "Full-stack developer portfolio with contact backend",
    status: "Live",
    statusColor: "green",
    icon: "bx-code-curly",
    accentColor: "#06b6d4",
    featured: false,
    problem:
      "Needed a portfolio that communicates both frontend and backend skills — not just a static page, but a real full-stack application.",
    built:
      "Built with React.js frontend (Vite), Node.js/Express.js backend, MongoDB for contact form persistence, input sanitization, rate limiting, and responsive design.",
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Vite", "CSS",
    ],
    challenges: [
      "Building a secure contact form with server-side validation and sanitization",
      "Designing a responsive, performance-optimized UI without heavy libraries",
      "Deploying a full-stack application with separate frontend and backend",
    ],
    result:
      "A production-deployed full-stack portfolio demonstrating end-to-end development capability.",
  },
];

const ProjectCard = ({ project, featured }) => {
  const [expanded, setExpanded] = useState(featured);

  if (featured) {
    return (
      <article
        className="proj-featured"
        style={{ "--proj-color": project.accentColor }}
        aria-label={`Featured project: ${project.title}`}
      >
        <div className="proj-featured__left">
          <div className="proj-featured__top">
            <div className="proj-featured__icon">
              <i className={`bx ${project.icon}`} aria-hidden="true"></i>
            </div>
            <div>
              <span className="proj-card__type">{project.type}</span>
              <span className={`proj-card__status proj-card__status--${project.statusColor}`}>
                <span className="dot-live" aria-hidden="true"></span>
                {project.status}
              </span>
            </div>
          </div>

          <h3 className="proj-featured__title">{project.title}</h3>
          <p className="proj-featured__tagline">{project.tagline}</p>

          <div className="proj-featured__tags">
            {project.technologies.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="proj-featured__right">
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-question-mark" aria-hidden="true"></i> Problem
            </span>
            <p>{project.problem}</p>
          </div>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-wrench" aria-hidden="true"></i> What I Built
            </span>
            <p>{project.built}</p>
          </div>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-brain" aria-hidden="true"></i> Engineering Challenges
            </span>
            <ul className="proj-card__challenges">
              {project.challenges.map((c, i) => (
                <li key={i}>
                  <i className="bx bx-chevron-right" aria-hidden="true"></i>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-check-circle" aria-hidden="true"></i> Result
            </span>
            <p>{project.result}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`proj-card${expanded ? " proj-card--expanded" : ""}`}
      style={{ "--proj-color": project.accentColor }}
      aria-expanded={expanded}
    >
      <div className="proj-card__header">
        <div className="proj-card__icon">
          <i className={`bx ${project.icon}`} aria-hidden="true"></i>
        </div>
        <div className="proj-card__meta">
          <div className="proj-card__top">
            <span className="proj-card__type">{project.type}</span>
            <span className={`proj-card__status proj-card__status--${project.statusColor}`}>
              {project.statusColor === "green" && <span className="dot-live" aria-hidden="true"></span>}
              {project.status}
            </span>
          </div>
          <h3 className="proj-card__title">{project.title}</h3>
          <p className="proj-card__tagline">{project.tagline}</p>
        </div>
      </div>

      <div className="proj-card__tags">
        {project.technologies.slice(0, 4).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
        {project.technologies.length > 4 && (
          <span className="tag tag-gold">+{project.technologies.length - 4} more</span>
        )}
      </div>

      {expanded && (
        <div className="proj-card__detail" role="region" aria-label={`${project.title} details`}>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-question-mark" aria-hidden="true"></i> Problem
            </span>
            <p>{project.problem}</p>
          </div>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-wrench" aria-hidden="true"></i> What I Built
            </span>
            <p>{project.built}</p>
          </div>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-chip" aria-hidden="true"></i> Technologies
            </span>
            <div className="proj-card__tags">
              {project.technologies.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-brain" aria-hidden="true"></i> Engineering Challenges
            </span>
            <ul className="proj-card__challenges">
              {project.challenges.map((c, i) => (
                <li key={i}>
                  <i className="bx bx-chevron-right" aria-hidden="true"></i>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="proj-card__section">
            <span className="proj-card__section-label">
              <i className="bx bx-check-circle" aria-hidden="true"></i> Result
            </span>
            <p>{project.result}</p>
          </div>
        </div>
      )}

      <button
        className="proj-card__toggle"
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? `Collapse ${project.title}` : `Expand ${project.title}`}
      >
        {expanded ? (
          <>
            <i className="bx bx-chevron-up" aria-hidden="true"></i> Show Less
          </>
        ) : (
          <>
            <i className="bx bx-chevron-down" aria-hidden="true"></i> View Details
          </>
        )}
      </button>
    </article>
  );
};

const Projects = () => {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        <div className="projects__header">
          <p className="section-label">Work</p>
          <h2 className="section-heading" id="projects-heading">
            Projects That <span>Matter</span>
          </h2>
          <p className="section-sub">
            Real systems built for real purposes. Click any project to see the
            engineering story behind it.
          </p>
        </div>

        {featured && (
          <div className="projects__featured">
            <ProjectCard project={featured} featured={true} />
          </div>
        )}

        <div className="projects__grid">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
