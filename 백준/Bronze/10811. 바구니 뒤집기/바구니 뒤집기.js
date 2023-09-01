const [n, ...m] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .replace(/\r/g, '')
  .split('\n');

const [arrLen, num] = n.split(' ').map((i) => Number(i));
const basket = new Array(arrLen).fill().map((v, i) => i + 1);

const reverseBasket = (str) => {
  const [a, b] = str.split(' ').map((item) => Number(item));

  let temp = [];

  for (let i = a - 1; i < b; i++) {
    temp.push(basket[i]);
  }
  temp.reverse();
  basket.splice(a - 1, b - a + 1, ...temp);
};

m.forEach((item) => reverseBasket(item));
console.log(basket.join(' '));