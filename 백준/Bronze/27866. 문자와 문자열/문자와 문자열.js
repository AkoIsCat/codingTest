const [string, index] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .replace(/\r/g, '')
  .split('\n');

console.log(string[index - 1]);
