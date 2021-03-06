module.exports = require('../utils/pluginRules')
  .with('promise', {
    'always-return': 'off',
    'avoid-new': 'off',
    'catch-or-return': 'warn',
    'no-callback-in-promise': 'off',
    'no-native': 'off',
    'no-nesting': 'warn',
    'no-new-statics': 'error',
    'no-promise-in-callback': 'off',
    'no-return-in-finally': 'error',
    'no-return-wrap': 'error',
    'param-names': 'error',
    'prefer-await-to-callbacks': 'off',
    'prefer-await-to-then': 'off',
    'valid-params': 'warn',
  });
