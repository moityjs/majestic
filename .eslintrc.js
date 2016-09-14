module.exports = {
  env: {
    node: true,
  },
  extends: ['./ruleSets/baseSet'].map(require.resolve),
  rules: {
    'quote-props': ['error', 'consistent-as-needed'],
    'sort-keys': ['error', 'asc'],
  }
};
