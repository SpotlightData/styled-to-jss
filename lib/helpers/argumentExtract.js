'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toObject = exports.extractValue = exports.filterArgs = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ramda = require('ramda');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FLAGS = ['--path=', '--output='];

var filterArgs = exports.filterArgs = (0, _ramda.filter)(function (arg) {
  return (0, _ramda.any)((0, _ramda.contains)(_ramda.__, arg))(FLAGS);
});

var extractValue = exports.extractValue = (0, _ramda.compose)((0, _ramda.split)('='), (0, _ramda.replace)('--', ''));

var toObject = exports.toObject = (0, _ramda.reduce)(function (obj, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  return Object.assign({}, obj, _defineProperty({}, key, value));
}, {});

var argumentExtract = (0, _ramda.compose)(toObject, (0, _ramda.map)(extractValue), filterArgs);
exports.default = argumentExtract;