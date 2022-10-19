/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
      },
    },
  },
  plugins: [
    require('tailwindcss-iconify').default(),
    require('@tailwindcss/typography'),
  ],
}
