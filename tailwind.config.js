/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        customBlue1: '#56729B',
        customBlue2: '#D8E0E9',
        customFontColor: '#353535',
        customLogoText: '#274D83',
      },
    },
  },
  plugins: [],
}
