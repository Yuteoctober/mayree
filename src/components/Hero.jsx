import { useState, useEffect, useRef } from 'react';
import '../css/Hero.css';

import mayreeBg from '../assets/picture/mayree_bg.png';
import mayreeBg2 from '../assets/picture/dishes/park_mor.jpg';
import mayreeBg3 from '../assets/picture/dishes/tom_kha_gai.jpg';
import mayreeBg4 from '../assets/picture/dishes/grilled_shrimp_mango_salad.jpg';

const SLIDE_DURATION = 7000;

function Hero({ onOpenReservation }) {
  const slides = [
    {
      image: mayreeBg,
      label: "Southern Thai",
      quote: "Authentic Southern Thai and bespoke cocktails in the heart of East Village NYC.",
    },
    {
      image: mayreeBg2,
      label: "Bold Flavor",
      quote: "Traditional recipes, fresh high-quality ingredients, and bold, spicy dishes.",
    },
    {
      image: mayreeBg3,
      label: "Twelve Sisters",
      quote: "Inspired by the Thai folktale Twelve Sisters, with cocktails named for MayRee’s sisters.",
    },
    {
      image: mayreeBg4,
      label: "Guide Selected",
      quote: "Recognized by the Michelin Guide for Southern Thai cooking with great personality.",
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

      {/* Editorial Hero Body */}
      <div className="hero_minimal_content">
        <div className="hero_award_pill">
          <span className="hero_award_dot" />
          <span>Michelin Guide Selected</span>
          <span className="hero_award_divider" />
          <span>East Village</span>
        </div>

        <div className="hero_title_group">
          <span className="hero_thai_crest">เมรี</span>
          <h1 className="hero_minimal_title">MAYREE</h1>
        </div>

        <div className="hero_subline">
          <span />
          <p>Authentic Southern Thai &amp; Bespoke Cocktails</p>
        </div>

        <p className="hero_minimal_quote">
          {slides[currentIndex].quote}
        </p>

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

      <div className="hero_chapter_card" aria-live="polite">
        <span className="hero_chapter_count">
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <strong>{slides[currentIndex].label}</strong>
        <span className="hero_chapter_line" />
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
