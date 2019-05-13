module.exports = require('../utils/pluginRules')
  .configure('babel', config =>
    Object.assign({}, config, {
      rules: ['camelcase', 'no-unused-expressions', 'object-curly-spacing', 'quotes', 'semi', 'valid-typeof'].reduce((a, r) => {
        a[r] = 'off';
        return a;
      }, {}),
    })).with();
