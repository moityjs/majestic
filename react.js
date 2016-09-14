/* eslint no-console:off */
console.warn('extending "majestic/react" is deprecated: extend "majestic" instead');
module.exports = {
  extends: ['./ruleSets/baseSet', './ruleSets/reactSet'].map(require.resolve),
  rules: {},
};
