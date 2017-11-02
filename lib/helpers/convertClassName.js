'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

const quoteName = (0, _ramda.replace)(/(.*)(\s\{)/, '\'$1\': {');
const addDependency = (0, _ramda.ifElse)((0, _ramda.contains)('&'), line => line, (0, _ramda.replace)(/([^(\s\s)]*)/, '& $1'));

const convertClassName = (0, _ramda.compose)(quoteName, addDependency);
exports.default = convertClassName;

// export default function convertClassName(line) {

//   return compose;
// }