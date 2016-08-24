# eslint-config-majestic

[![npm version](https://badge.fury.io/js/eslint-config-majestic.svg)](http://badge.fury.io/js/eslint-config-majestic)

This package provides a majestic code style as an ESlint shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-majestic

Our default export contains all of our ESLint rules, including EcmaScript2015 (ES6)+ with import
statements and React.

It requires `eslint`, `eslint-plugin-react` and `eslint-plugin-import`.

1. `npm i -D eslint-config-majestic eslint eslint-plugin-react eslint-plugin-import`
2. add `"extends": "majestic"` to your .eslintrc

### eslint-config-majestic/react

All of our ESLint rules, including EcmaScript2015 (ES6)+  and React, but no imports.

It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-majestic eslint eslint-plugin-react`
2. add `"extends": "majestic/react"` to your .eslintrc

### eslint-config-majestic/base

Lints EcmaScript2015 (ES6)+ but does not lint React.

It requires only `eslint`.

1. `npm install --save-dev eslint-config-majestic eslint`
2. add `"extends": "majestic/base"` to your .eslintrc

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
