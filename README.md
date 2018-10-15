# `npm-package-boilerplate`

## WRITE TESTS FOR EVERY FUNCTION

## READ THESE BEFORE YOU START
· Use `Yarn` to install you package's dependencies. Use `npm` to publish you package.

## DEVELOPMENT
use `npm link` in your project directory to link this package to your working `node_modules/`, therefore you can test your package without publishing it to remote.

```shell
 // in package dir
npm run watch
npm link [package]

 // in project dir
npm link [package]
```

## PUBLISH
`npm login --registry` is needed before you publish.
```shell
npm publish
```

## USAGE
```javascript
// entry file: index.js
```
