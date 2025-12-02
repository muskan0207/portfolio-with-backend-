import React from "react";
import About from "./About";
import Services from "./Services";
import Skill from "./Skill";
import Projects from "./Projects";
import bitmoji from "../assets/images/bitmoji.jpg";
// import "../styles/style.css";
import "../styles/home.css"; 

const Home = () => {
  return (
    <div>
    <section className="home container-fluid py-6 ">
    <div className="row align-items-center">
      {/* Image Section */}
      <div className="col-md-6 text-center mb-4 mb-md-0">
        <div className="img-box">
          <img className="img img-fluid" src={bitmoji} alt="Muskan" />
        </div>
      </div>
  
      {/* Content Section */}
      <div className="col-md-6 text-center text-md-start">
        <div className="home-content">
          <h3 className="hi">Hi</h3>
          <h1 className="name" style={{fontSize:"25px"}}>
            I'm <span className="main" style={{fontSize:"25px"}}>Muskan</span>
            <br /> A Full-Stack Web Developer
          </h1>
          <p className="para" style={{fontSize:"15px"}}>
            Hi, I’m Muskan Gupta, a passionate web developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js).
          </p>
          <div className="btn-box d-flex justify-content-center justify-content-md-start gap-3">
            <button className="btn-1">Hire Me</button>
            <button className="btn-2">Experience</button>
          </div>
        </div>
      </div>
    </div>
  </section>
 

  <About />
  <Services />
  <Skill />
  <Projects />
   </div>
  );
};

export default Home;
