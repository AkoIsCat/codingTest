const [count, string] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const stringArray = string.split('').map((i) => +i);

const answer = stringArray.reduce((value, item) => value + item, 0);

console.log(answer);
