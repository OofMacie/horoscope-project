// ─── Palette ───────────────────────────────────────────────
const G  = '#bc8909';
const G2 = '#d4a82a';
const S  = '#e8d1b6';
const D  = '#0a0f1e';
const N  = '#132442';
const N2 = '#1a3a63';
const ST = 'rgba(188,137,9,0.5)';
const PG = '#e8cc80'; // pale gold — zodiac glyphs & moon face
const C  = 190;       // wheel center (380/2)

// ─── Moon Phase SVGs ──────────────────────────────────────
function moonSVG(phase) {
    const sz = 22, cx = 11, cy = 11, r = 7.8;
    const dark = D, lit = S;
    const str = ST;
    const sw = 0.9;
    const phases = [
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}" stroke="${str}" stroke-width="${sw}"/>`,
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}" stroke="${str}" stroke-width="${sw}"/>
         <path d="M${cx},${cy-r} A${r},${r},0,0,1,${cx},${cy+r} A${r*0.15},${r},0,0,0,${cx},${cy-r} Z" fill="${lit}"/>`,
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}" stroke="${str}" stroke-width="${sw}"/>
         <path d="M${cx},${cy-r} A${r},${r},0,0,1,${cx},${cy+r} L${cx},${cy-r} Z" fill="${lit}"/>`,
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}" stroke="${str}" stroke-width="${sw}"/>
         <path d="M${cx},${cy-r} A${r},${r},0,0,1,${cx},${cy+r} A${r*0.52},${r},0,0,1,${cx},${cy-r} Z" fill="${lit}"/>`,
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${lit}" stroke="${str}" stroke-width="${sw}"/>
         <circle cx="${cx}" cy="${cy}" r="${r*0.65}" fill="none" stroke="rgba(232,209,182,0.25)" stroke-width="0.5"/>`,
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}" stroke="${str}" stroke-width="${sw}"/>
         <path d="M${cx},${cy-r} A${r},${r},0,0,0,${cx},${cy+r} A${r*0.52},${r},0,0,0,${cx},${cy-r} Z" fill="${lit}"/>`,
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}" stroke="${str}" stroke-width="${sw}"/>
         <path d="M${cx},${cy-r} A${r},${r},0,0,0,${cx},${cy+r} L${cx},${cy-r} Z" fill="${lit}"/>`,
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${dark}" stroke="${str}" stroke-width="${sw}"/>
         <path d="M${cx},${cy-r} A${r},${r},0,0,0,${cx},${cy+r} A${r*0.15},${r},0,0,1,${cx},${cy-r} Z" fill="${lit}"/>`,
    ];
    return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" style="overflow:visible;display:block">${phases[phase]}</svg>`;
}

// populate moon ring — 24 phases (3 full cycles)
const moonRing = document.getElementById('moonRing');
const MOON_R = 163;
for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
    const x = C + MOON_R * Math.cos(a);
    const y = C + MOON_R * Math.sin(a);
    const d = document.createElement('div');
    d.style.cssText = `position:absolute;left:${(x-11).toFixed(1)}px;top:${(y-11).toFixed(1)}px;width:22px;height:22px;overflow:visible;`;
    d.innerHTML = moonSVG(i % 8);
    moonRing.appendChild(d);
}

