#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _argumentExtract = require('./helpers/argumentExtract');

var _argumentExtract2 = _interopRequireDefault(_argumentExtract);

var _extractor = require('./extractor');

var _extractor2 = _interopRequireDefault(_extractor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const relativePath = route => _path2.default.join(process.cwd(), route);

const args = (0, _argumentExtract2.default)(process.argv);
if (!args.path) {
  throw TypeError('Undefined path to the file, please include --path flag');
}
const file = _fs2.default.readFileSync(relativePath(args.path), { encoding: 'utf-8' });

const converted = (0, _extractor2.default)(file);

if (!args.output) {
  console.log(converted);
} else {
  _fs2.default.writeFileSync(relativePath(args.output), converted);
}