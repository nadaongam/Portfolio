/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      spacing: {
        big: '48rem',
      },
    },
    fontFamily: {
      Jetbrain: ['JetBrains Mono', 'monospace'],
      Poppins: ['Poppins', 'sans-serif'],
      Nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
};
