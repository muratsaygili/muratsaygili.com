/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        secondary: "#F9F9F9",
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
