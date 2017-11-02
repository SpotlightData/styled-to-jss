'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = convertLine;

var _ramda = require('ramda');

var _findInString = require('./findInString');

var _findInString2 = _interopRequireDefault(_findInString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const FUNCTIONS = [
//   'palette', 'font', 'key'
// ];

var hasPropsFunction = (0, _ramda.anyPass)([(0, _findInString2.default)(/\${\s*\w* =>/), (0, _findInString2.default)(/props\[.*\]/)]);
var hasFunctionCall = (0, _findInString2.default)(/\${\s*\w*\(/);
var hasQuotes = (0, _findInString2.default)(/:.*'.*'/);
var shouldKeepTemplate = (0, _findInString2.default)(/:(\s*)\$/);

var extractFunction = (0, _ramda.ifElse)(shouldKeepTemplate, (0, _ramda.replace)(/\${(\s*\w*\()(.*)\)};/, '$1[$2])(theme),'), (0, _ramda.replace)(/:\s*(.*)\${(\s*\w*\()(.*)\)};/, ': `$1${$2[$3])(theme)}`,'));

var stringifyValue = (0, _ramda.ifElse)(hasQuotes, (0, _ramda.replace)(';', ','), (0, _ramda.replace)(/:(\s*)(.*);/, ':$1\'$2\','));
var handleTemplateFunction = (0, _ramda.ifElse)(hasFunctionCall, extractFunction, function (line) {
  return line;
});

var quoteLine = (0, _ramda.replace)(/:(\s*)(.*);/, ': `$2`,');
var handleTemplate = (0, _ramda.ifElse)((0, _findInString2.default)(/\(\$\{\w*\}\)/), quoteLine, function (line) {
  return line;
});

var toCamelCase = function toCamelCase(line) {
  var _line$split = line.split(':'),
      _line$split2 = _slicedToArray(_line$split, 2),
      name = _line$split2[0],
      property = _line$split2[1];

  var camelName = (0, _ramda.replace)(/-\w/g, function (matched) {
    return matched[1].toUpperCase();
  }, name);
  return camelName + ':' + property;
};

function convertLine(line) {
  if (hasPropsFunction(line)) {
    return '';
  }

  var newLine = (0, _ramda.compose)(handleTemplate, handleTemplateFunction)(line);

  if (line === newLine) {
    newLine = stringifyValue(newLine);
  }

  return toCamelCase(newLine);
}