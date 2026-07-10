import React, { useState } from 'react';
import '../styles/services.css';

const serviceData = [
  {
    title: "Full-Stack Web Development",
    description: "Complete MERN stack development with modern, responsive designs and scalable architecture.",
    icon: "🚀",
    backText: "Expert in React.js, Node.js, Express.js, MongoDB, and modern web technologies for end-to-end solutions."
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions with NestJS, AWS integration, and real-time features.",
    icon: "⚡",
    backText: "Specialized in building scalable APIs, database architecture, and cloud deployment solutions."
  },
  {
    title: "Frontend Development",
    description: "Interactive user interfaces with React.js, responsive design, and optimal user experience.",
    icon: "🎨",
    backText: "Creating modern, accessible, and performance-optimized web applications with cutting-edge UI/UX."
  },
  {
    title: "Database Design",
    description: "Efficient database solutions with MongoDB, data modeling, and performance optimization.",
    icon: "🗄️",
    backText: "Expert in NoSQL databases, data architecture, and implementing secure data management systems."
  },
  {
    title: "Cloud Integration",
    description: "AWS cloud services integration, deployment automation, and scalable infrastructure setup.",
    icon: "☁️",
    backText: "Proficient in AWS services, DevOps practices, and building cloud-native applications."
  },
  {
    title: "Technical Leadership",
    description: "Team leadership, project management, and mentoring in software development best practices.",
    icon: "👥",
    backText: "Experienced in leading development teams, code reviews, and implementing agile methodologies."
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
