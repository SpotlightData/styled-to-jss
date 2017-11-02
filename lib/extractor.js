'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _convertClassName = require('./helpers/convertClassName');

var _convertClassName2 = _interopRequireDefault(_convertClassName);

var _convertLine = require('./helpers/convertLine');

var _convertLine2 = _interopRequireDefault(_convertLine);

var _findInString = require('./helpers/findInString');

var _findInString2 = _interopRequireDefault(_findInString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const matchHandler = (0, _ramda.replace)(/(\s*)(.*)/, (_, spaces, rest) => {
  let formattedString;
  if ((0, _ramda.contains)('{', rest) && !(0, _ramda.contains)('${', rest)) {
    formattedString = (0, _convertClassName2.default)(rest);
  } else {
    formattedString = (0, _convertLine2.default)(rest);
  }
  return formattedString.length === 0 ? '' : `${spaces}${formattedString}`;
});

function baseHandler(line) {
  if ((0, _findInString2.default)(/^\s*$/)(line)) {
    return line;
  } else if ((0, _findInString2.default)(/^\s*\}/)(line)) {
    return line.replace('}', '},');
  }
  return matchHandler(line);
}

const extract = (0, _ramda.compose)((0, _ramda.join)('\n'), (0, _ramda.filter)(str => str.length !== 0), (0, _ramda.map)(baseHandler), (0, _ramda.split)('\n'));
exports.default = extract;