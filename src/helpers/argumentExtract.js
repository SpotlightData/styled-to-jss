import {
  filter, contains, any,
  __, reduce, compose,
  split, replace, map
} from 'ramda';

const FLAGS = [
  '--path=',
  '--output=',
];

export const filterArgs = filter(arg =>
  any(contains(__, arg))(FLAGS));

export const extractValue = compose(
  split('='),
  replace('--', '')
);

export const toObject = reduce((obj, [key, value]) =>
  Object.assign({}, obj, { [key]: value }), {});

const argumentExtract = compose(
  toObject,
  map(extractValue),
  filterArgs
);
export default argumentExtract;
