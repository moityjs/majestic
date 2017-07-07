const rulesPath = './ruleSets';
module.exports = {
  extends: require('fs').readdirSync(require('path').resolve(__dirname, rulesPath)).map(name => {
    const set = require.resolve(`${rulesPath}/${name}`);
    return set.config || set;
  }),
  rules: {},
};
