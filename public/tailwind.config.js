/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      dark: "#0B1F32",
      water: "#49BEB7",
      mint: 'rgba(64, 203, 179, 0.20)',
      mintTwo: "#AFFFDF",
      white: "#F5F5F5",
      red: "#FC345C",
    },
    screens: {
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
};
