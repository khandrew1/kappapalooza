/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Impact", "sans-serif"],
        bowlby: ["Bowlby One SC", "cursive"],
      },
      colors: {
        kappa: {
          blue: "#5FC2C0",
          bluetwo: "#1E706F",
          bluethree: "#038280",
          bluefour: "#033030",
          orangeyellow: "#ED8C0C",
          lightcyan: "#76CCE8",
          pinkish: "#D0716F",
          lime: "#ABCB0A",
        },
      },
    },
  },
  plugins: [],
};
