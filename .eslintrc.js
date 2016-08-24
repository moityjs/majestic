module.exports = {
  extends: ['./base'].map(require.resolve),
  rules: {
    'quote-props': ['error', 'consistent-as-needed'],
    'sorting/sort-object-props': ['error', {}],
  },
  plugins: ['sorting']
};
