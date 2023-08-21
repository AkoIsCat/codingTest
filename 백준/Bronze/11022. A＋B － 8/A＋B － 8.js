let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = +input[0];

for (let i = 1; i <= count; i++) {
  let number = input[i].split(' ').map((item) => +item);

  console.log(
    `Case #${i}: ${number[0]} + ${number[1]} = ${number[0] + number[1]}`
  );
}
