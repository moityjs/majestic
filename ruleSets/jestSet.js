module.exports = require('../utils/pluginRules')
  .configure('jest', {
    env: {
      'jest/globals': true,
    },
  })
  .with('jest', {
    'no-disabled-tests': 'warn',
    'no-focused-tests': 'error',
    'no-identical-title': 'error',
    'prefer-to-have-length': 'warn',
    'valid-expect': 'error',
  });
