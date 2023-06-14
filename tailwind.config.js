/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      colors: {
        white: "#ffffff",
        lightGray: "#999",
        darkGray: "#1a1919",
        dateGray: "#676767",
        blue: "#6897bb",
        black: "#000",
        yellow: "#f8b712",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};