import {
  compose, split,
  join, filter, map,
  contains, replace
} from 'ramda';

import convertClassName from './helpers/convertClassName';
import convertLine from './helpers/convertLine';
import findInString from './helpers/findInString';

const matchHandler = replace(/(\s*)(.*)/, (_, spaces, rest) => {
  let formattedString;
  if (contains('{', rest) && !contains('${', rest)) {
    formattedString = convertClassName(rest);
  } else {
    formattedString = convertLine(rest);
  }
  return formattedString.length === 0 ?
    '' : `${spaces}${formattedString}`;
});

function baseHandler(line) {
  if (findInString(/^\s*$/)(line)) {
    return line;
  } else if (findInString(/^\s*\}/)(line)) {
    return line.replace('}', '},');
  }
  return matchHandler(line);
}

const extract = compose(
  join('\n'),
  filter(str => str.length !== 0),
  map(baseHandler),
  split('\n'),
);
export default extract;
