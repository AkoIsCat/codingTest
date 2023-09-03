const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(' ');

const [num1, num2] = input.map((item) => +item.split('').reverse().join(''));
console.log(Math.max(num1, num2));
