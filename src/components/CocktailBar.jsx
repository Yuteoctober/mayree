import '../css/CocktailBar.css';
import cocktailHeroImg from '../assets/picture/mayree_craft_cocktail.jpg';

function CocktailBar({ onOpenReservation }) {
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

  const cocktails = [
    {
      name: 'Siam Dusk',
      thai: 'สยามดัสก์',
      price: 19,
      notes: 'Butterfly pea gin, charred lemongrass cordial, makrut lime, sparkling wine, 24k edible gold.',
    },
    {
      name: 'Smoked Bird’s Eye Old Fashioned',
      thai: 'โอลด์แฟชั่นพริกขี้หนู',
      price: 20,
      notes: 'Thai chili infused rye whiskey, smoked palm sugar, aromatic bitters, flamed orange oil.',
    },
    {
      name: 'Bangkok Nights Clarified Punch',
      thai: 'มิลค์พันช์ใบเตย',
      price: 19,
      notes: 'Aged Mekhong rum, roasted pandan cordial, pineapple, clarified with coconut milk.',
    },
    {
      name: 'Phuket Breeze',
      thai: 'ภูเก็ตบรีซ',
      price: 18,
      notes: 'Blanco tequila, passionfruit puree, sweet Thai basil, agave, roasted chili-lime salt rim.',
    },
    {
      name: 'Golden Lotus (Zero-Proof)',
      thai: 'บัวทอง ไร้แอลกอฮอล์',
      price: 14,
      notes: 'Seedlip Grove botanicals, coconut water, butterfly pea tea, lemongrass, kaffir lime foam.',
    }
  ];

  return (
    <section className="cocktail_section" id="cocktails">
      <div className="container">
        <div className="cocktail_editorial_grid">
          {/* Visual Column */}
          <div className="cocktail_visual_col">
            <div className="cocktail_photo_frame">
              <img 
                src={cocktailHeroImg} 
                alt="MayRee Bespoke Cocktails" 
                className="cocktail_feature_photo" 
              />
            </div>
            <p className="cocktail_caption">
              Siam Dusk &bull; Butterfly pea gin, charred lemongrass, and French sparkling wine.
            </p>
          </div>

          {/* List Column */}
          <div className="cocktail_info_col">
            <span className="section-tag">East Village Cocktail Program</span>
            <h2 className="cocktail_section_title">
              Botanical Libations &amp; Nocturnal Vibrance
            </h2>
            <p className="cocktail_section_intro">
              Craft cocktails designed to echo the herbal profiles and aromatic spices of Southern Thailand.
            </p>

            <div className="cocktails_minimal_list">
              {cocktails.map((c, i) => (
                <div key={i} className="cocktail_minimal_row">
                  <div className="cocktail_minimal_header">
                    <div>
                      <h4 className="cocktail_minimal_name">{c.name}</h4>
                      <span className="cocktail_minimal_thai">{c.thai}</span>
                    </div>
                    <span className="cocktail_minimal_price">${c.price}</span>
                  </div>
                  <p className="cocktail_minimal_notes">{c.notes}</p>
                </div>
              ))}
            </div>

            <div className="cocktail_minimal_footer">
              <div className="happy_hour_minimal">
                <span>Happy Hour &bull; Daily 5:00 PM – 7:00 PM &bull; $12 Cocktails &bull; $9 Selected Wines</span>
              </div>
              <button 
                className="cocktail_reserve_link" 
                onClick={() => {
                  if (onOpenReservation) onOpenReservation();
                  else scrollTo('reservations');
                }}
              >
                Reserve Bar Seating &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CocktailBar;
