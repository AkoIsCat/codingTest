const [n, ...m] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .replace(/\r/g, '')
  .split('\n');

const [arrLen, num] = n.split(' ');

const baskets = new Array(+arrLen).fill(0);

const inputBall = (str) => {
  const [start, end, value] = str.split(' ').map((i) => +i);

  for (let i = start; i <= end; i++) {
    baskets[i - 1] = value;
  }
};

m.forEach((item) => inputBall(item));
console.log(baskets.join(' '));