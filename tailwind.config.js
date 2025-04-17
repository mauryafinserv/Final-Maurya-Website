/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        text: "#ffffff",
        primary: "#C28F4D",
        darkGold: "#C5A300",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"], // for elegant quotes
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-marquee": {
          "0%, 100%": { opacity: "0" },
          "10%, 90%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "zoom-in": "zoom-in 0.5s ease-out forwards",
        marquee: "marquee 60s linear infinite",
        "fade-marquee": "fade-marquee 60s ease-in-out infinite", // ✅ New fade + marquee
      },
    },
  },
  plugins: [],
};
