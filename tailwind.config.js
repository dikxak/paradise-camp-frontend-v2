/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "641px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1280px" },
      xl: { min: "1281px", max: "1536px" },
      "2xl": { min: "1537px" },
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: "#ffffff",
      black: "#00000",
      primary: {
        50: "#eeefe8",
        100: "#dcdfd1",
        200: "#cbceba",
        300: "#b9bea3",
        400: "#a8ae8c",
        500: "#979e75",
        600: "#858e5e",
        700: "#747d47",
        800: "#626d30",
        900: "#515d19",
      },
      secondary: {
        50: "#fffaea",
        100: "#fef4d5",
        200: "#feefc1",
        300: "#feeaac",
        400: "#fee597",
        500: "#fddf82",
        600: "#fdda6d",
        700: "#fdd559",
        800: "#fccf44",
        900: "#fcca2f",
      },
      gray: {
        50: "#f8f9fa",
        100: "#f1f3f5",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#868e96",
        700: "#495057",
        800: "#343a40",
        900: "#212529",
      },
      red: {
        ...colors.red,
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        input: "0 0 0 0.25rem rgba(151, 158, 117, 0.25)",
      },
      screens: {
        xs: { max: "640px" },
      },
    },
  },
  plugins: [],
};
