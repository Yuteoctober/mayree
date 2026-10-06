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
      name: 'Matesara',
      thai: 'เมธัสรา',
      price: 17,
      notes: 'Bourbon infused bael, honey syrup, lime juice, topped red wine.',
    },
    {
      name: 'Malai',
      thai: 'มาลัย',
      price: 19,
      notes: 'Malibu coconut rum, homemade coconut mixed, pineapple juice, topped Maekhong rum and coconut ice cream.',
    },
    {
      name: 'Morrakot',
      thai: 'มรกต',
      price: 17,
      notes: 'Sake, vodka infused lemongrass, fresh galanga, Kaffir lime leaves, fresh lemongrass, lime juice, coconut milk, palm sugar syrup.',
    },
    {
      name: 'Benjawan',
      thai: 'เบญจวรรณ',
      price: 17,
      notes: 'Mezcal, Ancho Reyes chili liqueur, lime juice, agave syrup, yuzu purée.',
    },
    {
      name: 'Manee',
      thai: 'มณี',
      price: 17,
      notes: 'Gin infused pandan leaf, St. Germain, fresh cucumber, fresh mint, lime juice.',
    },
    {
      name: 'Malee',
      thai: 'มาลี',
      price: 17,
      notes: 'Tequila infused hibiscus, Ancho Reyes chili liqueur, lime juice, agave syrup, fresh cilantro, ginger, lemongrass.',
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
              Malai &bull; Coconut rum, pineapple, Maekhong rum, and coconut ice cream.
            </p>
          </div>

          {/* List Column */}
          <div className="cocktail_info_col">
            <span className="section-tag">East Village Cocktail Program</span>
            <h2 className="cocktail_section_title">
              Botanical Libations &amp; Nocturnal Vibrance
            </h2>
            <p className="cocktail_section_intro">
              Cocktails named after the Twelve Sisters folktale, curated by Sek Saraboon to echo Thai herbal botanicals.
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
                <span>Happy Hour &bull; Mon–Wed: All Day &bull; Thu–Fri: 12 PM – 8 PM &bull; Sat–Sun: 12 PM – 5 PM &bull; $12 Cocktails &bull; $8 Wines &bull; $5 Singha</span>
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
