import '../css/Footer.css';
import logo from '../assets/picture/mayree_logo.png';
import { RESTAURANT_INFO } from '../data/menuData';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer className="footer_root">
      <div className="container">
        <div className="footer_minimal_grid">
          {/* Brand */}
          <div className="footer_brand_block">
            <img src={logo} alt="MayRee" className="footer_minimal_logo" />
            <p className="footer_tagline_text">
              Authentic Southern Thai Kitchen &amp; Bespoke Cocktail Bar.
            </p>
            <span className="footer_michelin_note">Michelin Guide Selected &bull; East Village NYC</span>

            {/* Social Links */}
            <div className="footer_social_row">
              <a 
                href={RESTAURANT_INFO.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="footer_social_btn"
                title="Follow @mayreenyc on Instagram"
              >
                <FaInstagram /> Instagram
              </a>
              <a 
                href={RESTAURANT_INFO.tiktok} 
                target="_blank" 
                rel="noreferrer" 
                className="footer_social_btn"
                title="Watch @mayreenyc on TikTok"
              >
                <FaTiktok /> TikTok
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer_links_block">
            <span className="footer_heading_label">Navigation</span>
            <div className="footer_nav_links">
              <button onClick={scrollToTop}>Home</button>
              <button onClick={() => scrollTo('story')}>Michelin Story</button>
              <button onClick={() => scrollTo('menu')}>Menu</button>
              <button onClick={() => scrollTo('cocktails')}>Cocktails</button>
              <button onClick={() => scrollTo('reservations')}>Reservations</button>
              <button onClick={() => scrollTo('social')}>Instagram &amp; TikTok</button>
              <button onClick={() => scrollTo('location')}>Hours &amp; Location</button>
            </div>
          </div>

          {/* Contact */}
          <div className="footer_contact_block">
            <span className="footer_heading_label">Contact &bull; East Village</span>
            <p className="footer_contact_val">{RESTAURANT_INFO.address}</p>
            <a href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`} className="footer_contact_link">
              {RESTAURANT_INFO.phone}
            </a>
            <a href={`mailto:${RESTAURANT_INFO.email}`} className="footer_contact_link">
              {RESTAURANT_INFO.email}
            </a>
            <p className="footer_dinner_hours">Lunch &amp; Dinner Daily &bull; Walk-Ins Welcomed</p>
          </div>
        </div>

        {/* Allergy note */}
        <p className="footer_allergy_disclaimer">
          *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please notify us of any allergies prior to dining.
        </p>

        {/* Bottom bar */}
        <div className="footer_bottom_minimal">
          <span>&copy; {new Date().getFullYear()} MayRee NYC. All rights reserved.</span>
          <button className="footer_back_top" onClick={scrollToTop}>
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
