module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['base', 'more', 'mysticatea', 'unicorn'].map(name => `./ruleSets/${name}Set`).map(require.resolve),
  rules: {
    'quote-props': ['error', 'consistent-as-needed'],
    'sort-keys': ['error', 'asc'],
  },
};
