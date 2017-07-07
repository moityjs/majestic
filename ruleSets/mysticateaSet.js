module.exports = require('../utils/pluginRules')
  .with('mysticatea', {
    'arrow-parens': 'off',
    'block-scoped-var': 'off',
    'no-instanceof-array': 'error',
    'no-instanceof-wrapper': 'error',
    'no-literal-call': 'error',
    'no-this-in-static': 'error',
    'no-use-ignored-vars': 'off',
    'no-useless-rest-spread': 'error',
    'prefer-for-of': 'error',
  });
