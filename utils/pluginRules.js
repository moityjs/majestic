const requirePeer = require('codependency').register(module.parent.parent, {
  index: ['devDependencies'],
});

const withPlugin = name => {
  const plugin = requirePeer(`eslint-plugin-${name}`, { optional: true });
  if (plugin) {
    return (config, rules) => Object.assign({}, config, {
      plugins: (config.plugins || []).concat(name),
      rules: Object.keys(rules).reduce((a, rule) => {
        a[`${name}/${rule}`] = rules[rule];
        return a;
      }, Object.assign({}, config.rules)),
    });
  }
  return config => Object.assign({}, config, {
    rules: config.rules || {},
  });
};

const base = config => Object.assign({}, config, {
  with(pluginName, rules) {
    return base(withPlugin(pluginName)(config, rules));
  },
});

module.exports = base({});
module.exports.from = base;
