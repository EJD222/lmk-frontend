/**
 * lmk canonical color palette.
 *
 * This is the single source of truth for color values referenced *outside*
 * Tailwind utility classes — inline `style` props, canvas/html2canvas options,
 * JS color arrays, etc. Anywhere a raw hex string would otherwise be typed,
 * pull it from `LMK_COLORS` instead.
 *
 * These hex values mirror two other places that *must* stay in sync:
 *   - the `lmk` color tokens in `tailwind.config.js` (drives `bg-lmk-blue`,
 *     `text-lmk-ink/40`, etc. — prefer these utility classes when you can)
 *   - the `--lmk-*` custom properties in `src/styles/index.css` (used by
 *     hand-written CSS in `src/styles/app.css` that Tailwind can't reach)
 *
 * If you need to change a value, update it in all three places.
 */
export const LMK_COLORS = {
  // ---- wordmark — dedicated colour for the "lmk" logo/typeface ONLY
  wordmark: "#061386",

  // ---- blue family — primary actions, links, focus states, brand accents
  blue: "#071AB8",
  blueMid: "#0820EA",
  blueSoft: "#1B31F2",
  bluePale: "#2D42F9",
  blueLight: "#8C97FC",

  // ---- paper / neutral family — page surfaces, cards, panels
  paper: "#F5F0E8",
  paperWarm: "#EDE6D6",
  paperDark: "#2C2A26",
  cream: "#fcf7e8",

  // ---- ink family — text, borders, outlines, dark surfaces
  ink: "#111111",
  brown: "#2E2922",
  espresso: "#0C0B0A",
} as const;

export type LmkColorName = keyof typeof LMK_COLORS;

/** Ring colours for the loading dots — monotone blue gradient + soft accent. */
export const DOT_COLORS = [
  LMK_COLORS.blue,
  LMK_COLORS.blueMid,
  LMK_COLORS.blueSoft,
  LMK_COLORS.bluePale,
] as const;
