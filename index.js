const rulesPath = './ruleSets';
module.exports = {
  extends: require('fs').readdirSync(require('path').resolve(__dirname, rulesPath)).map(set => require.resolve(`${rulesPath}/${set}`)),
  rules: {},
};
