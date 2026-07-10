import React from "react";
import "../styles/skill.css"; // Import your CSS file for styling
const Skill = () => {
  const technicalSkills = [
    { name: "HTML5", icon: "bxl-html5" },
    { name: "CSS3", icon: "bxl-css3" },
    { name: "JavaScript", icon: "bxl-javascript" },
    { name: "React", icon: "bxl-react" },
    { name: "Node.js", icon: "bxl-nodejs" },
    { name: "Express.js", icon: "bxl-nodejs" },
    { name: "NestJS", icon: "bxl-nodejs" },
    { name: "MongoDB", icon: "bxl-mongodb" },
    { name: "Git", icon: "bxl-git" },
    { name: "GitHub", icon: "bxl-github" },
    { name: "AWS", icon: "bxl-aws" },
    { name: "Visual Studio Code", icon: "bxl-visual-studio" },
    { name: "WordPress", icon: "bxl-wordpress" },
    { name: "Shopify", icon: "bx-store" },
  ];

  const softSkills = [
    "Leadership",
    "Management", 
    "Supervising",
    "Teamwork",
    "Communication",
    "Problem Solving",
  ];

  return (
    <section className="skill-section">
      <h2 className="section-title" style={{fontSize:"25px"}}>
        My <span style={{fontSize:"25px"}}>Skills</span>
      </h2>

      {/* Technical Skills */}
      <div className="technical-skills">
        <h3 style={{fontSize:"25px"}}>Technical Skills</h3>
        <div className="skill-grid">
          {technicalSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={`bx ${skill.icon}`}></i>
              <span style={{fontSize:"12px"}}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="soft-skills">
        <h3>Soft Skills</h3>
        <div className="soft-skill-grid">
          {softSkills.map((skill, index) => (
            <div className="soft-skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
