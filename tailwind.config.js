module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "769px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    container: {
      screens: {
        sm: "100%",
        // md: "992px",
        md: "100%",
        lg: "1200px",
        xl: "1440px",
      },
    },
    colors: {
      black: {
        DEFAULT: "#000",
        700: "#193549",
      },
      white: {
        DEFAULT: "#FFFFFF",
        500: "#F5F2F0",
      },
      green: {
        700: "#A5FF7E",
        800: "#78A51E",
      },
      gray: {
        200: "#c2c2c2",
        300: "#A9CCB8",
        400: "#9CA3AF",
        500: "#ECFDCD",
      },
      red: {
        200: "#AF377A",
      },
      yellow: {
        400: "#DCFD57",
        500: "#FFC62C",
        600: "#FF8C00",
      },
      blue: {
        400: "#3A20FD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
