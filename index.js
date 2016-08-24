module.exports = {
  extends: ['./ruleSets/baseSet', './ruleSets/reactSet', './ruleSets/importSet'].map(require.resolve),
  rules: {},
};
