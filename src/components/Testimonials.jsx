import { useState, useEffect } from 'react';
import '../css/Testimonials.css';
import { REVIEWS } from '../data/menuData';

function Testimonials() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials_section" id="reviews">
      <div className="container">
        <div className="minimal_quote_wrapper">
          <span className="section-tag text-center" style={{ display: 'block' }}>
            Critical Acclaim
          </span>

          <blockquote className="minimal_quote_text">
            &ldquo;{REVIEWS[activeReview].quote}&rdquo;
          </blockquote>

          <div className="minimal_quote_author">
            <cite className="quote_author_name">{REVIEWS[activeReview].source}</cite>
            <span className="quote_author_role">{REVIEWS[activeReview].author}</span>
          </div>

          {/* Minimalist Indicators */}
          <div className="quote_dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className={`quote_dot ${i === activeReview ? 'active' : ''}`}
                onClick={() => setActiveReview(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Minimal Publication Names */}
        <div className="press_names_strip">
          <span>The Michelin Guide</span>
          <span>The New York Times</span>
          <span>Eater New York</span>
          <span>The Infatuation</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
