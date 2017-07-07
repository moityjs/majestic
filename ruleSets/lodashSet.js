module.exports = require('../utils/pluginRules')
  .with('you-dont-need-lodash-underscore', plugin => Object.keys(plugin.rules).reduce((ret, ruleName) => Object.assign(ret, { [ruleName]: 'warn' }), {}));
