import { useState, useEffect, useRef } from 'react';
import '../css/Hero.css';

import mayreeBg from '../assets/picture/mayree_bg.png';
import mayreeBg2 from '../assets/picture/mayree_bg2.png';
import mayreeBg3 from '../assets/picture/mayree_bg3.png';
import mayreeBg4 from '../assets/picture/mayree_bg4.png';

const SLIDE_DURATION = 7000;

function Hero({ onOpenReservation }) {
  const slides = [
    {
      image: mayreeBg,
      quote: "Hand-pounded curries, fresh coastal seafood, and unapologetic Southern Thai heat.",
    },
    {
      image: mayreeBg2,
      quote: "Authentic Siam spices pulverized daily in heavy granite mortars.",
    },
    {
      image: mayreeBg3,
      quote: "An intimate cocktail sanctuary inspired by the botanical pulse of Bangkok.",
    },
    {
      image: mayreeBg4,
      quote: "Recognized by the Michelin Guide for uncompromised culinary tradition.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const handleSelectSlide = (index) => {
    setCurrentIndex(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero_minimal_section" id="hero">
      {/* Background Slides: Clean, full-bleed, cinematic */}
      <div className="hero_bg_layer">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero_bg_slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero_scrim" />
      </div>

      {/* Pure Minimalist Hero Body */}
      <div className="hero_minimal_content">
        {/* Subtle Thai Crest & Michelin Seal */}
        <div className="hero_eyebrow">
          <span className="hero_thai_crest">เมรี</span>
          <span className="hero_eyebrow_text">Michelin Guide Selected &bull; East Village</span>
        </div>

        {/* Brand Title */}
        <h1 className="hero_minimal_title">
          MAYREE
        </h1>

        {/* Subtitle */}
        <p className="hero_minimal_sub">
          Southern Thai Kitchen &amp; Bespoke Bar
        </p>

        {/* Floating Hushed Quote */}
        <p className="hero_minimal_quote">
          &ldquo;{slides[currentIndex].quote}&rdquo;
        </p>

        {/* Minimal Actions: Pure Understated Luxury */}
        <div className="hero_minimal_actions">
          <button 
            className="hero_btn_reserve"
            onClick={onOpenReservation || (() => scrollTo('reservations'))}
          >
            Reserve Table
          </button>
          <button 
            className="hero_btn_menu"
            onClick={() => scrollTo('menu')}
          >
            View Menu &rarr;
          </button>
        </div>
      </div>

      {/* Whispering Footer: Minimal indicator lines & Scroll cue */}
      <div className="hero_minimal_footer">
        <div className="hero_slide_indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero_indicator_line ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleSelectSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="hero_scroll_hint" 
          onClick={() => scrollTo('story')}
          aria-label="Scroll to story"
        >
          <span>Scroll</span>
          <span className="hero_scroll_line" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
