import React, { useState } from "react";
import "./RecruiterSnapshot.css";

const SNAPSHOT_ITEMS = [
  { icon: "bx-user", label: "Role", value: "Full-Stack / Backend-Focused Developer" },
  { icon: "bx-map-pin", label: "Location", value: "Ahmedabad, India" },
  { icon: "bx-briefcase", label: "Current", value: "RemoteBricks Pvt Ltd · Full-Time" },
  { icon: "bx-code-block", label: "Primary Stack", value: "React · Node.js · NestJS · PostgreSQL · AWS" },
  { icon: "bx-buildings", label: "Education", value: "B.E. · Ahmedabad Institute of Technology · 2026" },
  { icon: "bx-check-shield", label: "Focus Areas", value: "Backend Systems · APIs · Cloud · Security" },
];

const ResumeModal = ({ onClose }) => (
  <div
    className="resume-modal-overlay"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-label="Resume preview"
  >
    <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
      <div className="resume-modal__header">
        <span className="resume-modal__title">
          <i className="bx bx-file" aria-hidden="true"></i>
          Muskan Gupta — Resume
        </span>
        <div className="resume-modal__actions">
          <a
            href="https://drive.google.com/uc?export=download&id=1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary resume-modal__download"
            aria-label="Download Resume"
          >
            <i className="bx bx-download" aria-hidden="true"></i>
            Download
          </a>
          <button
            className="resume-modal__close"
            onClick={onClose}
            aria-label="Close resume preview"
          >
            <i className="bx bx-x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="resume-modal__body">
        <iframe
          src="https://drive.google.com/file/d/1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ/preview"
          title="Muskan Gupta Resume"
          className="resume-modal__iframe"
          aria-label="Resume PDF viewer"
          allow="autoplay"
        />
      </div>
    </div>
  </div>
);

const RecruiterSnapshot = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section className="snapshot" id="snapshot" aria-labelledby="snapshot-heading">
        <div className="section-container">
          <div className="snapshot__inner">
            <div className="snapshot__header">
              <div className="snapshot__badge">
                <i className="bx bx-user-check" aria-hidden="true"></i>
                Recruiter Snapshot
              </div>
              <h2 className="snapshot__title" id="snapshot-heading">
                Everything you need to know in{" "}
                <span className="gradient-text">15 seconds</span>
              </h2>
              <p className="snapshot__sub">
                Full-Stack Developer with backend focus, production experience, and
                a track record of building real systems.
              </p>
            </div>

            <div className="snapshot__grid">
              {SNAPSHOT_ITEMS.map((item) => (
                <div key={item.label} className="snapshot__item">
                  <div className="snapshot__item-icon">
                    <i className={`bx ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="snapshot__item-text">
                    <span className="snapshot__item-label">{item.label}</span>
                    <span className="snapshot__item-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="snapshot__actions">
              <button
                className="btn-primary"
                onClick={() => setShowResume(true)}
                aria-label="View Resume"
              >
                <i className="bx bx-show" aria-hidden="true"></i>
                View Resume
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Download Resume PDF"
              >
                <i className="bx bx-download" aria-hidden="true"></i>
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-gupta-755473247"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="View LinkedIn profile"
              >
                <i className="bx bxl-linkedin" aria-hidden="true"></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default RecruiterSnapshot;
