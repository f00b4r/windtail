const resolve = require('tailwindcss/resolveConfig');
const base = require('../tailwind.config');

module.exports = resolve(base, {
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: '#c4001e',
        secondary: '#2b2b82',
      }
    }
  }
});
