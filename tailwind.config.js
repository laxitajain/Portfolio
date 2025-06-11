/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#383851",
          90: "#404257",
          80: "#5F6178",
          70: "#6E7087",
          60: "#7E8096",
          50: "#8E90A5",
          40: "#9FA1B4",
          30: "#B1B2C3",
          20: "#C3C5D2",
          10: "#D7D7E1",
        },
        accent: {
          100: "#FFEAD2",
          90: "#FFECD6",
          80: "#FFEEDA",
          70: "#FFF0DF",
          60: "#FFF2E3",
          50: "#FFF4E8",
          40: "#FFF6ED",
          30: "#FFF9F1",
          20: "#FFFBF6",
          10: "#FFFDFA",
        },
        secondary: {
          100: "#20122C",
          90: "#301B42",
          80: "#402458",
          70: "#5F3684",
          60: "#6F3F9A",
          50: "#A05ADC",
          40: "#A869DF",
          30: "#B178E2",
          20: "#BA87E6",
          10: "#C397EA",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        dancing: ["var(--font-dancing)"],
      },
    },
  },
  plugins: [],
};

// FONTS:
// Dancing Script
// Roboto
// LOGO Avalon Alt
