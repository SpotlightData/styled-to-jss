import { not, isEmpty, compose, match } from 'ramda';

const findInString = exp => compose(not, isEmpty, match(exp));

export default findInString;