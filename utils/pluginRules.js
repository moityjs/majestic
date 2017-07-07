const requirePeer = require('codependency').register(module.parent.parent, {
  index: ['devDependencies'],
});

const withPlugin = (name, config, rules) => {
  const plugin = requirePeer(`eslint-plugin-${name}`, { optional: true });
  if (plugin) {
    const pluginRules = typeof rules === 'function' ? rules(plugin) : rules;
    return Object.assign({}, config, {
      plugins: (config.plugins || []).concat(name),
      rules: Object.keys(pluginRules).reduce((a, rule) => {
        a[`${name}/${rule}`] = pluginRules[rule];
        return a;
      }, Object.assign({}, config.rules)),
    });
  }
  return Object.assign({}, config, {
    rules: config.rules || {},
  });
};

const withAll = (config, plugins) => {
  let next = config;
  for (const [pluginName, rules] of plugins) {
    next = withPlugin(pluginName, next, rules);
  }
  return next;
};

const base = config => Object.assign({}, config, {
  with(pluginName, rules) {
    if (Array.isArray(pluginName)) {
      return withAll(config, pluginName);
    }
    return withPlugin(pluginName, config, rules);
  },
});

module.exports = base({});
module.exports.from = base;
