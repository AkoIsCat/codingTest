const fs = require('fs');
const [people, number] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(' ');

const queue = [];
const answer = [];
let count = 1;

for (let i = 1; i <= people; i++) {
  queue.push(i);
}

while (queue.length) {
  const shiftValue = queue.shift();
  if (count % number === 0) {
    answer.push(shiftValue);
  } else {
    queue.push(shiftValue);
  }
  count++;
}

console.log(`<${answer.join(', ')}>`);
