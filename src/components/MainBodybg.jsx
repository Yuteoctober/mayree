import { useState, useEffect } from 'react';
import '../css/MainBody.css';

import mayreeBg from '../assets/picture/mayree_bg.png';
import mayreeBg2 from '../assets/picture/mayree_bg2.png';
import mayreeBg3 from '../assets/picture/mayree_bg3.png';
import mayreeBg4 from '../assets/picture/mayree_bg4.png';

function MainBodybg() {
  const images = [mayreeBg, mayreeBg2, mayreeBg3, mayreeBg4];
  const texts = [
    "Welcome to Mayree, Experience the best of Thai cuisine.",
    "Discover the flavors of Thailand with our authentic recipes.",
    "Savor the taste of tradition with every bite.",
    "Indulge in the rich culture of Thailand."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="main_body_container">

      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Mayree Background ${currentIndex + 1}`}
      />

      <div className="body_text">
        <h1>{texts[currentIndex]}</h1>
      </div>

      {/* Left Arrow */}
      <button
        className="slider_arrow slider_arrow_left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        className="slider_arrow slider_arrow_right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Slider Dots */}
      <div className="slider_dots">
        {images.map((image, index) => (
          <button
            key={image}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
}

export default MainBodybg;