const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'hero': ['DM Serif Display', ...defaultTheme.fontFamily.sans],
        'hero2': ['Inter SemiBold', ...defaultTheme.fontFamily.sans],
        'inter-norm': ['Inter', ...defaultTheme.fontFamily.sans],
        'handwriting': ['Porto Bianco Alt', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
