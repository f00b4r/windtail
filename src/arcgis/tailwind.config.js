const resolve = require('tailwindcss/resolveConfig');
const base = require('../tailwind.config');

module.exports = resolve(base, {
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: '#c4001e',
        secondary: '#0c2f83',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover', 'focus'],
    }
  }
});
