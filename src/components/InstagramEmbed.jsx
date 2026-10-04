import { useEffect, useRef } from 'react';

// Extract shortcode/reelId from either raw ID ('Dc7UeGVPG9d') or full Instagram URL
function getReelId(input = '') {
  if (!input) return '';
  const str = String(input).trim();
  const match = str.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match) return match[1];
  return str.replace(/^https?:\/\/(?:www\.)?instagram\.com\/(?:reel|p)?\/?/i, '').replace(/[/?#].*$/, '').trim();
}

function InstagramEmbed({ url }) {
  const containerRef = useRef(null);
  const reelId = getReelId(url);

  // Official Instagram embed player URL with /embed/ endpoint
  const cleanEmbedUrl = reelId
    ? `https://www.instagram.com/reel/${reelId}/embed/?utm_source=ig_embed&utm_campaign=loading`
    : '';

  useEffect(() => {
    // Process Instagram embeds via official script if present
    if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
      window.instgrm.Embeds.process();
    }
  }, [reelId]);

  if (!cleanEmbedUrl) return null;

  return (
    <div className="instagram_official_embed_card" ref={containerRef}>
      <iframe
        src={cleanEmbedUrl}
        className="instagram_official_iframe"
        title="MayRee Official Instagram Reel"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}

export default InstagramEmbed;
