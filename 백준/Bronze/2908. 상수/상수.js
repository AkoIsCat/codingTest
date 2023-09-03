const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(' ');

const reverseNumber = (num) => {
  const firstNum = num[0];
  const middleNum = num[1];
  const endNum = num[2];
  const tempNum = firstNum;

  return +(endNum + middleNum + tempNum);
};

const reverseOfA = reverseNumber(a);
const reverseOfB = reverseNumber(b);

console.log(reverseOfA > reverseOfB ? reverseOfA : reverseOfB);