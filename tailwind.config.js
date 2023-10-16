/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        'text-color': '#353535',
        'light-color': '#D8E0E9',
        'blue-color': '#56729B',
        'red-button': '#A22E3E',
      },
    },
  },
  plugins: [],
}

// colour for the head/footer

module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue1: '#56729B',
      },
    },
  },
}
// colour for the background
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue2: '#D8E0E9',
      },
    },
  },
}


