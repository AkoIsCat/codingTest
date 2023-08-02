let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = input[1]
  .split(' ')
  .map((item) => +item);

console.log(Math.min(...answer), Math.max(...answer));