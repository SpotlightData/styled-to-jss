'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertLine;

var _ramda = require('ramda');

var _findInString = require('./findInString');

var _findInString2 = _interopRequireDefault(_findInString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const FUNCTIONS = [
//   'palette', 'font', 'key'
// ];

const hasPropsFunction = (0, _ramda.anyPass)([(0, _findInString2.default)(/\${\s*\w* =>/), (0, _findInString2.default)(/props\[.*\]/)]);
const hasFunctionCall = (0, _findInString2.default)(/\${\s*\w*\(/);
const hasQuotes = (0, _findInString2.default)(/:.*'.*'/);
const shouldKeepTemplate = (0, _findInString2.default)(/:(\s*)\$/);

const extractFunction = (0, _ramda.ifElse)(shouldKeepTemplate, (0, _ramda.replace)(/\${(\s*\w*\()(.*)\)};/, '$1[$2])(theme),'), (0, _ramda.replace)(/:\s*(.*)\${(\s*\w*\()(.*)\)};/, ': `$1${$2[$3])(theme)}`,'));

const stringifyValue = (0, _ramda.ifElse)(hasQuotes, (0, _ramda.replace)(';', ','), (0, _ramda.replace)(/:(\s*)(.*);/, ':$1\'$2\','));
const handleTemplateFunction = (0, _ramda.ifElse)(hasFunctionCall, extractFunction, line => line);

const quoteLine = (0, _ramda.replace)(/:(\s*)(.*);/, ': `$2`,');
const handleTemplate = (0, _ramda.ifElse)((0, _findInString2.default)(/\(\$\{\w*\}\)/), quoteLine, line => line);

const toCamelCase = line => {
  const [name, property] = line.split(':');
  const camelName = (0, _ramda.replace)(/-\w/g, matched => matched[1].toUpperCase(), name);
  return `${camelName}:${property}`;
};

function convertLine(line) {
  if (hasPropsFunction(line)) {
    return '';
  }

  let newLine = (0, _ramda.compose)(handleTemplate, handleTemplateFunction)(line);

  if (line === newLine) {
    newLine = stringifyValue(newLine);
  }

  return toCamelCase(newLine);
}