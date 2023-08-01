const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const count = +input[0];
let bracketCount = 0;
const answer = [];

for (let i = 1; i <= count; i++) {
  const detailArray = input[i].split('');

  for (let item of detailArray) {
    if (item === '(') {
      bracketCount++;
    } else if (item === ')') {
      bracketCount--;

      if (bracketCount < 0) {
        break;
      }
    }
  }

  answer.push(bracketCount === 0 ? 'YES' : 'NO');
  bracketCount = 0;
}

console.log(answer.join('\n'));