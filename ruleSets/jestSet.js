module.exports = require('../utils/pluginRules')
  .configure('jest', {
    env: {
      'jest/globals': true,
    },
  })
  .with('jest', {
    'consistent-test-it': 'warn',
    'expect-expect': 'off',
    'lowercase-name': 'warn',
    'no-alias-methods': 'warn',
    'no-disabled-tests': 'warn',
    'no-empty-title': 'warn',
    'no-focused-tests': 'error',
    'no-hooks': 'off',
    'no-identical-title': 'error',
    'no-jasmine-globals': 'warn',
    'no-jest-import': 'error',
    'no-large-snapshots': 'off',
    'no-mocks-import': 'error',
    'no-test-callback': 'warn',
    'no-test-prefixes': 'off',
    'no-test-return-statement': 'warn',
    'no-truthy-falsy': 'off',
    'prefer-called-with': 'warn',
    'prefer-expect-assertions': 'off',
    'prefer-inline-snapshots': 'off',
    'prefer-spy-on': 'warn',
    'prefer-strict-equal': 'warn',
    'prefer-to-be-null': 'warn',
    'prefer-to-be-undefined': 'warn',
    'prefer-to-contain': 'warn',
    'prefer-to-have-length': 'warn',
    'prefer-todo': 'error',
    'require-tothrow-message': 'error',
    'valid-describe': 'error',
    'valid-expect': 'error',
    'valid-expect-in-promise': 'error',
  });
