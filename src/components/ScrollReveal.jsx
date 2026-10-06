import { useEffect } from 'react';

const REVEAL_SELECTORS = [
  'main section:not(.hero_minimal_section) .section-tag',
  'main section:not(.hero_minimal_section) .section-title',
  'main section:not(.hero_minimal_section) .section-desc',
  'main section:not(.hero_minimal_section) .story_title',
  'main section:not(.hero_minimal_section) .story_lead',
  'main section:not(.hero_minimal_section) .cocktail_section_title',
  'main section:not(.hero_minimal_section) .cocktail_section_intro',
  'main section:not(.hero_minimal_section) .reservation_header',
  'main section:not(.hero_minimal_section) .location_header',
  'main section:not(.hero_minimal_section) .social_header'
];

function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = Array.from(document.querySelectorAll(REVEAL_SELECTORS.join(',')));

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('reveal_visible'));
      return;
    }

    revealItems.forEach((item, index) => {
      item.classList.add('reveal_on_scroll');
      item.style.setProperty('--reveal-delay', `${Math.min(index % 2, 1) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal_visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}

export default ScrollReveal;
