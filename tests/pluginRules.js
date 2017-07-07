const base = {
  foo: 'bar',
};

const pluginRules = require('../utils/pluginRules');

module.exports.testFrom = test => {
  test.equal(pluginRules.from(base).foo, 'bar');
  test.done();
};

module.exports.testExists = test => {
  const exists = pluginRules.from(base).with('react', {
    jsx: 'warn',
  });

  test.equal(exists.foo, 'bar');
  test.equal(exists.plugins[0], 'react');
  test.equal(exists.rules['react/jsx'], 'warn');
  test.done();
};

module.exports.testNoExist = test => {
  const noexist = pluginRules.from(base).with('foo', {
    thing: 'error',
  });

  test.equal(noexist.foo, 'bar');
  test.ok(!noexist.plugins);
  test.equal(Object.keys(noexist.rules).length, 0);
  test.done();
};

module.exports.testMultiExists = test => {
  const multiExists = pluginRules.from(base).with('react', {
    jsx: 'warn',
  }).with('import', {
    commonjs: 'warn',
  });

  test.equal(multiExists.foo, 'bar');
  test.equal(multiExists.plugins[0], 'react');
  test.equal(multiExists.plugins[1], 'import');
  test.equal(multiExists.rules['react/jsx'], 'warn');
  test.equal(multiExists.rules['import/commonjs'], 'warn');
  test.done();
};

module.exports.testMultiNoExist = test => {
  const multiNoExist = pluginRules.from(base).with('react', {
    jsx: 'warn',
  }).with('foo', {
    thing: 'error',
  });

  test.equal(multiNoExist.foo, 'bar');
  test.equal(multiNoExist.plugins[0], 'react');
  test.equal(multiNoExist.plugins.length, 1);
  test.equal(multiNoExist.rules['react/jsx'], 'warn');
  test.equal(Object.keys(multiNoExist.rules).length, 1);
  test.done();
};

module.exports.testMergeBaseRules = test => {
  const mergeBaseRules = pluginRules.from({
    foo: 'bar',
    rules: {
      base: 'error',
    },
  }).with('react', {
    jsx: 'warn',
  });

  test.equal(mergeBaseRules.foo, 'bar');
  test.equal(mergeBaseRules.plugins[0], 'react');
  test.equal(mergeBaseRules.plugins.length, 1);
  test.equal(mergeBaseRules.rules['react/jsx'], 'warn');
  test.equal(mergeBaseRules.rules.base, 'error');
  test.equal(Object.keys(mergeBaseRules.rules).length, 2);
  test.done();
};

module.exports.testNoWithOnConfig = test => {
  const object = pluginRules.from(base).with('react', {
    jsx: 'warn',
  });

  test.notEqual(object.with, null);
  test.equal(object.config.with, null);
  test.done();
};
