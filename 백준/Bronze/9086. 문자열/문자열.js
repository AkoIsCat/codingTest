const [count, ...string] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const printString = (string) => {
  if (string.length === 1) {
    console.log(string + string);
    return;
  }
  console.log(string[0] + string[string.length - 1]);
};

string.forEach((item) => printString(item));
