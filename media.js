// ============================================================
// ILLUSTRATIONS
// Our own drawings (SVG), one per post. They are NOT the original
// images from the posts: those belong to other people, and showing
// a real photo next to a fake post would add to the confusion.
// Each scene is drawn on a 320 x 180 canvas.
// ============================================================

const SCENES = {
  // Q1 - real evacuation from a cruise ship in port
  "ship-evacuation": `
    <rect width="320" height="180" fill="#BFE3F2"/>
    <rect y="118" width="320" height="62" fill="#2E6F95"/>
    <rect x="0" y="128" width="320" height="52" fill="#245A7A"/>
    <path d="M40 120 h190 l-18 26 h-160 z" fill="#F7F7FA"/>
    <rect x="70" y="92" width="130" height="28" rx="3" fill="#F7F7FA"/>
    <rect x="95" y="72" width="80" height="22" rx="3" fill="#E9EAF2"/>
    <rect x="128" y="52" width="16" height="22" fill="#D6008B"/>
    <g fill="#245A7A">${[80,96,112,128,144,160,176].map(x => `<rect x="${x}" y="100" width="9" height="8" rx="2"/>`).join("")}</g>
    <rect x="230" y="116" width="90" height="12" fill="#8A8FA8"/>
    <path d="M200 120 L246 116" stroke="#5E6180" stroke-width="4"/>
    <g fill="#5BA7E0"><circle cx="262" cy="104" r="5"/><rect x="257" y="109" width="10" height="9" rx="3"/>
    <circle cx="282" cy="104" r="5"/><rect x="277" y="109" width="10" height="9" rx="3"/></g>`,

  // Q2 - "before and after" collage of a river town (AI-generated in reality)
  "river-before-after": `
    <rect width="320" height="180" fill="#F2F3F9"/>
    <g>
      <rect x="6" y="6" width="150" height="168" rx="6" fill="#CFE8C8"/>
      <path d="M6 70 Q60 40 156 60 V6 H6 z" fill="#7FB070"/>
      <path d="M60 174 C70 120 90 100 100 6 H120 C112 100 96 130 92 174 z" fill="#5AA0D8"/>
      <rect x="40" y="118" width="96" height="7" fill="#8A6A4A"/>
      <rect x="54" y="70" width="80" height="6" fill="#8A6A4A"/>
      <g>${[[18,90,"#F0A35E"],[30,140,"#E4567A"],[126,96,"#F6D04D"],[132,140,"#6FB2E6"],[16,128,"#B07CD8"]].map(([x,y,c]) => `<rect x="${x}" y="${y}" width="16" height="13" fill="${c}"/><path d="M${x-2} ${y} l10 -8 l10 8z" fill="#A04A3A"/>`).join("")}</g>
    </g>
    <g>
      <rect x="164" y="6" width="150" height="168" rx="6" fill="#B9A588"/>
      <path d="M164 70 Q218 40 314 60 V6 H164 z" fill="#7FB070"/>
      <path d="M200 174 C215 120 240 100 252 6 H286 C276 100 260 130 250 174 z" fill="#8C7A5E"/>
      <path d="M198 118 l30 4 M246 120 l28 -5" stroke="#5E4A34" stroke-width="6"/>
      <rect x="176" y="132" width="14" height="10" fill="#9A8A70" transform="rotate(-14 183 137)"/>
      <rect x="286" y="96" width="14" height="10" fill="#9A8A70" transform="rotate(10 293 101)"/>
    </g>
    <g font-family="Bricolage Grotesque, sans-serif" font-weight="700" font-size="13" fill="#fff">
      <rect x="12" y="12" width="56" height="20" rx="10" fill="#1B1A3A"/><text x="40" y="26" text-anchor="middle">înainte</text>
      <rect x="170" y="12" width="42" height="20" rx="10" fill="#1B1A3A"/><text x="191" y="26" text-anchor="middle">după</text>
    </g>`,

  // Q3 - volcano erupting right behind a street (the AI clip; geographically impossible)
  "volcano-town": `
    <rect width="320" height="180" fill="#3A2440"/>
    <path d="M90 140 L160 46 L230 140 z" fill="#4A3A3A"/>
    <path d="M148 52 L160 46 L172 52 L166 62 L154 62 z" fill="#FF6A2B"/>
    <g fill="#FF9A3C" opacity=".9"><circle cx="150" cy="30" r="9"/><circle cx="168" cy="20" r="12"/><circle cx="186" cy="34" r="8"/></g>
    <path d="M160 50 L150 90 L158 92 L148 130" stroke="#FF6A2B" stroke-width="5" fill="none"/>
    <rect y="132" width="320" height="48" fill="#26203A"/>
    <g>${[[10,96],[60,104],[240,100],[284,92]].map(([x,y]) => `<rect x="${x}" y="${y}" width="32" height="${132-y}" fill="#55507A"/><path d="M${x-3} ${y} l19 -14 l19 14z" fill="#6E6896"/><rect x="${x+11}" y="${y+12}" width="9" height="9" fill="#FFD36B"/>`).join("")}</g>
    <g fill="#1B1A3A">${[120,150,196].map(x => `<circle cx="${x}" cy="140" r="5"/><rect x="${x-4}" y="145" width="8" height="16" rx="3"/>`).join("")}</g>`,

  // Q4 - real eruption seen from a fishing boat, volcano alone on a sea island
  "volcano-sea": `
    <rect width="320" height="180" fill="#151A33"/>
    <g fill="#fff" opacity=".7"><circle cx="30" cy="22" r="1.5"/><circle cx="80" cy="40" r="1"/><circle cx="270" cy="20" r="1.5"/><circle cx="300" cy="52" r="1"/></g>
    <path d="M150 112 L196 52 L242 112 z" fill="#3A3048"/>
    <path d="M188 56 L196 52 L204 56 L200 62 L192 62 z" fill="#FF6A2B"/>
    <g fill="#FF8A3C" opacity=".75"><circle cx="190" cy="36" r="8"/><circle cx="204" cy="26" r="10"/></g>
    <rect y="110" width="320" height="70" fill="#1F3A5C"/>
    <path d="M150 112 h92" stroke="#FF6A2B" stroke-width="2" opacity=".6"/>
    <path d="M0 132 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#2E5580" stroke-width="3" fill="none"/>
    <path d="M20 150 h110 l-14 18 h-84 z" fill="#C9572E"/>
    <rect x="50" y="132" width="40" height="18" fill="#E9EAF2"/>
    <rect x="70" y="104" width="3" height="30" fill="#E9EAF2"/>`,

  // Q5 - sponsored ad promising easy money
  "money-ad": `
    <rect width="320" height="180" fill="#FFE45C"/>
    <g transform="rotate(-8 110 92)">
      <rect x="70" y="18" width="84" height="150" rx="14" fill="#1B1A3A"/>
      <rect x="77" y="30" width="70" height="124" rx="6" fill="#fff"/>
      <rect x="84" y="40" width="56" height="8" rx="4" fill="#D6008B"/>
      <rect x="84" y="56" width="44" height="6" rx="3" fill="#C9CBDB"/>
      <rect x="84" y="68" width="50" height="6" rx="3" fill="#C9CBDB"/>
      <rect x="84" y="128" width="56" height="16" rx="8" fill="#0F8A5C"/>
    </g>
    <g font-family="Bricolage Grotesque, sans-serif" font-weight="800" fill="#1B1A3A">
      <text x="186" y="82" font-size="34">+5.000</text>
      <text x="188" y="108" font-size="18">lei/lună</text>
    </g>
    <g fill="#0F8A5C">${[[200,140],[236,150],[270,132]].map(([x,y]) => `<rect x="${x}" y="${y}" width="30" height="16" rx="3"/><circle cx="${x+15}" cy="${y+8}" r="4" fill="#BEE8D3"/>`).join("")}</g>`,

  // Q6 - evacuation photo with a cameraman in normal clothes (an old drill photo)
  "ship-cameraman": `
    <rect width="320" height="180" fill="#DDE3EC"/>
    <rect x="0" y="0" width="140" height="180" fill="#F7F7FA"/>
    <g fill="#245A7A">${[20,52,84].map(y => `<rect x="20" y="${y}" width="100" height="14" rx="3"/>`).join("")}</g>
    <path d="M140 130 L320 100 V112 L140 142 z" fill="#8A8FA8"/>
    <g>${[180,214,248].map((x,i) => `<g transform="translate(${x} ${108 - i*6})"><circle cy="-34" r="9" fill="#F7F7FA" stroke="#9AA0B8"/><rect x="-11" y="-25" width="22" height="34" rx="8" fill="#F7F7FA" stroke="#9AA0B8"/></g>`).join("")}</g>
    <rect x="186" y="82" width="62" height="10" rx="4" fill="#E9EAF2" stroke="#9AA0B8"/>
    <g transform="translate(150 132)"><circle cy="-34" r="8" fill="#E2B48C"/><rect x="-10" y="-26" width="20" height="30" rx="6" fill="#3E5A8A"/><rect x="-4" y="4" width="8" height="18" fill="#2A2F4A"/>
    <rect x="6" y="-30" width="18" height="12" rx="2" fill="#1B1A3A"/></g>`,

  // Q7 - deepfake video of a public figure recommending an investment
  "deepfake-video": `
    <rect width="320" height="180" fill="#232048"/>
    <rect x="0" y="0" width="320" height="180" fill="url(#dfgrid)"/>
    <defs><pattern id="dfgrid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="#2F2B5C"/></pattern></defs>
    <path d="M100 180 C100 130 130 118 160 118 C190 118 220 130 220 180 z" fill="#3E5A8A"/>
    <path d="M150 118 l10 18 l10 -18 z" fill="#fff"/>
    <ellipse cx="160" cy="76" rx="30" ry="36" fill="#E2B48C"/>
    <path d="M130 66 C132 36 188 36 190 66 C182 50 140 50 130 66 z" fill="#5A4636"/>
    <g fill="#1B1A3A"><circle cx="149" cy="74" r="3"/><circle cx="171" cy="74" r="3"/></g>
    <path d="M150 96 q10 6 20 0" stroke="#9A4A3A" stroke-width="3" fill="none"/>
    <g opacity=".85"><rect x="128" y="88" width="64" height="5" fill="#D6008B"/><rect x="134" y="99" width="50" height="3" fill="#5BE0FF"/></g>
    <rect x="216" y="28" width="92" height="40" rx="10" fill="#fff"/>
    <path d="M222 66 l-10 12 l20 -10 z" fill="#fff"/>
    <text x="262" y="53" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="15" fill="#0F8A5C">Investește!</text>`,

  // Q8 - official warning from the cyber security agency
  "official-warning": `
    <rect width="320" height="180" fill="#E8ECF8"/>
    <rect x="70" y="22" width="180" height="136" rx="10" fill="#fff" stroke="#C9CBDB"/>
    <rect x="70" y="22" width="180" height="26" rx="10" fill="#1B1A3A"/>
    <rect x="70" y="38" width="180" height="10" fill="#1B1A3A"/>
    <path d="M160 62 l26 10 v20 c0 18 -12 28 -26 34 c-14 -6 -26 -16 -26 -34 v-20 z" fill="#0F8A5C"/>
    <path d="M148 92 l9 9 l17 -19" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <g fill="#C9CBDB"><rect x="96" y="136" width="128" height="6" rx="3"/><rect x="112" y="146" width="96" height="5" rx="2.5"/></g>`
};

// Wraps a scene as a photo, a video (play button + timer) or an ad.
function renderMedia(media) {
  if (!media || !SCENES[media.scene]) return "";
  const isVideo = media.kind === "video";
  return `
    <figure class="media media-${media.kind}">
      <svg viewBox="0 0 320 180" role="img" aria-label="${media.alt[lang]}" preserveAspectRatio="xMidYMid slice">
        ${SCENES[media.scene]}
      </svg>
      ${isVideo ? `<span class="play" aria-hidden="true"></span><span class="duration">0:${media.seconds || 15}</span>` : ""}
      <figcaption>${UI[lang].illustration}</figcaption>
    </figure>`;
}
