import '../css/MichelinStory.css';
import micelAward from '../assets/picture/micel2.png';
import crabCurryPhoto from '../assets/picture/southern_crab_curry.jpg';

function MichelinStory() {
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
    <section className="story_section" id="story">
      <div className="container">
        <div className="story_editorial_grid">
          {/* Visual Column */}
          <div className="story_visual_col">
            <div className="story_main_img_wrap">
              <img 
                src={crabCurryPhoto} 
                alt="Southern Thai Culinary Craft" 
                className="story_main_photo" 
              />
              <div className="story_michelin_floating_badge">
                <img src={micelAward} alt="Michelin Guide" className="story_micel_img" />
              </div>
            </div>
            <p className="story_img_caption">
              Gaeng Pu Bai Cha Plu &bull; Hand-ground yellow turmeric, betel leaves, and lump crab.
            </p>
          </div>

          {/* Editorial Text Column */}
          <div className="story_narrative_col">
            <span className="section-tag">Culinary Heritage &bull; East Village</span>
            <h2 className="story_title">
              Authentic Southern Thai, Crafted Without Compromise.
            </h2>

            <p className="story_lead">
              Rooted in the coastal provinces of Southern Thailand and brought to life in Manhattan’s East Village, MayRee celebrates a culinary tradition renowned for its fiery depth and unapologetic soul.
            </p>

            <p className="story_body">
              Unlike the sweeter curries of Central Bangkok, Southern Thai cooking is defined by freshly pounded turmeric root, wild betel leaves (Bai Cha Plu), makrut lime, and hand-pressed coconut cream. Every morning, our kitchen pulverizes fresh ingredients in heavy stone mortars to preserve the essential aromatics that define authentic Southern Siam cuisine.
            </p>

            <blockquote className="story_inspector_quote">
              &ldquo;MayRee Thai Kitchen delivers the genuine pulse of Southern Thailand to East Village diners. The curries are rich with hand-pressed coconut cream and fiery depth, complemented by a cocktail program that stands shoulder to shoulder with the food.&rdquo;
              <cite>&mdash; The Michelin Guide</cite>
            </blockquote>

            <div className="story_links_row">
              <button className="story_text_link" onClick={() => scrollTo('menu')}>
                Explore The Menu &rarr;
              </button>
              <button className="story_text_link" onClick={() => scrollTo('reservations')}>
                Inquire for Table &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MichelinStory;
