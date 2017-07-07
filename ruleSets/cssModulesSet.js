module.exports = require('../utils/pluginRules')
  .with('css-modules', {
    'no-undef-class': 'error',
    'no-unused-class': 'warn',
  });
