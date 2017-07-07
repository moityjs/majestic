module.exports = require('../utils/pluginRules')
  .with([
    [
      'prefer-spread', {
        'prefer-object-spread': ['error', 'includeNearEquivalents'],
      },
    ], [
      'prefer-object-spread', {
        'prefer-object-spread': 'error',
      },
    ],
  ]);
