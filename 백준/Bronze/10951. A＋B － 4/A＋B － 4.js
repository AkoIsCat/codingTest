let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 0; i < input.length; i++) {
  let number = input[i].split(' ').map((item) => +item);

  console.log(number[0] + number[1]);
}
