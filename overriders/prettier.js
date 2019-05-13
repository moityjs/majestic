const { requirePeer } = require('../utils/module');

const prettierConfig = requirePeer('eslint-config-prettier');

module.exports = prettierConfig ? {
  extends: ['babel', 'react', 'unicorn'].reduce((ex, name) => requirePeer(`eslint-plugin-${name}`) ? ex.concat(`prettier/${name}`) : ex, ['prettier']),
} : {};
