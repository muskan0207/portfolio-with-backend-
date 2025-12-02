import React, { useState } from 'react';
import '../styles/services.css';

const serviceData = [
  {
    title: "Web Development",
    description: "We create responsive and interactive websites tailored to your business needs.",
    icon: "💻",
    backText: "We build websites using modern tools like MERN Stack, WordPress & more."
  },
  {
    title: "App Development",
    description: "Our team designs and develops cutting-edge mobile apps for both iOS and Android.",
    icon: "📱",
    backText: "We make fast, functional, and beautiful mobile apps just for you."
  },
  {
    title: "UI/UX Design",
    description: "We provide intuitive UI/UX design services that improve user experience and engagement.",
    icon: "🎨",
    backText: "We design modern interfaces with engaging user experiences."
  }
];

const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="services-section">
      <div className="container-services">
      <h2 className="service-title" style={{fontSize:"25px"}}>
  Our <span className="gold-text" style={{fontSize:"25px"}}>Services</span>
</h2>

        <div className="service-cards-container">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="emoji">{service.icon}</div>
                  <h3 className="service-card-title" style={{fontSize:"20px"}}>{service.title}</h3>
                  <p className="service-card-description" style={{fontSize:"15px"}}>{service.description}</p>
                </div>
                <div className="flip-card-back">
                  <p className="service-card-description">{service.backText}</p>
                  <button className="service-card-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
