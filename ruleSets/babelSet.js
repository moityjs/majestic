module.exports = require('../utils/pluginRules')
  .with('babel', {
    'camelcase': 'error',
    'new-cap': 'off',
    'no-invalid-this': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'object-curly-spacing': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'valid-typeof': 'error',
  });
