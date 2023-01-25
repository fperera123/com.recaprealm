/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#D90429',
        secondary: '#2B2D42',
        primaryShade: '#EF233C',
        secondaryShade: '#8D99AE',
        lightShade: '#EDF2F4'
      }
    },
    plugins: [
      // require('tw-elements/dist/plugin')
    ]
  },
}
