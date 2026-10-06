import '../css/MichelinStory.css';
import michelinGuideLogo from '../assets/picture/michelin_guide_logo.svg';
import mayree from '../assets/picture/mayree.jpg';

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
                src={mayree} 
                alt="Southern Thai Culinary Craft" 
                className="story_main_photo" 
              />
              <div className="story_michelin_floating_badge">
                <span className="story_michelin_mark">
                  <img src={michelinGuideLogo} alt="Michelin Guide" className="story_michelin_logo" />
                </span>
                <span className="story_michelin_copy">
                  <span>Michelin Guide</span>
                  <strong>Selected</strong>
                </span>
              </div>
            </div>
            <p className="story_img_caption">
              Mayree &bull; character inspired by the Thai folk tale Nang Sip Song (นางสิบสอง / The Twelve Sisters)
            </p>
          </div>

          {/* Editorial Text Column */}
          <div className="story_narrative_col">
            <span className="section-tag">Culinary Heritage &bull; East Village</span>
            <h2 className="story_title">
              Bold Southern Thai, Inspired by the Twelve Sisters.
            </h2>

            <p className="story_lead">
              Inspired by the Thai folktale &ldquo;Twelve Sisters,&rdquo; MayRee brings the bold, fiery flavors of Southern Thailand to NYC&rsquo;s East Village in a cozy, charming space.
            </p>

            <p className="story_body">
              The compact menu showcases vibrant dishes like spicy Kua Kling pork curry and delicate Park Mor rice crepe dumplings, alongside classics like Pad Thai and Tom Yum. Bespoke cocktails named for the folktale&rsquo;s sisters complete the experience.
            </p>

            <blockquote className="story_inspector_quote">
              &ldquo;Chef/Owner Orawan Sawangphol tells us a story of southern Thai cooking at Mayree, named for a character from the Thai folktale, Twelve Sisters. Spice levels are far from timid, and all of the dishes showcase great personality. Sek Saraboon runs the serious cocktail program, while all of the creative sips are named for Mayree&rsquo;s sisters.&rdquo;
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
