module.exports = require('../utils/pluginRules')
  .configure('import', {
    settings: {
      'import/extensions': ['.js', '.jsx'],
    },
  })
  .with('import', {
    'default': 'error',
    'export': 'error',
    'exports-last': 'off',
    'extensions': ['error', { js: 'never', jsx: 'never' }],
    'first': 'error',
    'max-dependencies': 'off',
    'named': 'error',
    'namespace': 'error',
    'newline-after-import': 'error',
    'no-absolute-path': 'error',
    'no-amd': 'error',
    'no-anonymous-default-export': 'warn',
    'no-commonjs': 'warn',
    'no-deprecated': 'off',
    'no-duplicates': 'error',
    'no-dynamic-require': 'off',
    'no-extraneous-dependencies': 'error',
    'no-internal-modules': 'off',
    'no-mutable-exports': 'warn',
    'no-named-as-default': 'error',
    'no-named-as-default-member': 'warn',
    'no-named-default': 'warn',
    'no-namespace': 'off',
    'no-nodejs-modules': 'off',
    'no-restricted-paths': 'off',
    'no-unassigned-import': 'off',
    'no-unresolved': 'error',
    'no-webpack-loader-syntax': 'warn',
    'order': [
      'error', {
        'groups': ['builtin', ['external', 'internal'], 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'prefer-default-export': 'warn',
    'unambiguous': 'off',
  });
