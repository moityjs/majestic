module.exports = require('../utils/pluginRules').from({
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
}).with('import', {
  'default': 'error',
  'export': 'error',
  'extensions': ['error', { js: 'never', jsx: 'never' }],
  'first': 'error',
  'max-dependencies': 'off',
  'named': 'error',
  'namespace': 'error',
  'newline-after-import': 'error',
  'no-absolute-path': 'error',
  'no-amd': 'error',
  'no-commonjs': 'warn',
  'no-deprecated': 'off',
  'no-duplicates': 'error',
  'no-dynamic-require': 'off',
  'no-extraneous-dependencies': 'error',
  'no-internal-modules': 'off',
  'no-mutable-exports': 'warn',
  'no-named-as-default': 'warn',
  'no-named-as-default-member': 'warn',
  'no-namespace': 'error',
  'no-nodejs-modules': 'off',
  'no-restricted-paths': 'off',
  'no-unassigned-import': 'off',
  'no-unresolved': 'error',
  'no-webpack-loader-syntax': 'warn',
  'order': 'error',
  'prefer-default-export': 'warn',
  'unambiguous': 'off',
});
