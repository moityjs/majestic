module.exports = require('../utils/pluginRules')
  .with('filenames', {
    'match-exported': 'error',
    'match-regex': ['error', '^[a-z0-9][a-z0-9A-Z.]+$', true],
    'no-index': 'off',
  });
