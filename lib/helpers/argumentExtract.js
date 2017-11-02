'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toObject = exports.extractValue = exports.filterArgs = undefined;

var _ramda = require('ramda');

const FLAGS = ['--path=', '--output='];

const filterArgs = exports.filterArgs = (0, _ramda.filter)(arg => (0, _ramda.any)((0, _ramda.contains)(_ramda.__, arg))(FLAGS));

const extractValue = exports.extractValue = (0, _ramda.compose)((0, _ramda.split)('='), (0, _ramda.replace)('--', ''));

const toObject = exports.toObject = (0, _ramda.reduce)((obj, [key, value]) => Object.assign({}, obj, { [key]: value }), {});

const argumentExtract = (0, _ramda.compose)(toObject, (0, _ramda.map)(extractValue), filterArgs);
exports.default = argumentExtract;