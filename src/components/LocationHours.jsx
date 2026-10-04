import '../css/LocationHours.css';
import { RESTAURANT_INFO } from '../data/menuData';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock, FaTrainSubway, FaArrowUpRightFromSquare } from 'react-icons/fa6';

function LocationHours() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=58+East+1st+Street,+New+York,+NY+10003&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="location_section" id="location">
      <div className="container">
        {/* Section Header */}
        <div className="location_header text-center">
          <span className="section-tag">Find &amp; Contact Us</span>
          <h2 className="section-title">
            Hours &amp; Location
          </h2>
          <p className="section-desc">
            Nestled in the heart of Manhattan&rsquo;s East Village. For all table inquiries, private buyouts, or press, please contact our team directly via telephone or email.
          </p>
        </div>

        <div className="location_editorial_grid">
          {/* Details Column */}
          <div className="location_details_col">
            <div className="location_item_block">
              <span className="loc_label">
                <FaLocationDot /> Address
              </span>
              <p className="loc_main_text">{RESTAURANT_INFO.address}</p>
              <p className="loc_sub_text">{RESTAURANT_INFO.neighborhood}</p>
              <a 
                href="https://maps.google.com/?q=MayRee+58+East+1st+Street+New+York+NY+10003" 
                target="_blank" 
                rel="noreferrer" 
                className="loc_map_link"
              >
                Open in Google Maps <FaArrowUpRightFromSquare />
              </a>
            </div>

            <div className="location_item_block">
              <span className="loc_label">
                <FaClock /> Operating Hours
              </span>
              <div className="hours_minimal_list">
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <div key={i} className="hours_minimal_line">
                    <span className="hours_day">{h.days}</span>
                    <span className="hours_time">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="location_item_block">
              <span className="loc_label">
                <FaTrainSubway /> Subway &amp; Transit
              </span>
              <p className="loc_main_text">{RESTAURANT_INFO.transit}</p>
            </div>

            <div className="location_item_block">
              <span className="loc_label">Direct Inquiries &amp; Table Questions</span>
              <p className="loc_sub_text" style={{ marginBottom: '0.75rem' }}>
                We do not use automated messaging forms. Please call or email our team directly:
              </p>
              <div className="loc_action_buttons">
                <a 
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`} 
                  className="btn-gold loc_direct_btn"
                >
                  <FaPhone /> Call {RESTAURANT_INFO.phone}
                </a>
                <a 
                  href={`mailto:${RESTAURANT_INFO.email}?subject=MayRee%20Dining%20Inquiry`} 
                  className="btn-outline-gold loc_direct_btn"
                >
                  <FaEnvelope /> Email {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Column */}
          <div className="location_map_col glass-panel">
            <div className="map_frame_wrapper">
              <iframe
                title="MayRee East Village Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="google_map_embed"
              />
            </div>
            <div className="map_bottom_caption">
              <div>
                <strong>MayRee Thai Kitchen &amp; Bar</strong>
                <p>{RESTAURANT_INFO.address} (between 1st &amp; 2nd Ave), East Village</p>
              </div>
              <a 
                href="https://maps.google.com/?q=MayRee+58+East+1st+Street+New+York+NY+10003" 
                target="_blank" 
                rel="noreferrer" 
                className="map_open_btn"
              >
                Get Directions <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationHours;
