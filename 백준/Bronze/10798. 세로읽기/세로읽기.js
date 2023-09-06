const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const answer = [];

const maxLength = Math.max(...input.map((i) => i.length));

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== undefined) {
      answer.push(input[j][i]);
    }
  }
}

console.log(answer.join(''));
