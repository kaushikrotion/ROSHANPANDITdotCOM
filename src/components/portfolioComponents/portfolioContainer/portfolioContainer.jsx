import React, { useState, useEffect } from 'react';
import ScrollingImage from '../scrollingphoto/scrollingPhoto.jsx';
import './PortfolioContainer.scss';
import { useNavigate } from 'react-router-dom';

const PortfolioContainer = ({ title, images, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-scroll logic
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3000); // Adjust the scroll interval as needed
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleClick = () => {
    navigate(path);  // Navigate to the respective portfolio page
  };
  // Handle manual scrolling with indicators
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  // Calculate the actual index to show as active in indicators
  const displayIndex = currentIndex % images.length;

  return (
    <div className="portfolio-container">
      <div className="content-title" onClick={handleClick}>{title}</div>
      <div
        className="content-images"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ScrollingImage
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex} // Pass down the setCurrentIndex function
          isHovered={isHovered}
        />

        <div
          className="arrow left-arrow"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length : prevIndex - 1
            )
          }
        />
        <div
          className="arrow right-arrow"
          onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
        />
      </div>

      <div className="image-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`indicator ${index === displayIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioContainer;
