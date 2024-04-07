/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cs-black': '#021024',
        'cs-darkBlue': '#052659',
        'cs-blue': '#5483B3',
        'cs-lightBlue': '#7DA0CA',
        'cs-white': '#C1E8FF',
        
      },
    },
  },
  plugins: [],
}