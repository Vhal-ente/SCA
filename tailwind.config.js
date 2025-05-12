/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#36f6c6",
        //   background: "#292929",
        //   "general": "#d9d9d9",
      },
      // fontFamily: {
      //   outfit: ["Outfit", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
