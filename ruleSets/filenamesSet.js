module.exports = require('../utils/pluginRules').with('filenames', {
  'match-exported': 'error',
  'match-regex': ['error', null, true],
  'no-index': 'off',
});
