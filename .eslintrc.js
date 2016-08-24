module.exports = {
  extends: ['./base'].map(require.resolve),
  rules: {
    'quote-props': ['error', 'consistent-as-needed'],
    'sort-keys': ['error', 'asc'],
  }
};
