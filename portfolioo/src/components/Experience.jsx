import React from "react";
import "../styles/experience.css";

const Experience = () => {
  const education = {
    institution: "AHMEDABAD INSTITUTE OF TECHNOLOGY",
    degree: "Bachelor of Engineering",
    cpi: "8.46",
    location: "Gujarat, Ahmedabad",
    duration: "2022-2026"
  };

  const experience = {
    company: "Remotebricks Pvt Ltd",
    position: "Internship",
    duration: "6 months"
  };

  const certifications = [
    {
      name: "MERN STACK for Web Developers",
      provider: "KICT EDUCATION PVT LTD.",
      date: "April 2024"
    },
    {
      name: "AI Aware and AI Appreciate",
      provider: "Intel India",
      date: "Dec 2024"
    },
    {
      name: "Leadership Course",
      provider: "IIM Ahmedabad",
      date: "Feb 2024"
    },
    {
      name: "Git and GitHub Workshop",
      provider: "AIT",
      date: "Oct 2023"
    },
    {
      name: "Web Development Fundamentals",
      provider: "IBM SkillsBuild",
      date: "Dec 2024"
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title" style={{fontSize:"25px"}}>
        Experience & <span style={{fontSize:"25px"}}>Education</span>
      </h2>

      {/* Education */}
      <div className="education-card">
        <h3 style={{fontSize:"20px"}}>Education</h3>
        <div className="education-item">
          <h4>{education.institution}</h4>
          <p>{education.degree} | CPI: {education.cpi}</p>
          <p>{education.location} | {education.duration}</p>
        </div>
      </div>

      {/* Experience */}
      <div className="experience-card">
        <h3 style={{fontSize:"20px"}}>Experience</h3>
        <div className="experience-item">
          <h4>{experience.company}</h4>
          <p>{experience.position} ({experience.duration})</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="certifications-card">
        <h3 style={{fontSize:"20px"}}>Certifications</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <h5>{cert.name}</h5>
              <p>{cert.provider}</p>
              <span className="cert-date">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;