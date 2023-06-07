/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    fontSize: {
      xs: "10px",
      sm: "11px",
      base: "12px",
      lg: "14px",
      xl: "16px", //nav button
      "2xl": "18px",
      "3xl": "19px",
      "4xl": "22px",
      "5xl": "55px", //title
    },
    screens: {},
    extend: {
      colors: {
        primary: {
          50: "#fffdeb",
          100: "#fffbd8",
          200: "#fff7b0",
          300: "#fff389",
          400: "#ffef61",
          500: "#ffeb3a",
          600: "#ccbc2e",
          700: "#998d23",
          800: "#665e17",
          900: "#332f0c",
        },
        secondary: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d1d1d1",
          400: "#b4b4b4",
          500: "#9f9f9f",
          600: "#818181",
          700: "#6a6a6a",
          800: "#5a5a5a",
          900: "#4e4e4e",
          950: "#282828",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
