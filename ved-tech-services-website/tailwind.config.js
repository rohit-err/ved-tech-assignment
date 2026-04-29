/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003d9b",
        "primary-container": "#0052cc",
        "on-primary": "#ffffff",
        "on-primary-container": "#c4d2ff",
        secondary: "#4c5e85",
        "secondary-container": "#bfd1ff",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#485980",
        tertiary: "#7b2600",
        "tertiary-container": "#a33500",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ffc6b2",
        background: "#f8f9fb",
        "on-background": "#191c1e",
        surface: "#ffffff",
        "surface-variant": "#e1e2e4",
        "surface-container": "#edeef0",
        "surface-container-low": "#f3f4f6",
        "surface-container-high": "#e7e8ea",
        "surface-container-highest": "#e1e2e4",
        "on-surface": "#191c1e",
        "on-surface-variant": "#434654",
        outline: "#737685",
        "outline-variant": "#c3c6d6",
        error: "#ba1a1a",
        "on-error": "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      },
      spacing: {
        gutter: "24px",
        container: "1280px"
      }
    }
  },
  plugins: []
};
