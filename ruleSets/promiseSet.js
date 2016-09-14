module.exports = require('../utils/pluginRules').with('promise', {
  'always-return': 'warn',
  'catch-or-return': 'error',
  'no-native': 'off',
  'param-names': 'error',
});
