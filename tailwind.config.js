/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',     // Black background
        text: '#ffffff',           // White text
        primary: '#FFD700',        // Golden accents
        darkGold: '#C5A300',       // Slightly darker gold
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Optional: modern clean font
      },
    },
  },
  plugins: [],
};
