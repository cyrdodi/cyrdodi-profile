module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': 'Poppins'
      },
      colors: {
        primary: '#2C6E49'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
