import { compose, replace, ifElse, contains } from 'ramda';

const quoteName = replace(/(.*)(\s\{)/, '\'$1\': {');
const addDependency = ifElse(contains('&'), line => line, replace(/([^(\s\s)]*)/, '& $1'));

const convertClassName = compose(quoteName, addDependency);
export default convertClassName;

// export default function convertClassName(line) {

//   return compose;
// }