const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['GeneralSans-Variable', ...defaultTheme.fontFamily.sans],
        glow: 'Glow',
      },
      fontSize: {
        xs: ['12px', '18px'],
      },
      colors: {
        brand: '#E33230',
        // brand: '#d6dbe0', //Dev only
        black: '#19191B',
        lblue: '#F0F6FF',
        dim: '#F3F2F4',
      },
      borderWidth: {
        ['1.5']: '1.5px',
      },
    },
  },
  plugins: [],
};