// ─── Zodiac Glyph Paths (from Zodiac-Sign.svg) ────────────
// Each entry: [viewBox, pathsHTML] — filled paths, no stroke needed
const zodiacDefs = [
    // Aries ♈
    ["176 70 25 35", `<path fill="${PG}" d="M192.36,71.07c-4.11,0-6.26,1.99-7.36,4.95c-1.11-2.96-3.25-4.95-7.36-4.95c-4.53,0-6.98,3.74-6.98,7.27c0,1.48.45,2.84,1.26,3.84c.94,1.16,2.3,1.78,3.93,1.78c.62,0,1.13-.5,1.13-1.13s-.5-1.13-1.13-1.13c-.94,0-1.67-.32-2.18-.94c-.48-.6-.75-1.45-.75-2.42c0-2.43,1.66-5.01,4.72-5.01c3.92,0,6.19,1.83,6.23,11.18c0,.9.01,1.81.01,2.71c-.01,4.42-.01,8.65,0,11.85c0,.73,0,1.43,0,2.04l0,2.81c0,.62.5,1.13,1.13,1.13c0,0,.01,0,.01,0c0,0,.01,0,.01,0c.62,0,1.13-.5,1.13-1.13l0-2.81c0-.61,0-1.31,0-2.04c.01-3.2.01-7.43,0-11.85c0-.9,0-1.8.01-2.71c.04-9.35,2.31-11.18,6.23-11.18c3.07,0,4.72,2.58,4.72,5.01c0,.96-.27,1.82-.75,2.42c-.51.63-1.24.94-2.18.94c-.62,0-1.13.5-1.13,1.13s.5,1.13,1.13,1.13c1.63,0,2.99-.61,3.93-1.78c.81-1,1.26-2.36,1.26-3.84C199.33,74.82,196.89,71.07,192.36,71.07z"/>`],
    // Taurus ♉
    ["232 70 30 31", `<path fill="${PG}" d="M261.16,71.52c0-.62-.5-1.13-1.13-1.13s-1.13.5-1.13,1.13c0,4.49-8.64,4.84-11.29,4.84c-2.65,0-11.29-.35-11.29-4.84c0-.62-.5-1.13-1.13-1.13c-.62,0-1.13.5-1.13,1.13c0,3.5,2.82,5.79,8.06,6.68c-2.97,2.15-4.96,5.99-4.96,10.36c0,6.73,4.69,12.2,10.44,12.2c5.76,0,10.44-5.47,10.44-12.2c0-4.38-1.99-8.21-4.96-10.36C258.34,77.31,261.16,75.02,261.16,71.52zM255.81,88.56c0,5.49-3.67,9.95-8.19,9.95c-4.52,0-8.19-4.46-8.19-9.95c0-5.49,3.67-9.95,8.19-9.95C252.13,78.61,255.81,83.08,255.81,88.56z"/>`],
    // Gemini ♊
    ["44 128 24 37", `<path fill="${PG}" d="M61.85,156.12v-16.28c2.99-1.55,5.01-4.37,5.01-7.59c0-.62-.5-1.13-1.13-1.13s-1.13.5-1.13,1.13c0,3.64-3.58,6.59-7.98,6.59s-7.98-2.96-7.98-6.59c0-.62-.5-1.13-1.13-1.13s-1.13.5-1.13,1.13c0,3.3,2.11,6.18,5.22,7.7v16.07c-3.11,1.52-5.22,4.4-5.22,7.7c0,.62.5,1.13,1.13,1.13s1.13-.5,1.13-1.13c0-3.64,3.58-6.59,7.98-6.59s7.98,2.96,7.98,6.59c0,.62.5,1.13,1.13,1.13s1.13-.5,1.13-1.13C66.86,160.48,64.85,157.66,61.85,156.12zM53.87,155.2v-14.45c.88.21,1.8.34,2.76.34c1.03,0,2.03-.14,2.97-.38v14.54c-.94-.25-1.94-.38-2.97-.38C55.67,154.86,54.75,154.99,53.87,155.2z"/>`],
    // Cancer ♋
    ["104 137 34 33", `<path fill="${PG}" d="M136.99,155.14c0-.01,0-.02,0-.04c0-.02-.01-.03-.01-.05c-.06-4.13-3.42-7.47-7.57-7.47c-4.18,0-7.58,3.4-7.58,7.58s3.4,7.58,7.58,7.58c.38,0,.74-.06,1.11-.11c-1.29.89-2.83,1.62-4.63,2.1c-6.28,1.7-14.55.15-18.19-6.09c-.31-.54-1-.72-1.54-.41c-.54.31-.72,1-.41,1.54c3.19,5.47,9.35,7.85,15.24,7.85c1.89,0,3.75-.25,5.48-.71c6.44-1.74,10.45-6.22,10.5-11.7c0-.01,0-.03,0-.04C136.99,155.15,136.99,155.14,136.99,155.14zM124.09,155.15c0-2.94,2.39-5.32,5.32-5.32c2.93,0,5.31,2.37,5.32,5.3c0,.2-.04.38-.05.57c-.28,2.68-2.52,4.78-5.27,4.78C126.48,160.47,124.09,158.09,124.09,155.15z"/><path fill="${PG}" d="M105.62,146.32c.06,4.13,3.42,7.47,7.57,7.47c4.18,0,7.58-3.4,7.58-7.58s-3.4-7.58-7.58-7.58c-.38,0-.74.06-1.11.11c1.29-.89,2.83-1.62,4.63-2.1c6.28-1.7,14.55-.15,18.19,6.09c.31.54,1,.72,1.54.41c.54-.31.72-1,.41-1.54c-4.21-7.22-13.61-9.06-20.72-7.13c-6.44,1.74-10.45,6.22-10.5,11.7c0,.01,0,.03,0,.04c0,.01,0,.01,0,.02c0,.01,0,.02,0,.04C105.61,146.29,105.62,146.31,105.62,146.32zM118.51,146.22c0,2.94-2.39,5.32-5.32,5.32c-2.93,0-5.31-2.37-5.32-5.3c0-.2.04-.38.05-.57c.28-2.68,2.52-4.78,5.27-4.78C116.12,140.9,118.51,143.29,118.51,146.22z"/>`],
    // Leo ♌
    ["104 194 42 35", `<path fill="${PG}" d="M144.59,225.78c.02-.12.02-.24,0-.36c0-.01,0-.02,0-.03c-.03-.17-.09-.34-.2-.48l-3.4-4.55c-.37-.5-1.08-.6-1.58-.23c-.5.37-.6,1.08-.23,1.58l1.74,2.33c-4.14-.12-4.89-2.19-4.89-21.06c0-2.83-2.16-7.01-6.81-7.01c-2.79,0-4.78,1.36-5.91,3.18c-1.08-1.75-2.94-3.18-5.66-3.18c-3.07,0-5.17,1.66-6.22,3.77c-1.94-3.1-5.28-4.23-6.73-4.23c-.62,0-1.12.5-1.12,1.12c0,.62.5,1.13,1.12,1.13c.06,0,5.94.83,5.94,7.42v17.4c0,.62.5,1.13,1.13,1.13s1.13-.5,1.13-1.13v-19.61c0-2.36,1.64-4.76,4.76-4.76c3.11,0,4.55,2.84,4.55,4.76v19.61c0,.62.5,1.13,1.13,1.13s1.13-.5,1.13-1.13v-19.61c0-2.36,1.64-4.76,4.76-4.76c3.11,0,4.55,2.84,4.55,4.76c0,17.75.3,22.9,6.76,23.28l-2.38,1.62c-.52.35-.65,1.05-.3,1.57c.22.32.57.49.93.49c.22,0,.44-.06.63-.2l4.69-3.19c.15-.1.26-.24.34-.39c.01-.01.01-.02.01-.03C144.52,226.02,144.57,225.9,144.59,225.78z"/>`],
    // Virgo ♍
    ["166 126 38 48", `<path fill="${PG}" d="M202.36,161.97c-.62,0-1.13.5-1.13,1.13c0,1.2-.22,7.21-4.64,7.21c-3.29,0-5.33-3.93-5.33-7.57c0-3.21.98-6.05,2.02-9.06c1.22-3.55,2.49-7.21,2.49-12.03c0-4.21-.83-13.99-8.52-13.99c-2.47,0-4.54.84-6.15,2.49c-4.45,4.55-4.23,14.02-4.1,19.67c.01.37.02.72.02,1.04c-.24-.02-.46-.07-.71-.07c-4.42,0-8.02,3.6-8.02,8.02s3.6,8.02,8.02,8.02c4.42,0,8.02-3.6,8.02-8.02c0-3.37-2.1-6.25-5.05-7.43c0-.48-.02-1.01-.03-1.61c-.11-4.95-.33-14.17,3.46-18.04c1.19-1.22,2.67-1.81,4.54-1.81c5.66,0,6.27,8.21,6.27,11.74c0,4.44-1.2,7.92-2.36,11.29c-1.1,3.19-2.14,6.21-2.14,9.8c0,4.83,2.84,9.83,7.58,9.83c4.19,0,6.89-3.71,6.89-9.46C203.48,162.47,202.98,161.97,202.36,161.97zM182.08,158.79c0,3.18-2.59,5.76-5.76,5.76c-3.18,0-5.76-2.59-5.76-5.76s2.59-5.76,5.76-5.76C179.49,153.02,182.08,155.61,182.08,158.79z"/>`],
    // Libra ♎
    ["42 199 40 28", `<path fill="${PG}" d="M79.36,226.03H44.23c-.62,0-1.13-.5-1.13-1.13c0-.62.5-1.13,1.13-1.13h35.13c.62,0,1.13.5,1.13,1.13C80.49,225.53,79.98,226.03,79.36,226.03z"/><path fill="${PG}" d="M79.49,215.01l-8.92-.05c.84-1.46,1.29-3.13,1.29-4.84c0-5.35-4.36-9.71-9.71-9.71s-9.71,4.36-9.71,9.71c0,1.74.46,3.42,1.34,4.91L44.24,215c-.62,0-1.13.5-1.13,1.13c0,.62.5,1.13,1.13,1.13l11.8.04c.45,0,.77-.36.95-.77c.18-.41.01-.98-.29-1.31c-1.3-1.39-2.01-3.2-2.01-5.1c0-4.11,3.35-7.46,7.46-7.46s7.46,3.34,7.46,7.46c0,1.85-.68,3.62-1.91,4.98l-.18.2c-.31.32-.4.8-.22,1.22c.18.41.58.68,1.03.69l11.15.06c.62,0,1.12-.5,1.13-1.12C80.61,215.52,80.11,215.01,79.49,215.01z"/>`],
    // Scorpio ♏
    ["224 133 42 41", `<path fill="${PG}" d="M264.95,147.78c0-1.66-.4-2.98-1.2-3.93c-.75-.89-1.79-1.38-2.94-1.38c-.69,0-1.39.2-2.02.55l0-.47c0-2.83-2.16-7.01-6.81-7.01c-2.78,0-4.78,1.36-5.91,3.18c-1.08-1.75-2.94-3.18-5.66-3.18c-3.07,0-5.17,1.66-6.22,3.77c-1.94-3.1-5.28-4.23-6.73-4.23c-.62,0-1.12.5-1.12,1.12c0,.62.5,1.13,1.12,1.13c.06,0,5.94.83,5.94,7.42v17.4c0,.62.5,1.13,1.13,1.13c.62,0,1.13-.5,1.13-1.13v-19.61c0-2.36,1.64-4.76,4.76-4.76c3.11,0,4.55,2.84,4.55,4.76v19.61c0,.62.5,1.13,1.13,1.13c.62,0,1.13-.5,1.13-1.13v-19.61c0-2.36,1.63-4.76,4.76-4.76c3.11,0,4.55,2.84,4.55,4.76l0,2.73c.01,7.73,0,12.76-.53,16.46c-1.94,1.83-4.09,3.02-6.17,3.02c-.62,0-1.13.5-1.13,1.13c0,.62.5,1.13,1.13,1.13c1.87,0,3.67-.66,5.36-1.74c-.74,2.16-1.88,3.86-3.65,5.63c-.44.44-.44,1.15,0,1.59c.22.22.51.33.8.33c.29,0,.58-.11.8-.33c2.86-2.86,4.27-5.54,4.97-9.61C262.17,158.75,264.95,152.33,264.95,147.78zM258.78,146.93c0-.04.02-.08.02-.12c0-1.29,1.04-2.08,2-2.08c.33,0,.82.1,1.21.57c.44.53.68,1.39.68,2.48c0,3.43-1.69,7.67-4.14,11.06C258.76,155.71,258.79,151.86,258.78,146.93z"/>`],
    // Sagittarius ♐
    ["162 197 39 36", `<path fill="${PG}" d="M199.88,198.75c-.03-.05-.07-.08-.11-.13c-.04-.04-.08-.08-.13-.11c-.27-.21-.61-.31-.96-.22l-10.78,2.74c-.6.15-.97.77-.82,1.37c.13.51.59.85,1.09.85c.09,0,.18-.01.28-.04l6.82-1.73l-20.95,20.95l-4.17-4.17c-.44-.44-1.15-.44-1.59,0c-.44.44-.44,1.15,0,1.59l4.17,4.17l-3.21,3.21c-.44.44-.44,1.15,0,1.59c.22.22.51.33.8.33s.58-.11.8-.33l3.21-3.21l4.17,4.17c.22.22.51.33.8.33c.29,0,.58-.11.8-.33c.44-.44.44-1.15,0-1.59l-4.17-4.17l20.98-20.98l-1.78,6.87c-.16.6.21,1.22.81,1.37c.09.02.19.04.28.04c.5,0,.96-.34,1.09-.84l2.8-10.77C200.19,199.36,200.09,199.02,199.88,198.75z"/>`],
    // Capricorn ♑
    ["228 192 38 41", `<path fill="${PG}" d="M258.22,212.38c-4.94,0-5.93,4.31-6.87,8.5c-.29-1.32-.45-2.95-.45-4.95v-14.86c0-2.83-2.16-7.02-6.81-7.02c-3.07,0-5.17,1.66-6.22,3.77c-1.94-3.1-5.28-4.23-6.73-4.23c-.62,0-1.12.5-1.12,1.12s.5,1.13,1.12,1.13c.06,0,5.94.83,5.94,7.42v17.4c0,.62.5,1.13,1.13,1.13s1.13-.5,1.13-1.13v-19.61c0-2.37,1.64-4.76,4.76-4.76c3.11,0,4.55,2.84,4.55,4.76v14.86c0,3.8.57,6.74,1.73,8.84c-1.37,4.42-3.96,8.12-12.02,8.12c-.62,0-1.13.5-1.13,1.13c0,.62.5,1.13,1.13,1.13c8.55,0,11.95-3.94,13.66-8.29c1.41,1.24,3.26,1.86,5.57,1.86c2.16,0,3.97-.95,5.22-2.74c1.04-1.49,1.61-3.47,1.61-5.58C264.41,216.41,262.29,212.38,258.22,212.38zM260.96,224.68c-.82,1.18-1.96,1.78-3.37,1.78c-1.66,0-3.45-.34-4.76-2.07c.28-1.01.5-2,.71-2.94c1-4.48,1.66-6.82,4.68-6.82c2.59,0,3.94,2.89,3.94,5.75C262.16,222.02,261.72,223.58,260.96,224.68z"/>`],
    // Aquarius ♒
    ["34 73 40 31", `<path fill="${PG}" d="M71.84,90.88c-.14-.32-.41-.56-.74-.65c-.34-.09-.69-.02-.97.18l-8.19,6.08l-2.39-5.61c-.14-.32-.41-.56-.74-.65c-.34-.09-.69-.02-.97.18l-8.13,6.04l-2.37-5.58c-.14-.32-.41-.56-.74-.65c-.33-.09-.69-.02-.97.18l-9.28,6.89c-.5.37-.6,1.08-.23,1.58c.37.5,1.08.6,1.58.23l8.13-6.04l2.37,5.58c.08.11.18.2.29.27c.09.05.18.08.28.1c.22-.01.44-.06.64-.2l8.13-6.04l2.37,5.58c.17.39.53.63.93.67c.22-.01.44-.06.64-.2l8.13-6.04l2.37,5.58c.18.43.6.69,1.04.69c.57-.25.84-.91.6-1.48L71.84,90.88z"/><path fill="${PG}" d="M37.69,84.24l8.13-6.04l2.37,5.58c.08.11.18.2.29.27c.09.05.18.08.28.1c.22-.01.44-.06.64-.2l8.13-6.04l2.37,5.58c.17.39.53.63.93.67c.22-.01.44-.06.64-.2l8.13-6.04l2.37,5.58c.18.43.6.69,1.04.69c.57-.25.84-.91.6-1.48L71.84,76c-.14-.32-.41-.56-.74-.65c-.34-.09-.69-.02-.97.18l-8.19,6.08L59.55,76c-.14-.32-.41-.56-.74-.65c-.34-.09-.69-.02-.97.18l-8.13,6.04L47.33,76c-.14-.32-.41-.56-.74-.65c-.33-.09-.69-.02-.97.18l-9.28,6.89c-.5.37-.6,1.08-.23,1.58C36.48,84.51,37.19,84.61,37.69,84.24z"/>`],
    // Pisces ♓
    ["108 70 34 33", `<path fill="${PG}" d="M140.26,99.59c-4.87,0-8.95-4.48-9.87-10.41h6.76c.62,0,1.13-.5,1.13-1.13s-.5-1.13-1.13-1.13h-6.95c0-.1-.01-.2-.01-.31c0-7.15,4.52-12.97,10.07-12.97c.62,0,1.13-.5,1.13-1.13c0-.62-.5-1.13-1.13-1.13c-6.8,0-12.33,6.83-12.33,15.23c0,.1.01.2.01.31h-3.43c0-.1.01-.2.01-.31c0-8.4-5.53-15.23-12.33-15.23c-.62,0-1.13.5-1.13,1.13c0,.62.5,1.13,1.13,1.13c5.55,0,10.07,5.82,10.07,12.97c0,.1-.01.2-.01.31h-6.95c-.62,0-1.13.5-1.13,1.13s.5,1.13,1.13,1.13h6.76c-.93,5.93-5,10.41-9.87,10.41c-.62,0-1.13.5-1.13,1.13c0,.62.5,1.13,1.13,1.13c6.09,0,11.15-5.49,12.14-12.67h3.78c.99,7.18,6.05,12.67,12.14,12.67c.62,0,1.13-.5,1.13-1.13C141.39,100.09,140.88,99.59,140.26,99.59z"/>`],
];

