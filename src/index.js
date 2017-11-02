import fs from 'fs';
import path from 'path';

import argumentExtract from './helpers/argumentExtract';
import extractor from './extractor';

const relativePath = route =>
  path.join(process.cwd(), route);

if (require.main === module) {
  const args = argumentExtract(process.argv);
  if (!args.path) {
    throw TypeError('Undefined path to the file, please include --path flag');
  }
  const file = fs.readFileSync(
    relativePath(args.path),
    { encoding: 'utf-8' }
  );

  const converted = extractor(file);

  if (!args.output) {
    console.log(converted);
  } else {
    fs.writeFileSync(
      relativePath(args.output),
      converted
    );
  }
}

export default extractor;
