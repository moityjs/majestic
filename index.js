const fs = require('fs');
const path = require('path');

const rulesPath = './ruleSets';
const overridersPath = './overriders';

const configs = (...paths) => [].concat(...paths.map(pathName => fs.readdirSync(path.resolve(__dirname, pathName)).map(name => require.resolve(`${pathName}/${name}`)).sort()));

module.exports = {
  extends: configs(rulesPath, overridersPath),
  rules: {},
};
