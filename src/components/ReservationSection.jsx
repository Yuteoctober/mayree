import '../css/Reservation.css';
import { RESTAURANT_INFO } from '../data/menuData';
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaCalendarCheck, 
  FaMartiniGlassCitrus, 
  FaUserGroup
} from 'react-icons/fa6';

function ReservationSection() {
  const reservationEmailTemplate = 
    `mailto:${RESTAURANT_INFO.email}` +
    `?subject=Table%20Reservation%20Inquiry%20-%20MayRee` +
    `&body=Hello%20MayRee%20Concierge,%0A%0A` +
    `I%20would%20like%20to%20inquire%20about%20a%20table%20reservation:%0A%0A` +
    `•%20Preferred%20Date:%20%0A` +
    `•%20Preferred%20Time:%20%0A` +
    `•%20Party%20Size:%20%0A` +
    `•%20Guest%20Name:%20%0A` +
    `•%20Contact%20Phone:%20%0A` +
    `•%20Dietary%20Restrictions%20/%20Notes:%20%0A%0A` +
    `Thank%20you!`;

  return (
    <section className="reservation_section" id="reservations">
      <div className="container">
        {/* Header */}
        <div className="reservation_header text-center">
          <span className="section-tag">Direct Bookings &bull; East Village</span>
          <h2 className="section-title">
            Table Reservations
          </h2>
          <p className="section-desc">
            To ensure personalized Southern Thai hospitality, MayRee accommodates table reservations directly via telephone and email. Walk-in guests are always welcomed.
          </p>
        </div>

        {/* Dual Direct Channels (Call or Email) */}
        <div className="reservation_direct_grid">
          {/* Channel 1: Telephone */}
          <div className="reservation_channel_card glass-panel">
            <div className="channel_top_icon">
              <FaPhone className="gold" />
            </div>
            <span className="channel_badge">Immediate Assistance</span>
            <h3 className="channel_title">Call Us Directly</h3>
            <p className="channel_description">
              For same-day table availability, immediate confirmations, and dining inquiries:
            </p>

            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="btn-gold channel_main_action"
            >
              <FaPhone /> Call {RESTAURANT_INFO.phone}
            </a>

            <div className="channel_info_meta">
              <FaClock className="gold" />
              <span>Telephone lines open daily from 2:00 PM – Late</span>
            </div>
          </div>

          {/* Channel 2: Email */}
          <div className="reservation_channel_card glass-panel">
            <div className="channel_top_icon">
              <FaEnvelope className="gold" />
            </div>
            <span className="channel_badge">Advance Requests</span>
            <h3 className="channel_title">Email Concierge</h3>
            <p className="channel_description">
              For advance bookings, celebrations, and special dining requests:
            </p>

            <a 
              href={reservationEmailTemplate} 
              className="btn-outline-gold channel_main_action"
            >
              Email: {RESTAURANT_INFO.email}
            </a>

            <div className="channel_info_meta">
              <FaCalendarCheck className="gold" />
              <span>Direct response within 2–4 hours</span>
            </div>
          </div>
        </div>

        {/* Helpful Dining & Walk-In Guidance */}
        <div className="reservation_guidance_bar glass-panel">
          <div className="guidance_item">
            <div className="guidance_icon">
              <FaMartiniGlassCitrus className="gold" />
            </div>
            <div className="guidance_text">
              <h4>Walk-Ins Welcomed Daily</h4>
              <p>Our bespoke cocktail bar and high-top lounge seating are held open for walk-in guests on a first-come, first-served basis every evening from 5:00 PM.</p>
            </div>
          </div>

          <div className="guidance_item">
            <div className="guidance_icon">
              <FaUserGroup className="gold" />
            </div>
            <div className="guidance_text">
              <h4>Parties of 6+ &amp; Private Buyouts</h4>
              <p>For large party bookings or full dining room buyouts, please email our events team or call us at least 48 hours in advance to coordinate tasting menus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationSection;
