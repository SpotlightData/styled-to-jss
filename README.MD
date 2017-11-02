## Version is still in beta and only does line by line convertions at the moment

## Set up
We use yarn as our package manager. To get dependencies run<br>
`yarn install`<br>
For development run: <br>
`yarn install --dev`<br>


## CLI usage
Run `yarn global add styled-to-jss` or `npm install styled-to-jss -g` if you use `npm`<br>
Example usage<br>
`styled-to-jss --path="./style.js" --output="./style.converted.js"`

### Flags
```
--path [Relative path to the file that will be converted]
--output [Where the converted version be written to (if not specified it will output to stdout)]
```

### Regular usage
```javascript
  import extractor from 'styled-to-jss';
  const newString = extractor('background-color: red;');
  console.log(newString);// backgroundColor: 'red',
```
