const rulesPath = './ruleSets';
module.exports = {
  extends: require('fs').readdirSync(require('path').resolve(__dirname, rulesPath)).map(name => require.resolve(`${rulesPath}/${name}`)),
  rules: {},
};
