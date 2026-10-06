import { useState, useMemo } from 'react';
import '../css/MenuSection.css';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { FaMagnifyingGlass, FaWineGlass, FaCircleInfo } from 'react-icons/fa6';

function MenuSection({ onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDishModal, setSelectedDishModal] = useState(null);

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesThai = item.thaiName.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesThai && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="menu_section" id="menu">
      <div className="container">
        {/* Header */}
        <div className="menu_header text-center">
          <span className="section-tag">Menu &bull; East Village</span>
          <h2 className="section-title">
            The MayRee Menu
          </h2>
          <p className="section-desc">
            Signature Southern curries, classic Thai dishes like Pad Thai and Tom Yum, flavorful noodles, and craft cocktails.
          </p>
        </div>

        {/* Minimalist Category Tabs */}
        <nav className="minimal_category_nav" aria-label="Menu categories">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`cat_link_btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Minimalist Search Bar */}
        <div className="minimal_search_container">
          <div className="minimal_search_input_wrap">
            <FaMagnifyingGlass className="search_icon_minimal" />
            <input
              type="text"
              placeholder="Search dishes, curries, seafood, cocktails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter menu items"
            />
            {searchQuery && (
              <button 
                className="search_clear_minimal" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Minimalist Editorial Menu Grid */}
        <div className="minimal_menu_grid">
          {filteredDishes.map((dish) => (
            <article 
              key={dish.id} 
              className="minimal_dish_item"
              onClick={() => setSelectedDishModal(dish)}
            >
              {/* Optional Thumbnail */}
              <div className="minimal_dish_thumb_wrap">
                <img src={dish.image} alt={dish.name} className="minimal_dish_thumb" loading="lazy" />
              </div>

              {/* Dish Content */}
              <div className="minimal_dish_body">
                <div className="minimal_dish_header">
                  <div>
                    <h3 className="minimal_dish_title">
                      {dish.name}
                    </h3>
                    <span className="minimal_dish_thai">{dish.thaiName}</span>
                  </div>
                  <span className="minimal_dish_price">${dish.price}</span>
                </div>

                <p className="minimal_dish_description">
                  {dish.description}
                </p>

                <div className="minimal_dish_footer">
                  <span className="minimal_dietary_note">
                    {dish.dietary.slice(0, 2).join(' &bull; ')}
                  </span>
                  <button className="minimal_view_details">
                    <FaCircleInfo /> Details &amp; Pairing
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDishModal && (
        <div className="modal_backdrop" onClick={() => setSelectedDishModal(null)}>
          <div className="dish_modal_card glass-panel" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal_close_btn" 
              onClick={() => setSelectedDishModal(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="modal_dish_grid">
              <img 
                src={selectedDishModal.image} 
                alt={selectedDishModal.name} 
                className="modal_dish_img" 
              />
              <div className="modal_dish_details">
                <span className="section-tag">
                  {selectedDishModal.category.replace('_', ' ').toUpperCase()}
                </span>
                <h2>{selectedDishModal.name}</h2>
                <h4 className="modal_thai_sub">{selectedDishModal.thaiName}</h4>

                <div className="modal_meta_group">
                  <span className="modal_price">${selectedDishModal.price}</span>
                  {selectedDishModal.isMichelin && (
                    <span className="modal_michelin_note">Michelin Guide Highlight</span>
                  )}
                </div>

                <p className="modal_desc_full">{selectedDishModal.description}</p>

                {selectedDishModal.pairing && (
                  <div className="modal_pairing_box">
                    <FaWineGlass className="gold" />
                    <div>
                      <strong>Recommended Pairing</strong>
                      <p>{selectedDishModal.pairing}</p>
                    </div>
                  </div>
                )}

                <div className="modal_dietary_box">
                  <strong>Dietary Notes:</strong> {selectedDishModal.dietary.join(', ')}
                </div>

                <div className="modal_action_row">
                  <button
                    className="btn-gold"
                    onClick={() => {
                      setSelectedDishModal(null);
                      if (onOpenReservation) onOpenReservation();
                    }}
                  >
                    Reserve Table
                  </button>
                  <button
                    className="btn-outline-gold"
                    onClick={() => setSelectedDishModal(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MenuSection;
