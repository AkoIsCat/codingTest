const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = +input;

console.log(
  (input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? '1' : '0'
);