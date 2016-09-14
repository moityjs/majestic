/* eslint no-console:off */
console.warn('extending "majestic/base" is deprecated: extend "majestic" instead');
module.exports = {
  extends: ['./ruleSets/baseSet'].map(require.resolve),
  rules: {},
};
