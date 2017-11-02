'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var findInString = function findInString(exp) {
  return (0, _ramda.compose)(_ramda.not, _ramda.isEmpty, (0, _ramda.match)(exp));
};

exports.default = findInString;