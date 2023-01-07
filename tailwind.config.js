module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: [
        "var(--font-display)",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      sans: [
        "var(--font-sans)",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {
      dropShadow: {
        pop: "8px 8px #000000",
        "pop-1": "16px 16px #000000",
        "pop-2": "24px 24px #000000",
      },
      colors: {
        primary: "#9BD1E5",
        secondary: "#A99FD1",
        extra1: "#84E296",
        extra2: "#F49F0A",
        extra3: "#E873CB",
        house: {
          ruby: "#C95C4B",
          sapphire: "#5A7DAC",
          peridot: "#9CBC94",
          citrine: "#F6CD86",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
