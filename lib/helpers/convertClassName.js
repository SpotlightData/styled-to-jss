'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var quoteName = (0, _ramda.replace)(/(.*)(\s\{)/, '\'$1\': {');
var addDependency = (0, _ramda.ifElse)((0, _ramda.contains)('&'), function (line) {
  return line;
}, (0, _ramda.replace)(/([^(\s\s)]*)/, '& $1'));

var convertClassName = (0, _ramda.compose)(quoteName, addDependency);
exports.default = convertClassName;

// export default function convertClassName(line) {

//   return compose;
// }