module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#fdc800",
        secondary: "#0d2741",
      },
      fontFamily: {
        heading: ["DM Serif Display"],
        body: ["Rubik"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
