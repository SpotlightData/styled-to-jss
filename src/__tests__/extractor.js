import extractor from '../extractor';
import fs from 'fs';
import path from 'path';

// TODO remove after testing
const file = fs.readFileSync(
  path.join(__dirname, './mockFile.txt'),
  { encoding: 'utf-8' }
);

describe('extractor', () => {
  it('should not modify empty line', () => {
    expect(extractor('   \n'))
      .toBe('   ');
  });

  it('should not modify lines with closing brackets', () => {
    expect(extractor('   }\n'))
      .toBe('   },');
  });

  it('should handle class formatting', () => {
    expect(extractor('  .isoForgotPass { '))
      .toContain('& .isoForgotPass\': {');
  });

  it('should handle regular line formatting', () => {
    expect(extractor('color: ${palette(\'text\', 3)};'))
      .toBe('color: palette([\'text\', 3])(theme),');
  });

  it('should remove white space if line is cleared', () => {
    expect(extractor('width:${props[\'test\']}};\n').length)
      .toBe(0);
  });

  console.log(extractor(file));
})
