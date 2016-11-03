module.exports = require('../utils/pluginRules').with('more', {
  'classbody-starts-with-newline': ['error', 'never'],
  'force-native-methods': 'warn',
  'no-duplicated-chains': 'warn',
  'no-numeric-endings-for-variables': 'error',
  'no-then': 'off',
  'no-window': 'warn',
});
