/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        text: '#ffffff',
        primary: '#FFE57F',     // ✅ Updated lighter gold
        darkGold: '#D1AF4A',     // ✅ Softer complementary shade
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
