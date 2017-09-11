# Boilerplate for creating npm libraries using rollup

A simple boilerplate for creating npm libraries using rollup, react (if you
need it in your examples) and jest.

[![Build Status](https://travis-ci.org/asa-cristall-fama/npm-rollup-boilerplate.svg?branch=master)](https://travis-ci.org/asa-cristall-fama/npm-rollup-boilerplate)
[![dependencies Status](https://david-dm.org/asa-cristall-fama/npm-rollup-boilerplate/status.svg)](https://david-dm.org/asa-cristall-fama/npm-rollup-boilerplate)
[![devDependencies Status](https://david-dm.org/asa-cristall-fama/npm-rollup-boilerplate/dev-status.svg)](https://david-dm.org/asa-cristall-fama/npm-rollup-boilerplate?type=dev)

## Features
* Build with [rollup](https://webpack.js.org/) and [babel](https://babeljs.io/)
* Test and cover with [jest](https://facebook.github.io/jest/)
* Lint with [eslint](http://eslint.org/) ([air-bnb config](https://github.com/airbnb/javascript))
* CI with [travis-ci.org](https://travis-ci.org/)

## Quick start

The easiest way to start using npm-rollup-boilerplate is cloning this repo directly
from github:

```bash
git clone https://github.com/asa-cristall-fama/npm-rollup-boilerplate.git
```

Inside the repo directory run
```bash
npm install && rm -r .git && git init
```

Before start coding, update the following files with your information:

* **package.json** (library name, author and github repository)
* **rollup.config.js** (module name)
* **CHANGELOG.md** (releases URL)
* **LICENSE** (copyright)

When your library is ready, replace this README.md.
[Here](https://github.com/jehna/readme-best-practices) some best practices about writing
a read me file.

## Commands

- `npm run clean` - Remove logs and `dist/` directory
- `npm run build` - Build your library in UMD, CommonJS and ES6 modules.
- `npm test` - Run tests. Tests can be written with ES6 (WOW!)
- `npm test:watch` - You can even re-run tests on file changes!
- `npm run cover` - Yes. You can even cover ES6 code.
- `npm run lint` - We recommend using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It's fantastic.
- `npm run test:examples` - We recommend writing examples on pure JS for better understanding module usage.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing you module.

## Usage

### src/index.js

This is the main source file in your application, and the main file you'll start
editing to implement the functionality of your library.

### .eslintrc

This controls how the package is linted and starts off with the recommended set
of rules from eslint itself. It also uses `babel-eslint` to parse your code,
allowing syntax that the standard eslint parser may not understand (e.g. type
annotations).

### babel-eslint

Enables eslint to understand all JavaScript syntax that
[babel](http://babeljs.io) understands, and adds a few rules for linting ES2015
code. This can be removed if you plan not to use babel to transform ES2015 code
to ES5 or if you plan not to use eslint.

### babel-plugin-external-helpers

Ensures that only one copy of each babel helper is included in the bundle when
used with rollup. This can be removed if you plan not to use babel to transform
ES2015 code to ES5.

### babel-preset-es2015

Used when babel is used without rollup, and referenced by the `.babelrc` file.
This can be removed if you plan not to use babel to transform ES2015 code to ES5
or you plan to specify all the babel plugins manually.

### babelrc-rollup

Handles transforming the babel config from `.babelrc` to one suitable for use
with `rollup-plugin-babel`, where you don't want to use any module plugins.

### eslint

[eslint](http://eslint.org) checks your code for common errors and ensures it
adheres to the style you configure in `.eslintrc`. You can remove this if you
plan not to lint your code or if you're using another linter, such as
[jshint](http://jshint.com) or [jscs](http://jscs.info).

### jest

[jest](https://facebook.github.io/jest/) is a zero configuration testing platform.
If you decided to replace it with another testing solution probably you have to
rename __tests__ in something else.

### rollup

[rollup](http://rollupjs.org) is a JavaScript module bundler and the reason
you're looking at this project in the first place, so you probably don't want
to remove this dependency.

### rollup-plugin-babel

This plugin enables support for [babel](http://babeljs.io), which transforms
ES2015 code to ES5. You can remove this if you plan not to use ES2015 code.

### External dependencies

Ideally, you should only be transforming your own source code, rather than running
all of your external dependencies through Babel – hence the `exclude: 'node_modules/**'`
in the example above. If you have a dependency that exposes untranspiled ES6 source
code that doesn't run in your target environment, then you may need to break this rule,
but it often causes problems with unusual `.babelrc` files or mismatched versions of Babel.

### Modules

The `es2015` preset includes the
[transform-es2015-modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/)
plugin, which converts ES6 modules to CommonJS – preventing Rollup from working.
Since Babel 6.3 it's possible to deactivate module transformation with `"modules": false`.
So there is no need to use the old workaround with `babel-preset-es2015-rollup`, that work
for Babel <6.13. Rollup will throw an error if this is incorrectly configured.

## References

This boilerplate has been inspired by some amazing repos like [redux](https://github.com/reactjs/redux),
[html5 boilerplate](https://github.com/h5bp/html5-boilerplate),
[rollup starter project](https://github.com/rollup/rollup-starter-project).

## Contributing

If you think a project built with rollup should be set up differently, open an
issue to discuss it or create a pull request.


## License

MIT
