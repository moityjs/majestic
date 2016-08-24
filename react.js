module.exports = {
  extends: ['./ruleSets/baseSet', './ruleSets/reactSet'].map(require.resolve),
  rules: {},
};
