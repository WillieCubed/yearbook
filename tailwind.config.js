module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol"],
    },
    extend: {
      colors: {
        primary: '#9BD1E5',
        secondary: '#A99FD1',
        extra1: '#84E296',
        extra2: '#F49F0A',
        extra3: '#E873CB',
      },
    },
  },
  plugins: [],
};
