/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#96E6B3',
        'second':'#272E28',
        'third' : '#5A9367',
      }
    },
  },
  plugins: [],
};
