import { useEffect } from 'react';
import '../css/ReservationModal.css';
import { RESTAURANT_INFO } from '../data/menuData';
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaCalendarCheck, 
  FaXmark,
  FaMartiniGlassCitrus,
  FaAward
} from 'react-icons/fa6';

function ReservationModal({ isOpen, onClose }) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanPhone = RESTAURANT_INFO.phone.replace(/[^0-9]/g, '');
  const mailSubject = encodeURIComponent('Table Reservation Inquiry - MayRee NYC');
  const mailBody = encodeURIComponent(
    `Hello MayRee Concierge,\n\n` +
    `I would like to inquire about reserving a table at MayRee:\n\n` +
    `• Preferred Date:\n` +
    `• Preferred Time (e.g. 7:00 PM):\n` +
    `• Party Size (Number of Guests):\n` +
    `• Guest Name:\n` +
    `• Contact Phone Number:\n` +
    `• Dietary Restrictions / Special Occasion:\n\n` +
    `Thank you!`
  );
  const mailtoLink = `mailto:${RESTAURANT_INFO.email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <div className="res_modal_overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="res_modal_card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="res_modal_close_btn" 
          onClick={onClose}
          aria-label="Close reservation modal"
        >
          <FaXmark />
        </button>

        {/* Modal Header */}
        <div className="res_modal_header text-center">
          <span className="res_modal_tag">
            <FaAward className="gold" />
            Michelin Recognized &bull; East Village NYC
          </span>
          <h2 className="res_modal_title">
            Table Reservations
          </h2>
          <p className="res_modal_thai">เมรี &bull; Southern Thai Kitchen &amp; Bespoke Bar</p>
          <p className="res_modal_sub">
            To provide personal, attentive hospitality, MayRee accepts table reservations <strong>exclusively via direct telephone and email concierge</strong>. We do not use automated online booking platforms or online ordering.
          </p>
        </div>

        {/* Two Direct Booking Channels */}
        <div className="res_channels_container">
          {/* Channel 1: Telephone */}
          <div className="res_channel_box glass-panel">
            <div className="res_channel_icon_wrap">
              <FaPhone className="gold" />
            </div>
            <div className="res_channel_content">
              <span className="res_channel_label">Immediate Confirmation</span>
              <h3 className="res_channel_heading">Call Us Directly</h3>
              <p className="res_channel_desc">
                For same-day availability, immediate confirmations, and dining inquiries.
              </p>
              <a 
                href={`tel:${cleanPhone}`} 
                className="btn-gold res_channel_btn"
              >
                <FaPhone /> Call {RESTAURANT_INFO.phone}
              </a>
              <div className="res_channel_meta">
                <FaClock className="gold" /> Phone lines open daily 2:00 PM – Late
              </div>
            </div>
          </div>

          {/* Channel 2: Email */}
          <div className="res_channel_box glass-panel">
            <div className="res_channel_icon_wrap">
              <FaEnvelope className="gold" />
            </div>
            <div className="res_channel_content">
              <span className="res_channel_label">Advance Inquiries</span>
              <h3 className="res_channel_heading">Email Concierge</h3>
              <p className="res_channel_desc">
                For advance bookings, celebrations, and tasting menu inquiries.
              </p>
              <a 
                href={mailtoLink} 
                className="btn-outline-gold res_channel_btn"
              >
                <FaEnvelope /> Email {RESTAURANT_INFO.email}
              </a>
              <div className="res_channel_meta">
                <FaCalendarCheck className="gold" /> Direct response within 2–4 hours
              </div>
            </div>
          </div>
        </div>

        {/* Walk-in notice */}
        <div className="res_modal_footer">
          <div className="res_walkin_row">
            <FaMartiniGlassCitrus className="gold" />
            <p>
              <strong>Walk-Ins Always Welcomed:</strong> Cocktail bar seating and high-top lounge tables are available nightly for walk-in guests on a first-come basis from 5:00 PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationModal;
