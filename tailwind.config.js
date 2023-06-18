/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
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
        blue: "#58a6ff",
        black: "#000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};