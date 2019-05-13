module.exports = require('../utils/pluginRules')
  .with('react-hooks', {
    'exhaustive-deps': 'warn',
    'rules-of-hooks': 'error',
  });
