# eslint-config-majestic

[![npm version](https://badge.fury.io/js/eslint-config-majestic.svg)](http://badge.fury.io/js/eslint-config-majestic) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-majestic-brightgreen.svg)](http://standardjs.com/)

This package provides a majestic code style as the smartest ESLint shared config.

## Usage

We export one smart ESLint configuration for your usage.

### eslint-config-majestic

Contains all the core ESLint rules for linting ES2015 (ES6)+ code.

It only requires `eslint`.

1. `npm i -D eslint-config-majestic eslint`
2. add `"extends": "majestic"` to your .eslintrc

#### Example .eslintrc.json
```json
{
  "root": true,
  "extends": ["majestic"]
}
```

## ESLint Plugins

We also provide linting rules for ESLint plugins. To enable them, all you have to do is install the relevant plugin:

`npm i -D eslint-plugin-react`

You will automatically get the ESLint rules defined for the plugin.

### Supported plugins

* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-prefer-spread](https://www.npmjs.com/package/eslint-plugin-prefer-spread)
* [eslint-plugin-you-dont-need-lodash-underscore](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore)
* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
* [eslint-plugin-more](https://www.npmjs.com/package/eslint-plugin-more)
* [eslint-plugin-filenames](https://www.npmjs.com/package/eslint-plugin-filenames)
* [eslint-plugin-sort-class-members](https://www.npmjs.com/package/eslint-plugin-sort-class-members)
* [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)
* [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
* [eslint-plugin-class-property](https://www.npmjs.com/package/eslint-plugin-class-property)
* [eslint-plugin-css-modules](https://www.npmjs.com/package/eslint-plugin-css-modules)
* [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
* [eslint-plugin-mysticatea](https://www.npmjs.com/package/eslint-plugin-mysticatea)
* [eslint-plugin-optimize-regex](https://www.npmjs.com/package/eslint-plugin-optimize-regex)
* [eslint-plugin-prefer-class-properties](https://www.npmjs.com/package/eslint-plugin-prefer-class-properties)
* [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
* [eslint-plugin-variables](https://www.npmjs.com/package/eslint-plugin-variables)
* [eslint-plugin-prefer-object-spread](https://www.npmjs.com/package/eslint-plugin-prefer-object-spread)

## Prettier support

If you use [Prettier](https://www.npmjs.com/package/prettier) to format your code, you will need to disable some conflicting rules.

By installing [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier), Majestic will turn off the relevant rules, for the plugins you have installed. Install it with:

`npm i -D eslint-config-prettier` 

Note: Majestic won't run Prettier - to get eslint to run it for you, you can install [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

`npm i -D eslint-plugin-prettier`

#### Example .eslintrc.json
```json
{
  "root": true,
  "extends": ["majestic"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
