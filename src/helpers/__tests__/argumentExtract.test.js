import argumentExtract, {
  filterArgs,
  toObject,
  extractValue
} from '../argumentExtract.js';

const args = [
  '/home/august/.nvm/versions/node/v8.5.0/bin/node',
  '/home/august/projects/open-source/styled-to-jss/lib/index.js',
  '--path=./style.js',
  '--output=./style.converted.js'
];

const filteredArgs = [
  '--path=./style.js',
  '--output=./style.converted.js'
];

const splitArgs = [
  ['path', './style.js'],
  ['output', './style.converted.js'],
];

describe('argumentExtract.test.js', () => {
  it('should extract array of arguments to an object', () => {
    expect(argumentExtract(args))
      .toMatchObject({
        path: './style.js',
        output: './style.converted.js'
      });
  });

  describe('.filterArgs', () => {
    it('should remove arguments without flags', () => {
      expect(filterArgs(args))
        .toEqual(filteredArgs);
    });
  });

  describe('.toObject', () => {
    it('should convert array of flags to an object', () => {
      expect(toObject(splitArgs))
        .toMatchObject({
          path: './style.js',
          output: './style.converted.js'
        });
    });
  });

  describe('.extractValue', () => {
    it('should convert flag to [key, value]', () => {
      expect(extractValue(filteredArgs[0]))
        .toEqual(splitArgs[0]);
    });
  });
});
