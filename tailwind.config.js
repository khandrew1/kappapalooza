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
          blue: "#61C3C1",
          bluetwo: "#1E706F",
          bluethree: "#038280",
          bluefour: "#033030",
          bluefive: "#030E0E",
          orangeyellow: "#ED8C0C",
          orange: "#FE9900",
          orangesky: "#DA8C33",
          lightcyan: "#76CCE8",
          lightercyan: "#5ABBB9",
          pinkish: "#D0716F",
          lime: "#ABCB0A",
          red: "#C20808",
          redish: "#d27370",
        },
      },
    },
  },
  plugins: [],
};
