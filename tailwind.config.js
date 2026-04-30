/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#dce1fb",
        "on-secondary": "#283044",
        "on-error": "#690005",
        "on-background": "#dce1fb",
        "surface-bright": "#33394c",
        "primary-container": "#1e60ff",
        "surface-container-highest": "#2e3447",
        "on-primary-fixed-variant": "#003bb0",
        "on-error-container": "#ffdad6",
        "tertiary-fixed": "#e1e0ff",
        "surface-container-low": "#151b2d",
        "on-primary-fixed": "#00164f",
        "error-container": "#93000a",
        "on-tertiary-fixed-variant": "#2f2ebe",
        "inverse-surface": "#dce1fb",
        "surface-container-high": "#23293c",
        "inverse-primary": "#004fe5",
        "primary-fixed": "#dce1ff",
        "on-tertiary": "#1000a9",
        "on-secondary-fixed-variant": "#3f465c",
        "tertiary-fixed-dim": "#c0c1ff",
        "secondary-fixed-dim": "#bec6e0",
        "surface-container": "#191f31",
        "secondary": "#bec6e0",
        "outline": "#8d90a2",
        "surface-variant": "#2e3447",
        "primary": "#b6c4ff",
        "on-tertiary-fixed": "#07006c",
        "surface-dim": "#0c1324",
        "secondary-container": "#3f465c",
        "on-tertiary-container": "#f4f1ff",
        "on-secondary-fixed": "#131b2e",
        "on-primary-container": "#f2f2ff",
        "background": "#0c1324",
        "on-surface-variant": "#c3c5d9",
        "on-secondary-container": "#adb4ce",
        "surface-tint": "#b6c4ff",
        "secondary-fixed": "#dae2fd",
        "inverse-on-surface": "#2a3043",
        "surface": "#0c1324",
        "surface-container-lowest": "#070d1f",
        "tertiary": "#c0c1ff",
        "primary-fixed-dim": "#b6c4ff",
        "error": "#ffb4ab",
        "outline-variant": "#434656",
        "on-primary": "#00287e",
        "tertiary-container": "#5a5de8"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "container-max-width": "1200px",
        "card-padding": "32px",
        "gutter": "24px",
        "section-gap": "120px"
      },
      fontFamily: {
        "label-caps": ["Space Grotesk", "sans-serif"],
        "h1": ["Manrope", "sans-serif"],
        "h3": ["Manrope", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "h2": ["Manrope", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "label-caps": ["14px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "h1": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "h3": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "h2": ["36px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 15s linear infinite reverse",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      }
    },
  },
  plugins: [],
}
