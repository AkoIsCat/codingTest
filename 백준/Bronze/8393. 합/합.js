let input = require('fs').readFileSync('/dev/stdin').toString();

let sum = 0;

for (let i = 1; i <= +input; i++) {
  sum += i;
}

console.log(sum);