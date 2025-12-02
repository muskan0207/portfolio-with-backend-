import React from "react";
import Slider from "./Slider";
import "../styles/projects.css"; // Ensure this file contains modern styles
import expandingCards from "../assets/images/expanding-Cards.png";
import Newsapp from "../assets/images/News-app.png";
import todoapp from "../assets/images/to-do-app.png";
import Tourapp from "../assets/images/Tour-app.png";

const Projects = () => {
  const projectData = [
    {
      img: expandingCards,
      title: "Expanding Cards",
      description: "An interactive UI feature that expands cards on hover.",
    },
    {
      img: Newsapp,
      title: "News App",
      description: "A real-time news app fetching the latest headlines.",
    },
    {
      img: todoapp,
      title: "To-Do App",
      description: "A task management app with drag-and-drop functionality.",
    },
    {
      img: Tourapp,
      title: "Tour Booking App",
      description: "A travel booking platform with stunning UI.",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title" style ={{fontSize:"25px"}}>
          My <span style ={{fontSize:"25px"}}>Projects</span>
        </h2>
        <p className="section-description" style ={{fontSize:"15px"}}>
          Here are some of my best projects showcasing my skills in **MERN Stack** development.
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-btn">View Details</a>
              </div>
            </div>
          ))}
        </div>

        {/* Slider for extra projects */}
        <Slider />
      </div>
    </section>
  );
};

export default Projects;
