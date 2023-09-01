const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .replace(/\r/g, '')
  .split('\n')
  .map((i) => +i);

const people = new Array(30).fill().map((v, i) => i + 1);

const answer = people.filter((item) => !input.includes(item));
console.log(answer.join('\n'));
