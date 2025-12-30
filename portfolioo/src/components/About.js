import React from "react";
import "../styles/about.css";
import bitmoji from "../assets/images/bitmoji.jpg";

const About = () => {
  return (
    <section className="about container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0 about-img">
          <img src={bitmoji} alt="Bitmoji" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 about-content text-center text-md-start">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>
            Full-Stack <span>Developer</span>
          </h3>
          <p>
            I'm Muskan Gupta, a passionate Full-Stack Developer with expertise in MERN stack development. 
            Currently pursuing Bachelor of Engineering from Ahmedabad Institute of Technology with a CPI of 8.46. 
            I have hands-on experience in building scalable web applications, leading development teams, and 
            implementing modern technologies like React.js, Node.js, and MongoDB. I'm skilled in both frontend 
            and backend development with a strong focus on creating user-friendly, responsive applications.
          </p>
          <button className="btn-3">
            <a
              href="/Muskan_Gupta_Resume.pdf"
              download="Muskan_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
