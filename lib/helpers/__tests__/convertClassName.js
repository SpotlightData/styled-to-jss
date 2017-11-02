'use strict';

var _convertClassName = require('../convertClassName');

var _convertClassName2 = _interopRequireDefault(_convertClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('convertClassName', function () {
  it('should wrap name in quotes', function () {
    expect((0, _convertClassName2.default)('.isoLoginContent {')).toContain('\'& .isoLoginContent\'');
  });

  it('should add a colon before curly brace', function () {
    expect((0, _convertClassName2.default)('.test {')).toContain(': {');
  });

  it('should add & symbol to className if it is not found', function () {
    expect((0, _convertClassName2.default)('.test {')).toBe('\'& .test\': {');
  });

  it('should work with media queries', function () {
    expect((0, _convertClassName2.default)('@media only screen and (max-width: 767px) {')).toBe('\'& @media only screen and (max-width: 767px)\': {');
  });
});