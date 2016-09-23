module.exports = require('../utils/pluginRules').from({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-quotes': 'error',
  },
  settings: {
    react: {
      version: '0.14',
    },
  },
}).with('react', {
  'display-name': 'error',
  'forbid-component-props': 'off',
  'forbid-prop-types': 'warn',
  'jsx-boolean-value': 'error',
  'jsx-closing-bracket-location': ['error', {
    nonEmpty: 'after-props',
    selfClosing: 'line-aligned',
  }],
  'jsx-curly-spacing': 'error',
  'jsx-equals-spacing': 'error',
  'jsx-filename-extension': 'off',
  'jsx-first-prop-new-line': ['error', 'multiline'],
  'jsx-handler-names': 'off',
  'jsx-indent': ['error', 2],
  'jsx-indent-props': ['error', 2],
  'jsx-key': 'error',
  'jsx-max-props-per-line': 'off',
  'jsx-no-bind': ['error', { allowArrowFunctions: true }],
  'jsx-no-comment-textnodes': 'warn',
  'jsx-no-duplicate-props': 'error',
  'jsx-no-literals': 'off',
  'jsx-no-target-blank': 'warn',
  'jsx-no-undef': 'error',
  'jsx-pascal-case': 'error',
  'jsx-sort-props': 'off',
  'jsx-space-before-closing': ['error', 'never'],
  'jsx-uses-react': 'error',
  'jsx-uses-vars': 'error',
  'jsx-wrap-multilines': 'off',
  'no-children-prop': 'error',
  'no-danger': 'off',
  'no-danger-with-children': 'error',
  'no-deprecated': 'warn',
  'no-did-mount-set-state': 'off',
  'no-did-update-set-state': 'off',
  'no-direct-mutation-state': 'error',
  'no-find-dom-node': 'error',
  'no-is-mounted': 'error',
  'no-multi-comp': ['error', { ignoreStateless: true }],
  'no-render-return-value': 'warn',
  'no-set-state': 'off',
  'no-string-refs': 'warn',
  'no-unescaped-entities': 'warn',
  'no-unknown-property': 'error',
  'no-unused-prop-types': 'warn',
  'prefer-es6-class': 'off',
  'prefer-stateless-function': 'warn',
  'prop-types': 'warn',
  'react-in-jsx-scope': 'error',
  'require-extension': ['warn', { extensions: ['.js', '.jsx'] }],
  'require-optimization': 'off',
  'require-render-return': 'error',
  'self-closing-comp': 'error',
  'sort-comp': ['warn', {
    order: [
      'static-methods',
      'lifecycle',
      '/^on.+$/',
      '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
      'everything-else',
      '/^render.+$/',
      'render',
    ],
  }],
  'sort-prop-types': 'off',
  'style-prop-object': 'error',
});
