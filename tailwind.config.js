/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
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
