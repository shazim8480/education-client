module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "fun-facts": "url('/src/images/funfacts-2-bg.png')",
      }),
      colors: {
        primary: "#fdc800",
        secondary: "#0d2741",
        hero: "#f0f3f8",
        teal: "#00b4b0",
        blueAlt: "#002147",
        coursePriceBg: "#fefefe",
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
