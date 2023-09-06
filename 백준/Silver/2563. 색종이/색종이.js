const [count, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n')
  .map((i) => i.split(' ').map(Number));

let size = 0;

let Paper = new Array(100).fill().map(() => new Array(100).fill(0).map(Number));

input.forEach((item) => {
  const X = item[0];
  const Y = item[1];

  for (let i = X; i < X + 10; i++) {
    for (let j = Y; j < Y + 10; j++) {
      if (Paper[i][j] !== 0) {
        continue;
      }
      Paper[i][j] = 1;
      size++;
    }
  }
});

console.log(size);