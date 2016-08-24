# eslint-config-majestic

[![npm version](https://badge.fury.io/js/eslint-config-majestic.svg)](http://badge.fury.io/js/eslint-config-majestic)

This package provides the Moity .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-majestic

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-majestic eslint-plugin-react eslint`
2. add `"extends": "majestic"` to your .eslintrc

### eslint-config-majestic/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-majestic eslint`
2. add `"extends": "majestic/base"` to your .eslintrc

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
