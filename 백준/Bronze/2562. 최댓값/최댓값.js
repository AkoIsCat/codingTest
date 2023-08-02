let input = require('fs')
  .readFileSync('/dev/stdin'
)
  .toString()
  .split('\n')
  .map(Number);

let max = Math.max(...input);

for (let i = 0; i < input.length; i++) {
  if (input[i] === max) {
    console.log(input[i]);
    console.log(i + 1);
  }
}