// populate zodiac ring
const zodiacRing = document.getElementById('zodiacRing');
const ZODIAC_R = 120;
for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const x = C + ZODIAC_R * Math.cos(a);
    const y = C + ZODIAC_R * Math.sin(a);
    const d = document.createElement('div');
    d.style.cssText = `position:absolute;left:${(x-19).toFixed(1)}px;top:${(y-19).toFixed(1)}px;width:38px;height:38px;`;
    const [vb, pathContent] = zodiacDefs[i];
    d.innerHTML = `<div class="zodiac-medallion"><svg width="25" height="25" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${pathContent}</svg></div>`;
    zodiacRing.appendChild(d);
}

// ─── 12-section division lines ────────────────────────────
const divSvg = document.getElementById('divSvg');
let lines = '';
for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r1 = 83, r2 = 148; // between center face edge and zodiac inner edge
    const x1 = (C + r1 * Math.cos(a)).toFixed(1);
    const y1 = (C + r1 * Math.sin(a)).toFixed(1);
    const x2 = (C + r2 * Math.cos(a)).toFixed(1);
    const y2 = (C + r2 * Math.sin(a)).toFixed(1);
    lines += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(188,137,9,0.2)" stroke-width="0.8"/>`;
}

// constellation dots — small clusters at r=100, 12 positions
const constellations = [
    [[0,0],[4,3],[8,1],[6,-4]],           // Aries
    [[0,0],[-3,4],[4,5],[1,-4]],          // Taurus
    [[0,0],[5,2],[5,-3],[-4,3]],          // Gemini
    [[0,0],[-4,-3],[3,-4],[-2,4]],        // Cancer
    [[0,0],[4,4],[6,0],[2,-4],[6,-2]],    // Leo
    [[0,0],[-3,4],[-5,0],[2,5]],          // Virgo
    [[0,0],[4,-3],[0,5],[-4,2]],          // Libra
    [[0,0],[3,4],[-3,4],[4,-3]],          // Scorpio
    [[0,0],[-4,3],[4,2],[0,-5]],          // Sagittarius
    [[0,0],[5,1],[-2,4],[3,-3]],          // Capricorn
    [[0,0],[-4,-2],[4,3],[-1,5],[5,-1]],  // Aquarius
    [[0,0],[3,4],[-3,4],[0,-5]],          // Pisces
];

