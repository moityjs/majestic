module.exports = require('../utils/pluginRules').with('more', {
  'classbody-starts-with-newline': ['error', 'always'],
  'force-native-methods': 'warn',
  'no-c-like-loops': 'warn',
  'no-duplicated-chains': 'warn',
  'no-numeric-endings-for-variables': 'error',
  'no-then': 'off',
  'no-void-map': 'error',
  'no-window': 'warn',
  'prefer-includes': 'off',
});
