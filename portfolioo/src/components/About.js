import React from "react";
import "../styles/about.css";
import bitmoji from "../assets/images/bitmoji.jpg";

const Experience = () => {
  return (
    <section className="about container-fluid">
      <div className="row justify-content-center align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0 about-img">
          <img src={bitmoji} alt="Bitmoji" className="img-fluid" />
        </div>

        {/* Content Column */}
        <div className="col-12 col-md-6 about-content text-center text-md-start">
          <h2 className="heading" style={{fontSize:"25px"}}>
            About <span style={{fontSize:"25px"}}> Me</span>
          </h2>
          <h3 style={{fontSize:"25px"}}>
            Full-Stack <span style={{fontSize:"25px"}}>Developer</span>
          </h3>
          <p  style={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            magnam corporis aliquam quam hic, earum cumque molestias et laborum
            architecto ipsa eligendi voluptate distinctio. Sunt cumque deleniti
            voluptatem recusandae accusamus!
          </p>
          <button className="btn-3">
            <a
              href="path/to/your-resume.pdf"
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

export default Experience;
