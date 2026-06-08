/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Handwritten display face — headers, wordmark, big numbers, "non-text" flourishes
        display: ['"Kids Handwritten"', '"Comic Sans MS"', "cursive"],
        // Wordmark face — reserved for the "lmk" title only
        wordmark: ['"Brown Cookies"', '"Kids Handwritten"', "cursive"],
        // Clean sans for body / UI / inputs — distinguished by weight only
        brand: ["Outfit", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Hand-drawn "sketch" corners — irregular organic radii
        sketch: "275px 8px 245px 12px / 8px 245px 10px 275px",
        "sketch-alt": "10px 245px 8px 275px / 275px 10px 245px 12px",
        "sketch-soft": "205px 18px 215px 20px / 18px 215px 20px 205px",
        "sketch-pill": "80px 4px 75px 5px / 4px 75px 5px 80px",
      },
      boxShadow: {
        // Excalidraw-style hard ink offset shadows
        sketch: "4px 6px 0 rgba(17,17,17,0.15)",
        "sketch-sm": "2px 3px 0 rgba(17,17,17,0.12)",
        "sketch-lg": "8px 12px 0 rgba(17,17,17,0.18)",
        "sketch-blue": "4px 6px 0 rgba(21,41,214,0.28)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(5deg)" },
        },
        "scribble-in": {
          "0%": { opacity: "0", transform: "translateY(40px) rotate(-2deg) scale(1.08)" },
          "60%": { opacity: "1", transform: "translateY(-4px) rotate(0.5deg) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(0deg) scale(1)" },
        },
        "bounce-up": {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(-6px)" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "0.35" },
          "50%": { transform: "scale(1.4) rotate(45deg)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scribble-in": "scribble-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "bounce-up": "bounce-up 2s ease-in-out infinite",
      },
      colors: {
        lmk: {
          // Repointed to the deep-blue scrapbook palette (4-stop gradient
          // sourced from #061386 → #2D42F9). Names kept stable so existing
          // utility classes adopt the new look automatically.
          primary: "#071AB8", // blue — primary actions
          secondary: "#071AB8", // blue — unified blue
          tertiary: "#0820EA", // blue-mid
          "tertiary-fg": "#FFFFFF",
          accent: "#2D42F9", // blue-pale
          "accent-fg": "#071AB8",
          light: "#F5F0E8", // paper
          dark: "#111111", // ink
          // Explicit semantic aliases for new code
          wordmark: "#061386", // dedicated "lmk" logo/typeface colour — darkest stop, used ONLY for the wordmark
          blue: "#071AB8",
          "blue-mid": "#0820EA",
          "blue-soft": "#1B31F2", // interpolated midpoint between blue-mid & blue-pale (gradients, loading rings)
          "blue-pale": "#2D42F9",
          "blue-light": "#8C97FC", // lightest blue stop — legible accents on dark/espresso surfaces
          paper: "#F5F0E8",
          "paper-warm": "#EDE6D6",
          "paper-dark": "#2C2A26",
          cream: "#FDFAF2", // warm off-white — cards, inputs, modals, sliders
          ink: "#111111",
          brown: "#2E2922", // underline ink — solid/dashed emphasis strokes
          espresso: "#0C0B0A", // darkest surface — full-bleed dark screens
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
