const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('');

console.log(input.join('') === [...input].reverse().join('') ? 1 : 0);
