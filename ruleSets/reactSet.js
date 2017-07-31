module.exports = require('../utils/pluginRules')
  .configure('react', {
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
  })
  .with('react', {
    'default-props-match-prop-types': 'warn',
    'display-name': 'error',
    'forbid-component-props': 'off',
    'forbid-elements': 'off',
    'forbid-foreign-prop-types': 'off',
    'forbid-prop-types': ['warn', { forbid: ['any', 'array'] }],
    'jsx-boolean-value': 'error',
    'jsx-closing-bracket-location': ['error', { nonEmpty: 'line-aligned', selfClosing: 'line-aligned' }],
    'jsx-closing-tag-location': 'error',
    'jsx-curly-spacing': ['error', { children: true, when: 'never' }],
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
    'jsx-pascal-case': ['error', { allowAllCaps: true }],
    'jsx-sort-props': 'off',
    'jsx-space-before-closing': 'off',
    'jsx-tag-spacing': ['error', { afterOpening: 'never', beforeSelfClosing: 'never', closingSlash: 'never' }],
    'jsx-uses-react': 'error',
    'jsx-uses-vars': 'error',
    'jsx-wrap-multilines': 'off',
    'no-array-index-key': 'error',
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
    'no-redundant-should-component-update': 'warn',
    'no-render-return-value': 'warn',
    'no-set-state': 'off',
    'no-string-refs': 'warn',
    'no-unescaped-entities': 'warn',
    'no-unknown-property': 'error',
    'no-unused-prop-types': 'warn',
    'no-will-update-set-state': 'error',
    'prefer-es6-class': 'off',
    'prefer-stateless-function': 'warn',
    'prop-types': 'warn',
    'react-in-jsx-scope': 'error',
    'require-default-props': 'warn',
    'require-optimization': 'off',
    'require-render-return': 'error',
    'self-closing-comp': 'error',
    'semi-style': 'off',
    'sort-comp': [
      'warn', {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'sort-prop-types': 'off',
    'style-prop-object': 'error',
    'void-dom-elements-no-children': 'error',
  });
