module.exports = require('../utils/pluginRules')
  .with('variables', {
    'only-ascii-variables': 'error',
  });
