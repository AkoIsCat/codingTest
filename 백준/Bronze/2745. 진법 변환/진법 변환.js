const [string, number] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(' ');


console.log(parseInt(string, number));
