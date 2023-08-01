const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const count = input[0];
const stack = [];
const answer = [];

for (let i = 1; i <= count; i++) {
  if (input[i].includes('push')) {
    stack.push(input[i].split(' ')[1]);
  } else if (input[i] === 'pop') {
    answer.push(stack.length !== 0 ? stack.pop() : '-1');
  } else if (input[i] === 'size') {
    answer.push(stack.length);
  } else if (input[i] === 'empty') {
    answer.push(stack.length !== 0 ? '0' : '1');
  } else if (input[i] === 'top') {
    answer.push(stack.length !== 0 ? stack[stack.length - 1] : '-1');
  }
}


console.log(answer.join('\n'));
