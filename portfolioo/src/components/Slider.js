import React, { useState } from "react";
import "../styles/Slide.css"; 
import expandingCards from "../assets/images/expanding-Cards.png";
import Newsapp from "../assets/images/News-app.png";
import todoapp from "../assets/images/to-do-app.png";
import Tourapp from "../assets/images/Tour-app.png";

const Slider = () => {
  const images = [expandingCards, Newsapp, todoapp, Tourapp];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-slide">
      <div className="slider-container">
        <div className="slider">
          <img 
            src={images[currentIndex]} 
            alt={`Project ${currentIndex + 1}`} 
            className="slide"
            draggable={false}
          />
        </div>
        <button className="prev" onClick={prevSlide}>‹</button>
        <button className="next" onClick={nextSlide}>›</button>
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
