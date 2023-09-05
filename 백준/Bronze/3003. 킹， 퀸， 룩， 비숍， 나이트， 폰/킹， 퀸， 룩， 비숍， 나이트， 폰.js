const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(' ')
  .map((i) => +i);

const chess = [1, 1, 2, 2, 2, 8];
let answer = [];

input.forEach((item, index) => {
  answer.push(chess[index] - item);
});

console.log(answer.join(' '));
