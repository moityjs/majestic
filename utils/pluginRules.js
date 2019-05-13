const { requirePeer } = require('./module');

const ifPlugin = (name, config, func) => {
  const plugin = requirePeer(`eslint-plugin-${name}`, { optional: true });
  if (plugin) {
    return func(plugin);
  }
  return config;
};

const withPlugin = (name, config, rules) =>
  ifPlugin(name, config, plugin => {
    const pluginRules = typeof rules === 'function' ? rules(plugin) : rules;
    return Object.assign({}, config, {
      plugins: (config.plugins || []).concat(name),
      rules: Object.keys(pluginRules).reduce((a, rule) => {
        a[`${name}/${rule}`] = pluginRules[rule];
        return a;
      }, Object.assign({}, config.rules)),
    });
  });

const withAll = (config, plugins) =>
  plugins.reduce((next, [pluginName, rules]) =>
    withPlugin(pluginName, next, rules), config);

const base = config => Object.assign({}, config, {
  configure(pluginName, func) {
    return base(ifPlugin(pluginName, config, plugin => typeof func === 'function' ? func(config, plugin) : func));
  },
  with(pluginName, rules) {
    if (Array.isArray(pluginName)) {
      return withAll(config, pluginName);
    }
    return withPlugin(pluginName, config, rules);
  },
});

module.exports = base({});
module.exports.from = base;
