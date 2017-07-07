module.exports = require('../utils/pluginRules')
  .with([
    [
      'class-property', {
        'class-property-semicolon': 'error',
      },
    ], [
      'prefer-class-properties', {
        'prefer-class-properties': 'error',
      },
    ],
  ])
;
