/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003d9b",
        "primary-container": "#0052cc",
        "on-primary": "#ffffff",
        secondary: "#4c5e85",
        "secondary-container": "#bfd1ff",
        "on-secondary": "#ffffff",
        background: "#f8f9fb",
        "on-background": "#191c1e",
        surface: "#ffffff",
        "surface-container": "#edeef0",
        "surface-container-low": "#f3f4f6",
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
      }
    }
  },
  plugins: []
};
