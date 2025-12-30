import React from "react";
import Slider from "./Slider";
import "../styles/projects.css";
import expandingCards from "../assets/images/expanding-Cards.png";
import Newsapp from "../assets/images/News-app.png";
import todoapp from "../assets/images/to-do-app.png";
import Tourapp from "../assets/images/Tour-app.png";

const Projects = () => {
  const projectData = [
    {
      img: expandingCards,
      title: "Expanding Cards",
      description: "An interactive UI feature that expands cards on hover with smooth animations and modern design.",
    },
    {
      img: Newsapp,
      title: "News App",
      description: "A real-time news application fetching the latest headlines with responsive design and clean UI.",
    },
    {
      img: todoapp,
      title: "To-Do App",
      description: "A comprehensive task management app with drag-and-drop functionality and local storage.",
    },
    {
      img: Tourapp,
      title: "Tour Booking App",
      description: "A travel booking platform with stunning UI, search functionality, and booking management.",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-description">
          Here are some of my best projects showcasing my skills in MERN Stack development and modern web technologies.
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <Slider />
      </div>
    </section>
  );
};

export default Projects;
