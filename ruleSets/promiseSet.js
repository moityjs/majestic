module.exports = require('../utils/pluginRules').with('promise', {
  'always-return': 'off',
  'catch-or-return': 'warn',
  'no-native': 'off',
  'no-return-wrap': 'error',
  'param-names': 'error',
  'prefer-await-to-callbacks': 'off',
  'prefer-await-to-then': 'off',
});
