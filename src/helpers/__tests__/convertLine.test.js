import convertLine from '../convertLine';

describe('convertLine', () => {
  it('should wrap line value in string', () => {
    expect(convertLine('width: auto;'))
      .toBe('width: \'auto\',')
  });

  it('should convert snake-case names to camelCase', () => {
    expect(convertLine('background-color-front: auto;'))
      .toBe('backgroundColorFront: \'auto\',')

    expect(convertLine('background-color: ${palette(\'color\', 5)};'))
      .toBe('backgroundColor: palette([\'color\', 5])(theme),')
  })

  it('should remove line if it contains props', () => {
    expect(convertLine('width:${props => (...)};'))
      .toBe('');
    expect(convertLine('width:${props[\'test\']}};'))
      .toBe('');
  });

  it('should take function call out of template', () => {
    expect(convertLine('color: ${palette(\'secondary\', 2)};'))
      .toContain('palette([\'secondary\', 2])');
  });

  it('should convert function arguments list to a single argument array', () => {
    const newString = convertLine('color: ${palette(\'secondary\', 2)};');
    expect(newString.includes('palette([\'secondary\', 2])'))
      .toBe(true);
  });

  it('should pass theme to function call', () => {
    expect(convertLine('color: ${palette(\'secondary\', 2)};'))
      .toBe('color: palette([\'secondary\', 2])(theme),');
  });

  it('should keep string template if there is text before it', () => {
    expect(convertLine('border-top: 1px dashed ${palette(\'grayscale\', 2)};'))
      .toContain('1px dashed ${palette([\'grayscale\'], 2)(theme)}');
  });

  it('should not wrap empty value in string', () => {
    expect(convertLine('content: \'*\';'))
      .toBe('content: \'*\',');
  })

  it('should add ticks if template string is not calling a function', () => {
    expect(convertLine('background: url(${bgImage}) no-repeat center center;'))
      .toBe('background: \`url(${bgImage}) no-repeat center center\`');
  })
});