const CONST_R = 99;
for (let i = 0; i < 12; i++) {
    const baseA = ((i + 0.5) / 12) * Math.PI * 2 - Math.PI / 2;
    const bx = C + CONST_R * Math.cos(baseA);
    const by = C + CONST_R * Math.sin(baseA);
    const pts = constellations[i];
    for (let j = 0; j < pts.length - 1; j++) {
        lines += `<line x1="${(bx+pts[j][0]).toFixed(1)}" y1="${(by+pts[j][1]).toFixed(1)}" x2="${(bx+pts[j+1][0]).toFixed(1)}" y2="${(by+pts[j+1][1]).toFixed(1)}" stroke="rgba(232,209,182,0.45)" stroke-width="0.7"/>`;
    }
    pts.forEach(([dx, dy]) => {
        lines += `<circle cx="${(bx+dx).toFixed(1)}" cy="${(by+dy).toFixed(1)}" r="1.4" fill="rgba(232,209,182,0.88)"/>`;
    });
}
divSvg.innerHTML = lines;

// ─── Sun Face ─────────────────────────────────────────────
function buildSun() {
    const svg = document.getElementById('sunSvg');
    const cx = 55, cy = 55;
    let content = '';

    // outer glow ring
    content += `<circle cx="${cx}" cy="${cy}" r="50" fill="none" stroke="rgba(188,137,9,0.08)" stroke-width="2"/>`;

    // rays — 16 triangular points
    for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        const isLong = i % 2 === 0;
        const rOuter = isLong ? 52 : 44;
        const rInner = 30;
        const hw = 0.12; // half-width in radians
        const tipX = (cx + rOuter * Math.cos(a)).toFixed(2);
        const tipY = (cy + rOuter * Math.sin(a)).toFixed(2);
        const lx = (cx + rInner * Math.cos(a - hw)).toFixed(2);
        const ly = (cy + rInner * Math.sin(a - hw)).toFixed(2);
        const rx = (cx + rInner * Math.cos(a + hw)).toFixed(2);
        const ry = (cy + rInner * Math.sin(a + hw)).toFixed(2);
        content += `<polygon points="${tipX},${tipY} ${lx},${ly} ${rx},${ry}" fill="${G}" opacity="${isLong ? 0.92 : 0.65}"/>`;
    }

    // face circle
    content += `<circle cx="${cx}" cy="${cy}" r="28" fill="${N}" stroke="${G}" stroke-width="1.5"/>`;
    content += `<circle cx="${cx}" cy="${cy}" r="24" fill="none" stroke="rgba(188,137,9,0.15)" stroke-width="0.6"/>`;

    // brow lines (slightly arched)
    content += `<path d="M44,48 C46,45 49,44 52,45" stroke="${G}" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.7"/>`;
    content += `<path d="M58,45 C61,44 64,45 66,48" stroke="${G}" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.7"/>`;

    // eyes — almond shapes
    content += `<path d="M43,52 C45.5,48.5 50.5,48.5 53,52 C50.5,55.5 45.5,55.5 43,52 Z" fill="${G}" opacity="0.88"/>`;
    content += `<circle cx="48" cy="52" r="2" fill="${N}"/>`;
    content += `<path d="M57,52 C59.5,48.5 64.5,48.5 67,52 C64.5,55.5 59.5,55.5 57,52 Z" fill="${G}" opacity="0.88"/>`;
    content += `<circle cx="62" cy="52" r="2" fill="${N}"/>`;

    // nose — classic pointed arch
    content += `<path d="M53,56 L55,62 L57,56" stroke="${G}" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.65"/>`;

    // mouth — open smile arc
    content += `<path d="M47,67 C50,72 60,72 63,67" stroke="${G}" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>`;
    content += `<path d="M50,69.5 C52.5,72 57.5,72 60,69.5" stroke="${G}" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.5"/>`;

    svg.innerHTML = content;
}

