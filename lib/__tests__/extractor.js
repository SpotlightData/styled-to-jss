'use strict';

var _extractor = require('../extractor');

var _extractor2 = _interopRequireDefault(_extractor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import fs from 'fs';
// import path from 'path';

// // TODO remove after testing
// const file = fs.readFileSync(
//   path.join(__dirname, './mockFile.txt'),
//   { encoding: 'utf-8' }
// );

describe('extractor', function () {
  it('should not modify empty line', function () {
    expect((0, _extractor2.default)('   \n')).toBe('   ');
  });

  it('should not modify lines with closing brackets', function () {
    expect((0, _extractor2.default)('   }\n')).toBe('   },');
  });

  it('should handle class formatting', function () {
    expect((0, _extractor2.default)('  .isoForgotPass { ')).toContain('& .isoForgotPass\': {');
  });

  it('should handle regular line formatting', function () {
    expect((0, _extractor2.default)('color: ${palette(\'text\', 3)};')).toBe('color: palette([\'text\', 3])(theme),');
  });

  it('should remove white space if line is cleared', function () {
    expect((0, _extractor2.default)('      width:${props[\'test\']}};\n').length).toBe(0);
  });
  // console.log(extractor(file));
});