const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: colors.orange,
      },
    },
  },
  plugins: [],
};