// ─── Moon Face ────────────────────────────────────────────
function buildMoon() {
    const svg = document.getElementById('moonSvg');
    const content = `
        <defs>
            <linearGradient id="moonGold" x1="50" y1="26" x2="86" y2="84" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f1dd9a"/>
                <stop offset="0.42" stop-color="#d4a82a"/>
                <stop offset="1" stop-color="#9a7115"/>
            </linearGradient>
            <path id="centerCrescent" d="M57,27 A28,28,0,0,1,57,83 A12,28,0,0,0,57,27 Z"/>
            <clipPath id="centerCrescentClip">
                <use href="#centerCrescent"/>
            </clipPath>
        </defs>

        <g filter="drop-shadow(0 0 5px rgba(212,168,42,0.42))">
            <use href="#centerCrescent" fill="url(#moonGold)"/>
            <use href="#centerCrescent" fill="none" stroke="#f1dd9a" stroke-width="1.4" opacity="0.86"/>
            <path d="M57,27 A12,28,0,0,0,57,83" fill="none" stroke="#07101d" stroke-width="1.3" opacity="0.72"/>
            <g clip-path="url(#centerCrescentClip)">
                <path d="M66,43 C70,40 77,40 81,44" stroke="#07101d" stroke-width="1.35" fill="none" stroke-linecap="round" opacity="0.72"/>
                <path d="M64,50 C69,46 80,46 85,50 C80,54 69,54 64,50 Z" fill="#07101d" opacity="0.82"/>
                <circle cx="75" cy="50" r="1.6" fill="#e8cc80" opacity="0.58"/>
                <path d="M69,57 C71,61 73,63 77,63" stroke="#07101d" stroke-width="1.1" fill="none" stroke-linecap="round" opacity="0.68"/>
                <path d="M66,69 C70,73 81,73 86,68" stroke="#07101d" stroke-width="1.35" fill="none" stroke-linecap="round" opacity="0.78"/>
            </g>
        </g>
    `;
    svg.innerHTML = content;
}

