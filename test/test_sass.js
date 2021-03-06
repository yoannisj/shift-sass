var path = require('path');
var sass = require('node-sass');
var importOnce = require('node-sass-import-once');
var sassTrue = require('sass-true');
var mocha = require('mocha');

// get path to test file
var sassFile = path.join(__dirname, 'test.scss');

// add 'stylesheets' and 'test' directories as 'includePaths' so included
// tests, modules and their dependencies can successfully be imported.
// list paths to bower dependencies to use as 'includePaths'.
var sassIncludePaths = [
  './stylesheets/',
  './test/',
  './node_modules/sass-aleksi/stylesheets/',
];

// render the test's sass with sassTrue (includes path to true's scss)
// - use mocha's 'describe' and 'it' functions to run sass-true tests
sassTrue.runSass({
  file: sassFile,
  importer: importOnce,
  includePaths: sassIncludePaths,
}, {
  sass: sass, // dart-sass
  renderMethod: 'render',
  describe: mocha.describe, 
  it: mocha.it
});