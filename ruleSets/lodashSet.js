module.exports = require('../utils/pluginRules').with('you-dont-need-lodash-underscore', function (plugin) {
  return plugin.configs['all-warn'].rules;
});