// ─── Night Sky ────────────────────────────────────────────
function buildSky() {
    const canvas = document.getElementById('skyCanvas');
    canvas.width = 380;
    canvas.height = 380;
    const ctx = canvas.getContext('2d');

    // radial gradient background
    const grad = ctx.createRadialGradient(190, 220, 0, 190, 190, 192);
    grad.addColorStop(0,    '#1e3a6e');
    grad.addColorStop(0.3,  '#132442');
    grad.addColorStop(0.65, '#0d1a30');
    grad.addColorStop(1,    '#06090f');
    ctx.beginPath();
    ctx.arc(190, 190, 190, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Milky Way diagonal haze — gold-dusted band
    for (let i = 0; i < 260; i++) {
        const t = i / 260;
        const bx = t * 420 - 20;
        const by = bx * 0.45 + Math.random() * 100 - 30;
        const dist = Math.hypot(bx - 190, by - 190);
        if (dist > 186) continue;
        const sz = Math.random() * 0.9 + 0.15;
        const op = Math.random() * 0.22 + 0.04;
        ctx.beginPath();
        ctx.arc(bx, by, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(188,137,9,${op.toFixed(3)})`;
        ctx.fill();
    }

    // main starfield
    for (let i = 0; i < 380; i++) {
        const a = Math.random() * Math.PI * 2;
        const d = Math.random() * 186;
        const x = 190 + d * Math.cos(a);
        const y = 190 + d * Math.sin(a);
        const sz = Math.random() * 1.4 + 0.2;
        const op = Math.random() * 0.65 + 0.15;
        const r = Math.random();
        let col;
        if (r > 0.92)     col = `rgba(188,137,9,${op.toFixed(3)})`;   // gold
        else if (r > 0.8) col = `rgba(99,125,146,${op.toFixed(3)})`;  // blue-fog
        else              col = `rgba(232,209,182,${op.toFixed(3)})`; // lunar beige
        ctx.beginPath();
        ctx.arc(x, y, sz, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.fill();
    }

    // bright star highlights
    [[75,65],[305,85],[140,295],[265,305],[48,205],[335,175],[195,45],[290,240],[85,270],[155,140]].forEach(([x, y]) => {
        if (Math.hypot(x - 190, y - 190) > 184) return;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232,209,182,0.95)';
        ctx.fill();
        // tiny cross on brightest stars
        ctx.strokeStyle = 'rgba(232,209,182,0.3)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x - 5, y); ctx.lineTo(x + 5, y);
        ctx.moveTo(x, y - 5); ctx.lineTo(x, y + 5);
        ctx.stroke();
    });

    // soft inner glow (center brighter)
    const innerGlow = ctx.createRadialGradient(190, 190, 0, 190, 190, 90);
    innerGlow.addColorStop(0, 'rgba(26,58,99,0.35)');
    innerGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(190, 190, 90, 0, Math.PI * 2);
    ctx.fillStyle = innerGlow;
    ctx.fill();
}

// ─── Init ─────────────────────────────────────────────────
buildSky();
buildSun();
buildMoon();

// ─── Wheel Spin Controller ────────────────────────────────
(function () {
    const wheel        = document.getElementById('wheel');
    const moonRingEl   = document.getElementById('moonRing');
    const zodiacRingEl = document.getElementById('zodiacRing');

    const FAST_VEL  = 2.4;   // degrees per frame at peak
    const SPIN_MS   = 2000;  // ms at full speed before decelerating
    const DECEL     = 0.981; // velocity multiplier per frame while slowing
    const STOP_AT   = 0.05;  // deg/frame threshold considered stopped

    let moonAngle    = 0;
    let zodiacAngle  = 0;
    let velocity     = 0;
    let decelerating = false;
    let rafId        = null;
    let spinTimer    = null;

    function readAngle(el) {
        const t = window.getComputedStyle(el).transform;
        if (!t || t === 'none') return 0;
        const m = t.match(/matrix\(([^)]+)\)/);
        if (!m) return 0;
        const parts = m[1].split(',').map(Number);
        return Math.atan2(parts[1], parts[0]) * (180 / Math.PI);
    }

    function tick() {
        if (decelerating) {
            velocity *= DECEL;
            if (velocity < STOP_AT) {
                cancelAnimationFrame(rafId);
                rafId        = null;
                velocity     = 0;
                decelerating = false;
                wheel.classList.remove('on');
                moonRingEl.style.transform   = '';
                zodiacRingEl.style.transform = '';
                moonRingEl.style.animation   = '';
                zodiacRingEl.style.animation = '';
                return;
            }
        }

        moonAngle   -= velocity * 0.55;
        zodiacAngle += velocity;
        moonRingEl.style.transform   = `translate(-50%,-50%) rotate(${moonAngle}deg)`;
        zodiacRingEl.style.transform = `translate(-50%,-50%) rotate(${zodiacAngle}deg)`;
        rafId = requestAnimationFrame(tick);
    }

    wheel.addEventListener('click', function () {
        clearTimeout(spinTimer);

        if (!rafId) {
            // First click or after full stop — capture current CSS angle to avoid snap
            moonAngle   = readAngle(moonRingEl);
            zodiacAngle = readAngle(zodiacRingEl);
            moonRingEl.style.transform   = `translate(-50%,-50%) rotate(${moonAngle}deg)`;
            zodiacRingEl.style.transform = `translate(-50%,-50%) rotate(${zodiacAngle}deg)`;
            moonRingEl.style.animation   = 'none';
            zodiacRingEl.style.animation = 'none';
            rafId = requestAnimationFrame(tick);
        }

        wheel.classList.add('on');
        velocity     = FAST_VEL;
        decelerating = false;

        spinTimer = setTimeout(function () {
            decelerating = true;
        }, SPIN_MS);
    });
}());
