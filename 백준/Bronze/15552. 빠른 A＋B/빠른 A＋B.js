let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = +input[0];
let answer = '';

for (let i = 1; i <= count; i++) {
  let number = input[i].split(' ').map((item) => +item);

  answer += `${number[0] + number[1]}\n`;
}

console.log(answer);
