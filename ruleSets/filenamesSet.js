module.exports = require('../utils/pluginRules').with('filenames', {
  'match-exported': 'error',
  'match-regex': ['error', '^[a-z_]+$', true],
  'no-index': 'off',
});
