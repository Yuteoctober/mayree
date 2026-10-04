import { useState, useEffect } from 'react';
import '../css/Navbar.css';
import logo from '../assets/picture/mayree_logo.png';
import { RESTAURANT_INFO } from '../data/menuData';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

function Navbar({ onOpenReservation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleReserveClick = () => {
    setMobileMenuOpen(false);
    if (onOpenReservation) {
      onOpenReservation();
    } else {
      scrollTo('reservations');
    }
  };

  return (
    <>
      <header className={`nav_container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav_content">
          {/* Logo & City Stamp */}
          <div className="nav_brand_group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="MayRee" className="nav_logo" />
            <div className="nav_brand_meta">
              <span className="nav_brand_thai">เมรี</span>
              <span className="nav_brand_city">East Village NYC</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="navbar_links" aria-label="Main navigation">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button onClick={() => scrollTo('story')}>Story</button>
            <button onClick={() => scrollTo('menu')}>Menu</button>
            <button onClick={() => scrollTo('cocktails')}>Cocktails</button>
            <button onClick={handleReserveClick}>Reservations</button>
            <button onClick={() => scrollTo('social')}>Social</button>
            <button onClick={() => scrollTo('location')}>Location</button>
          </nav>

          {/* Header Action Buttons */}
          <div className="nav_actions">
            {/* Social Icons */}
            <div className="nav_social_links">
              <a 
                href={RESTAURANT_INFO.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="nav_social_icon"
                title="Follow MayRee on Instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href={RESTAURANT_INFO.tiktok} 
                target="_blank" 
                rel="noreferrer" 
                className="nav_social_icon"
                title="Watch MayRee on TikTok"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>

            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="nav_phone_link"
              title="Call MayRee directly"
            >
              {RESTAURANT_INFO.phone}
            </a>

            <button
              className="nav_reserve_btn"
              onClick={handleReserveClick}
            >
              Reserve
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="ham_toggle_btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile_backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile_drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile_drawer_header">
              <div className="mobile_drawer_brand">
                <img src={logo} alt="MayRee" className="mobile_drawer_logo" />
                <span className="mobile_drawer_thai">เมรี &bull; East Village</span>
              </div>
              <button 
                className="mobile_close_btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoClose />
              </button>
            </div>

            <nav className="mobile_nav_links">
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}>
                Home
              </button>
              <button onClick={() => scrollTo('story')}>
                Story &amp; Michelin Heritage
              </button>
              <button onClick={() => scrollTo('menu')}>
                Southern Thai Menu
              </button>
              <button onClick={() => scrollTo('cocktails')}>
                Bespoke Cocktail Bar
              </button>
              <button onClick={handleReserveClick}>
                Table Reservations
              </button>
              <button onClick={() => scrollTo('social')}>
                Instagram &amp; TikTok
              </button>
              <button onClick={() => scrollTo('location')}>
                Location &amp; Hours
              </button>
            </nav>

            <div className="mobile_drawer_actions">
              <button
                className="btn-gold mobile_action_btn"
                onClick={handleReserveClick}
              >
                Reserve Table
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="btn-outline-gold mobile_action_btn"
              >
                Call {RESTAURANT_INFO.phone}
              </a>

              {/* Social links in mobile drawer */}
              <div className="mobile_drawer_socials">
                <a 
                  href={RESTAURANT_INFO.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mobile_social_chip ig"
                >
                  <FaInstagram /> Instagram
                </a>
                <a 
                  href={RESTAURANT_INFO.tiktok} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mobile_social_chip tt"
                >
                  <FaTiktok /> TikTok
                </a>
              </div>
            </div>

            <div className="mobile_drawer_footer">
              <p>{RESTAURANT_INFO.address}</p>
              <p>Lunch &amp; Dinner Daily &bull; Walk-Ins Welcomed</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;