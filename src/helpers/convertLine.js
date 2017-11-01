import {
  replace, compose, match,
  ifElse, split, nth,
  anyPass
} from 'ramda';

import findInString from './findInString';

// const FUNCTIONS = [
//   'palette', 'font', 'key'
// ];

const hasPropsFunction = anyPass([
  findInString(/\${\s*\w* =>/),
  findInString(/props\[.*\]/),  
]);
const hasFunctionCall = findInString(/\${\s*\w*\(/);
const hasQuotes = findInString(/:.*'.*'/);

const extractFunction = replace(
  /\${(\s*\w*\()(.*)\)};/, '$1[$2])(theme),'
);
const stringifyValue = ifElse(
  hasQuotes,
  replace(';',','),
  replace(/:(\s*)(.*);/, ':$1\'$2\',')
);
const handleTemplateFunction = ifElse(
  hasFunctionCall,
  extractFunction,
  line => line,
);

const toCamelCase = (line) => {
  const [name, property] = line.split(':');
  const camelName = replace(/-\w/g, matched =>
    matched[1].toUpperCase(), name);
  return `${camelName}:${property}`;
}

export default function convertLine(line) {
  if (hasPropsFunction(line)) {
    return '';
  }

  let newLine = compose(
    handleTemplateFunction
  )(line);
 
  if (line === newLine) {
    newLine = stringifyValue(newLine);
  }

  return toCamelCase(newLine);
}
