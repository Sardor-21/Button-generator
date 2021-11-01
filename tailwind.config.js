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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
