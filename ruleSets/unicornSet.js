module.exports = require('../utils/pluginRules')
  .with('unicorn', {
    'catch-error-name': ['error', { name: 'err' }],
    'custom-error-definition': 'error',
    'escape-case': 'error',
    'explicit-length-check': 'off',
    'filename-case': 'off',
    'no-abusive-eslint-disable': 'warn',
    'no-array-instanceof': 'error',
    'no-hex-escape': 'error',
    'no-new-buffer': 'error',
    'no-process-exit': 'off',
    'number-literal-case': 'error',
    'prefer-starts-ends-with': 'error',
    'prefer-type-error': 'error',
    'throw-new-error': 'off',
  });
