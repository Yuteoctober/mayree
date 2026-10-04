import { useState, useEffect } from 'react';
import '../css/SocialMediaSection.css';
import { RESTAURANT_INFO } from '../data/menuData';

// Image assets
import crabCurryImg from '../assets/picture/southern_crab_curry.jpg';
import shortRibImg from '../assets/picture/thai_short_rib.jpg';
import padThaiImg from '../assets/picture/padthai.jpg';
import cocktailImg from '../assets/picture/mayree_craft_cocktail.jpg';
import bgImg2 from '../assets/picture/mayree_bg2.png';
import bgImg3 from '../assets/picture/mayree_bg3.png';

// Icons
import { 
  FaInstagram, 
  FaTiktok, 
  FaPlay, 
  FaArrowUpRightFromSquare, 
  FaHeart, 
  FaEye,
  FaArrowRotateRight
} from 'react-icons/fa6';

function SocialMediaSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [liveStreamActive, setLiveStreamActive] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('Moments ago');

  // Load official TikTok and Instagram embed scripts for live feed players
  useEffect(() => {
    if (!document.getElementById('tiktok-embed-script')) {
      const script = document.createElement('script');
      script.id = 'tiktok-embed-script';
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.tiktokEmbed && window.tiktokEmbed.lib && typeof window.tiktokEmbed.lib.render === 'function') {
      window.tiktokEmbed.lib.render();
    }

    if (!document.getElementById('instagram-embed-script')) {
      const igScript = document.createElement('script');
      igScript.id = 'instagram-embed-script';
      igScript.src = '//www.instagram.com/embed.js';
      igScript.async = true;
      document.body.appendChild(igScript);
    } else if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
      window.instgrm.Embeds.process();
    }
  }, [liveStreamActive, activeFilter]);

  const socialReels = [
    {
      id: 'reel-1',
      platform: 'instagram',
      image: crabCurryImg,
      title: 'Gaeng Pu Bai Cha Plu',
      caption: 'Fresh yellow turmeric, wild betel leaves & colossal jumbo lump crab pounded fresh daily in heavy stone mortars.',
      stat: '16.4k views',
      duration: '0:38',
      statIcon: 'eye',
      tag: '@mayreenyc',
      url: RESTAURANT_INFO.instagram,
      dishTag: 'Signature Crab Curry'
    },
    {
      id: 'reel-2',
      platform: 'tiktok',
      image: cocktailImg,
      title: 'Siam Dusk Cocktail Ritual',
      caption: 'Butterfly pea gin, charred lemongrass cordial, and 24k gold leaf poured tableside in the East Village.',
      stat: '118.4k views',
      duration: '0:45',
      statIcon: 'play',
      tag: '@mayreenyc',
      url: RESTAURANT_INFO.tiktok,
      dishTag: 'Bespoke Mixology'
    },
    {
      id: 'reel-3',
      platform: 'instagram',
      image: shortRibImg,
      title: '48-Hour Massaman Short Rib',
      caption: 'Melt-in-your-mouth slow braised prime beef under roasted shallots, warm cardamom, and toasted peanuts.',
      stat: '3,840 likes',
      duration: '0:32',
      statIcon: 'heart',
      tag: '@mayreenyc',
      url: RESTAURANT_INFO.instagram,
      dishTag: 'Braised Short Rib'
    },
    {
      id: 'reel-4',
      platform: 'tiktok',
      image: bgImg2,
      title: 'East Village Dining Room Nights',
      caption: 'POV: Your date night in Manhattan’s Michelin-recognized Southern Thai sanctuary on East 1st Street.',
      stat: '142k views',
      duration: '0:28',
      statIcon: 'play',
      tag: '@mayreenyc',
      url: RESTAURANT_INFO.tiktok,
      dishTag: 'Candlelight Vibe'
    },
    {
      id: 'reel-5',
      platform: 'instagram',
      image: bgImg3,
      title: 'Chef Orawan & Phang Nga Roots',
      caption: 'Soulful culinary heritage from Southern Thailand brought to life with bold, uncompromising flavors.',
      stat: '2,650 likes',
      duration: '0:42',
      statIcon: 'heart',
      tag: '@mayreenyc',
      url: RESTAURANT_INFO.instagram,
      dishTag: 'Chef Heritage'
    },
    {
      id: 'reel-6',
      platform: 'tiktok',
      image: padThaiImg,
      title: 'Wok Hei Crab Pad Thai',
      caption: 'Intense wok char, authentic 6-hour tamarind reduction, and wild jumbo tiger prawns wrapped in egg crepe.',
      stat: '78.5k views',
      duration: '0:35',
      statIcon: 'play',
      tag: '@mayreenyc',
      url: RESTAURANT_INFO.tiktok,
      dishTag: 'High-Heat Wok Hei'
    }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastSyncTime('Just now');
      if (window.tiktokEmbed && window.tiktokEmbed.lib && typeof window.tiktokEmbed.lib.render === 'function') {
        window.tiktokEmbed.lib.render();
      }
      if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
        window.instgrm.Embeds.process();
      }
    }, 700);
  };

  const filteredReels = socialReels.filter((reel) => {
    if (activeFilter === 'all') return true;
    return reel.platform === activeFilter;
  });

  return (
    <section className="social_section" id="social">
      <div className="container">
        {/* Section Header */}
        <div className="social_header text-center">
          <div className="social_status_row">
            <span className="live_pulse_badge">
              <span className="status_dot_pulse" />
              Live Reel Feed &bull; Synced {lastSyncTime}
            </span>
            <button 
              className={`social_refresh_btn ${isRefreshing ? 'spinning' : ''}`}
              onClick={handleRefresh}
              title="Refresh live social feed"
              aria-label="Refresh social feed"
            >
              <FaArrowRotateRight />
              <span>Refresh Feed</span>
            </button>
          </div>

          <h2 className="section-title">
            Live from the Kitchen &amp; Bar
          </h2>
          <p className="section-desc">
            Preview live reels from our kitchen, stone-ground Southern curries, and botanical cocktails. Click any reel to watch live directly on Instagram or TikTok.
          </p>

          {/* Direct Social Links */}
          <div className="social_actions_row">
            <a 
              href={RESTAURANT_INFO.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="social_pill_btn ig"
              title="Follow MayRee on Instagram"
            >
              <FaInstagram className="social_pill_icon" />
              <span>@mayreenyc on Instagram</span>
              <FaArrowUpRightFromSquare className="social_arrow_icon" />
            </a>

            <a 
              href={RESTAURANT_INFO.tiktok} 
              target="_blank" 
              rel="noreferrer" 
              className="social_pill_btn tt"
              title="Watch MayRee on TikTok"
            >
              <FaTiktok className="social_pill_icon" />
              <span>@mayreenyc on TikTok</span>
              <FaArrowUpRightFromSquare className="social_arrow_icon" />
            </a>
          </div>

          {/* Filter & Live View Controls */}
          <div className="social_controls_wrap">
            <div className="social_filter_tabs">
              <button 
                className={`social_filter_tab ${activeFilter === 'all' && !liveStreamActive ? 'active' : ''}`}
                onClick={() => { setActiveFilter('all'); setLiveStreamActive(false); }}
              >
                All Live Reels
              </button>
              <button 
                className={`social_filter_tab ${activeFilter === 'instagram' && !liveStreamActive ? 'active' : ''}`}
                onClick={() => { setActiveFilter('instagram'); setLiveStreamActive(false); }}
              >
                <FaInstagram /> Instagram Reels
              </button>
              <button 
                className={`social_filter_tab ${activeFilter === 'tiktok' && !liveStreamActive ? 'active' : ''}`}
                onClick={() => { setActiveFilter('tiktok'); setLiveStreamActive(false); }}
              >
                <FaTiktok /> TikTok Streams
              </button>
            </div>

          </div>
        </div>

        {/* Live TikTok & Instagram Player Embed Stream */}
        {liveStreamActive ? (
          <div className="live_tiktok_embed_container glass-panel">
            <div className="live_embed_header">
              <div className="live_embed_meta">
                <span className="live_dot" />
                <span>Live Feed &bull; Official @mayreenyc Social Channels</span>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <a 
                  href={RESTAURANT_INFO.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="live_open_tiktok_link"
                >
                  <FaInstagram /> Open Instagram <FaArrowUpRightFromSquare />
                </a>
                <a 
                  href={RESTAURANT_INFO.tiktok} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="live_open_tiktok_link"
                >
                  <FaTiktok /> Open TikTok <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>

            <div className="live_embed_grid">
              {/* Live Embedded TikTok Blockquote */}
              <div className="live_tiktok_item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', color: 'var(--gold-light)', fontSize: '0.88rem', fontWeight: 600 }}>
                  <FaTiktok />
                  <span>@mayreenyc on TikTok</span>
                </div>
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@mayreenyc" 
                  data-unique-id="mayreenyc"
                  data-embed-type="creator"
                  style={{ width: '100%', minHeight: '480px' }}
                >
                  <section>
                    <a target="_blank" rel="noreferrer" title="@mayreenyc" href={RESTAURANT_INFO.tiktok}>@mayreenyc</a>
                    <p>Authentic Southern Thai Kitchen &amp; Bespoke Cocktail Sanctuary in East Village NYC. #mayreenyc #nycfood #thaitok</p>
                  </section>
                </blockquote>
              </div>

              {/* Live Instagram Feed Item */}
              <div className="live_tiktok_item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', color: 'var(--gold-light)', fontSize: '0.88rem', fontWeight: 600 }}>
                  <FaInstagram />
                  <span>@mayreenyc on Instagram</span>
                </div>
                <div style={{ padding: '1.5rem', background: 'rgba(7, 7, 9, 0.7)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', minHeight: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.25rem' }}>
                      <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0e0e12', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.3rem' }}>
                          <FaInstagram />
                        </div>
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>mayreenyc</h4>
                        <span style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>MayRee &bull; Southern Thai Kitchen &amp; Bar</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                      Michelin Guide Selected &bull; Authentic Southern Thai curries, wok-seared specialties, and handcrafted botanical cocktails by Chef Orawan Sawangphol in Manhattan’s East Village.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>58 E 1st St, NYC</span>
                      <span style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>East Village</span>
                      <span style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>Michelin Guide</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a 
                      href={RESTAURANT_INFO.instagram} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-gold"
                      style={{ fontSize: '0.82rem', padding: '0.8rem 1.4rem', textAlign: 'center' }}
                    >
                      <FaInstagram /> Open @mayreenyc on Instagram &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="live_embed_footer">
              <p>Pulling live social streams directly from official channels: <a href={RESTAURANT_INFO.instagram} target="_blank" rel="noreferrer">@mayreenyc on Instagram</a> &bull; <a href={RESTAURANT_INFO.tiktok} target="_blank" rel="noreferrer">@mayreenyc on TikTok</a></p>
            </div>
          </div>
        ) : (
          /* Live Reel Previews Grid (Direct Links - No Popup) */
          <div className="social_reels_grid">
            {filteredReels.map((reel) => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noreferrer"
                className={`social_reel_card ${reel.platform}`}
                aria-label={`Watch live reel ${reel.title} on ${reel.platform}`}
                title={`Click to watch live reel directly on ${reel.platform}`}
              >
                {/* Simulated Live Reel Playing Bar */}
                <div className="reel_progress_tracker">
                  <div className="reel_progress_bar" />
                </div>

                {/* Reel Media Container */}
                <div className="social_reel_media">
                  <img 
                    src={reel.image} 
                    alt={reel.title} 
                    className="social_reel_img" 
                    loading="lazy" 
                  />

                  {/* Dark Gradient Scrim for Reel Readability */}
                  <div className="social_reel_overlay_scrim" />

                  {/* Top Badges */}
                  <div className="social_reel_top_bar">
                    <div className={`social_reel_badge ${reel.platform}`}>
                      {reel.platform === 'instagram' ? <FaInstagram /> : <FaTiktok />}
                      <span>{reel.tag}</span>
                    </div>

                    <div className="reel_live_indicator">
                      <span className="reel_live_beacon" />
                      <span>LIVE REEL</span>
                      <div className="reel_sound_wave">
                        <span /><span /><span />
                      </div>
                    </div>
                  </div>

                  {/* Centered Reel Play Icon */}
                  <div className="social_reel_play_circle">
                    <FaPlay className="play_triangle" />
                  </div>

                  {/* Reel Duration / Engagement Pill */}
                  <div className="social_reel_stats_pill">
                    {reel.statIcon === 'heart' ? <FaHeart /> : reel.statIcon === 'play' ? <FaPlay /> : <FaEye />}
                    <span>{reel.stat}</span>
                    <span className="reel_dot_sep">&bull;</span>
                    <span>{reel.duration}</span>
                  </div>

                  {/* Bottom Reel Caption Info (Overlaid) */}
                  <div className="social_reel_info_overlay">
                    <span className="social_dish_tag">{reel.dishTag}</span>
                    <h3 className="social_reel_title">{reel.title}</h3>
                    <p className="social_reel_caption">{reel.caption}</p>
                    <div className="social_reel_action_row">
                      <span className="social_reel_direct_btn">
                        Watch Live on {reel.platform === 'instagram' ? 'Instagram' : 'TikTok'} &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Michelin Critic Quote Accent */}
        <div className="social_press_footnote">
          <blockquote className="social_critic_quote">
            &ldquo;Recognized for culinary excellence, MayRee delivers an uncompromising, fiery homage to Southern Thai culinary traditions with soulful depth.&rdquo;
            <cite>&mdash; The Michelin Guide</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaSection;
