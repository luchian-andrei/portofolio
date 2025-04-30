/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
  ],
  safelist: [
    "glass-container",
    "glass-component",
    "glass-header",
    "glass-card",
    "glass-tech-card",
    "glowing-text",
    "image-caption",
    "image-shadow",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-utfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
