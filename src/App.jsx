import { useState, useEffect } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MichelinStory from './components/MichelinStory';
import MenuSection from './components/MenuSection';
import CocktailBar from './components/CocktailBar';
import ReservationSection from './components/ReservationSection';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import SocialMediaSection from './components/SocialMediaSection';

// Icons
import { FaPhone, FaCalendarCheck } from 'react-icons/fa6';
import { RESTAURANT_INFO } from './data/menuData';

function App() {
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Show mobile floating action bar after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBar(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openReservation = () => {
    setIsReservationOpen(true);
  };

  const closeReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation Bar */}
      <Navbar onOpenReservation={openReservation} />

      {/* Main Landing Page Content */}
      <main>
        {/* 1. Hero Section with Interactive Chapters & Fast-Reserve Bar */}
        <Hero onOpenReservation={openReservation} />

        {/* 2. Michelin Story & Southern Thai Heritage */}
        <MichelinStory />

        {/* 3. Interactive Full Menu Showcase */}
        <MenuSection onOpenReservation={openReservation} />

        {/* 4. Bespoke Cocktails & East Village Bar */}
        <CocktailBar onOpenReservation={openReservation} />

        {/* 5. Phone & Email Table Reservation Inquiries */}
        <ReservationSection />

        {/* 6. Instagram & TikTok Visual Content Previews */}
        <SocialMediaSection />

        {/* 7. Hours, Location, Contact & VIP Club */}
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={closeReservation} 
      />

      {/* Floating Bottom Bar for Mobile Devices (Direct Call & Instant Reserve) */}
      {showFloatingBar && (
        <aside className="mobile_floating_bar" aria-label="Quick contact actions">
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="floating_btn_call"
          >
            <FaPhone /> Call {RESTAURANT_INFO.phone}
          </a>
          <button
            className="floating_btn_reserve"
            onClick={openReservation}
          >
            <FaCalendarCheck /> Reserve Table
          </button>
        </aside>
      )}
    </div>
  );
}

export default App;
