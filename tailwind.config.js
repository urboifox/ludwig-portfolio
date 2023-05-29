/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(140,24,45)",
        secondary: "#858585",
        background: "#000000",
        lightBlue: "#49ADBD",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        brandonLight: ["brandonLight", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
