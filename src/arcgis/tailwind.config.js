const resolve = require('tailwindcss/resolveConfig');
const base = require('../tailwind.config');

module.exports = resolve(base, {
  prefix: 'tw-',
});
