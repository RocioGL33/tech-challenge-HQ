/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#8247FF",
        lightViolet: "#EAE0FF",
        ultraLightViolet: "#EDEDFA",
        white: "#FFFFFF",
        lightGrey: "#F0F0F0",
        darkGrey: "#1C1C1C",
        middleDarkGrey: "#212121",
        middleGrey: "#767575",
        grey: "#666666",
        orange: "#FE8162",
        lightOrange: "#FDF2EC",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif !important"],
        mons: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
