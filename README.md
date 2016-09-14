# eslint-config-majestic

[![npm version](https://badge.fury.io/js/eslint-config-majestic.svg)](http://badge.fury.io/js/eslint-config-majestic)

This package provides a majestic code style as the smartest ESlint shared config.

## Usage

We export one smart ESLint configuration for your usage.

### eslint-config-majestic

Contains all the core ESLint rules for linting ES2015 (ES6)+ code.

It only requires `eslint`.

1. `npm i -D eslint-config-majestic eslint`
2. add `"extends": "majestic"` to your .eslintrc

## ESlint Plugins

We also provide linting rules for ESLint plugins. To enable them, all you have to do is install the relevant plugin:

`npm i -D eslint-plugin-react`

You will automatically get the ESLint rules defined for the plugin.

### Supported plugins

* eslint-plugin-react
* eslint-plugin-import
* eslint-plugin-prefer-spread
* eslint-plugin-you-dont-need-lodash-underscore
