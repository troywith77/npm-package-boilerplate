# `npm-package-boilerplate`

## WRITE TESTS FOR EVERY FUNCTION

<!-- ## READ THESE BEFORE YOU START -->

## DEVELOPMENT

```shell
npm run build
// build your package
npm run dev
// watch your file changes
npm run demo
// serve your example
npm run test
// run test cases
npm run prepublish
// actions before publish
```

## INSPECT PACKAGE IN LOCAL REPO
use `npm link` in your package directory to make this package `global`, therefore you can link your package to your local repo and test it without publishing to remote.

```shell
 // in package dir
npm run watch
npm link [package]

 // in project dir
npm link [package]
```

## PUBLISH
```shell
npm publish
```
`npm login --registry` is needed before you publish. By running this command, Jest would run all test cases, then Parcel would build source files into a bundle, which would be our package's main file.

## USAGE
```javascript
// entry file: index.js
```
