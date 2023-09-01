const [n, ...m] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .replace(/\r/g, '')
  .split('\n');

const [arrLen, num] = n.split(' ');
const baskets = new Array(+arrLen).fill().map((v, i) => i + 1);

const inputBall = (str) => {
  const [a, b] = str.split(' ');
  const temp = baskets[a - 1];

  baskets[a - 1] = baskets[b - 1];
  baskets[b - 1] = temp;
};

m.forEach((item) => inputBall(item));
console.log(baskets.join(' '));