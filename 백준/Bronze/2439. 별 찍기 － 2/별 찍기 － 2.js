let input = require('fs').readFileSync('/dev/stdin').toString();

let str = '*';
let empty = ' ';

for (let i = 1; i <= +input; i++) {
  console.log(empty.repeat(input - i) + str.repeat(i));
}
