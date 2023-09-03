const [string] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const stringArray = string.split('');
const asciiCodeInitialNumber = 97;

const asciiArray = new Array(26).fill(-1);

const searchAlphabet = (string, index) => {
  const number = string.charCodeAt();
  const asciiIndex = number - asciiCodeInitialNumber;
  if (asciiArray[asciiIndex] === -1) {
    asciiArray[asciiIndex] = index;
  }
};

stringArray.forEach((item, index) => searchAlphabet(item, index));
console.log(asciiArray.join(' '));
