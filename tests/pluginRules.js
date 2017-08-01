const base = {
  foo: 'bar',
};

const pluginRules = require('../utils/pluginRules');

module.exports.testConfigure = test => {
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
  test.ok(!noexist.rules);
  test.done();
};

module.exports.testMultiExists = test => {
  const multiExists = pluginRules.from(base).with([
    [
      'react', {
        jsx: 'warn',
      },
    ], [
      'import', {
        commonjs: 'warn',
      },
    ],
  ]);

  test.equal(multiExists.foo, 'bar');
  test.equal(multiExists.plugins[0], 'react');
  test.equal(multiExists.plugins[1], 'import');
  test.equal(multiExists.rules['react/jsx'], 'warn');
  test.equal(multiExists.rules['import/commonjs'], 'warn');
  test.done();
};

module.exports.testMultiNoExist = test => {
  const multiNoExist = pluginRules.from(base).with([
    [
      'react', {
        jsx: 'warn',
      },
    ], [
      'foo', {
        thing: 'error',
      },
    ],
  ]);

  test.equal(multiNoExist.foo, 'bar');
  test.equal(multiNoExist.plugins[0], 'react');
  test.equal(multiNoExist.plugins.length, 1);
  test.equal(multiNoExist.rules['react/jsx'], 'warn');
  test.equal(Object.keys(multiNoExist.rules).length, 1);
  test.done();
};

module.exports.testConfigureBaseRules = test => {
  const configureBaseRules = pluginRules.from({
    foo: 'bar',
    rules: {
      base: 'error',
    },
  }).with('react', {
    jsx: 'warn',
  });

  test.equal(configureBaseRules.foo, 'bar');
  test.equal(configureBaseRules.plugins[0], 'react');
  test.equal(configureBaseRules.plugins.length, 1);
  test.equal(configureBaseRules.rules['react/jsx'], 'warn');
  test.equal(configureBaseRules.rules.base, 'error');
  test.equal(Object.keys(configureBaseRules.rules).length, 2);
  test.done();
};

module.exports.testConfigureWithExists = test => {
  const configured = pluginRules
    .from(base)
    .configure('react', config => {
      test.equal(config.foo, 'bar');
      return Object.assign(config, {
        settings: 'something',
      });
    })
    .with();

  test.equal(configured.foo, 'bar');
  test.equal(configured.settings, 'something');
  test.done();
};

module.exports.testConfigureObjectWithExists = test => {
  const configured = pluginRules
    .from(base)
    .configure('react', {
      settings: 'something',
    })
    .with();

  test.equal(configured.foo, undefined);
  test.equal(configured.settings, 'something');
  test.done();
};

module.exports.testMultipleConfigureWithExists = test => {
  const configured = pluginRules
    .from(base)
    .configure('react', config => {
      test.equal(config.foo, 'bar');
      return Object.assign(config, {
        settings: 'something',
      });
    })
    .configure('import', config => {
      test.equal(config.settings, 'something');
      test.equal(config.foo, 'bar');
      return Object.assign(config, {
        another: 'thing',
      });
    })
    .with();

  test.equal(configured.foo, 'bar');
  test.equal(configured.settings, 'something');
  test.equal(configured.another, 'thing');
  test.done();
};

module.exports.testConfigureWithNoExists = test => {
  const configured = pluginRules
    .from(base)
    .configure('nothing', () => {
      test.fail();
    })
    .with();

  test.equal(configured.foo, 'bar');
  test.done();
};
