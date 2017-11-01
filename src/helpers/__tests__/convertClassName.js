import convertClassName from '../convertClassName';

describe('convertClassName', () => {
  it('should wrap name in quotes', () => {
    expect(convertClassName('.isoLoginContent {'))
      .toContain('\'& .isoLoginContent\'')
  });

  it('should add a colon before curly brace', () => {
    expect(convertClassName('.test {'))
      .toContain(': {');
  });

  it('should add & symbol to className if it is not found', () => {
    expect(convertClassName('.test {'))
      .toBe('\'& .test\': {');
  });

  it('should work with media queries', () => {
    expect(convertClassName('@media only screen and (max-width: 767px) {'))
      .toBe('\'& @media only screen and (max-width: 767px)\': {');
  });

});
