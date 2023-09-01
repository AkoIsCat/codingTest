const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((i) => +i);

const arr = input.map((item) => item % 42);
const set = new Set(arr);

const answer = [...set];
console.log(answer.length);