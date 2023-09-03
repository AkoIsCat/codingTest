const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('');

const two = 'ABC';
const three = 'DEF';
const four = 'GHI';
const five = 'JKL';
const six = 'MNO';
const seven = 'PQRS';
const eight = 'TUV';
const nine = 'WXYZ';

const callNumber = (string) => {
  if (two.includes(string)) {
    return 3;
  } else if (three.includes(string)) {
    return 4;
  } else if (four.includes(string)) {
    return 5;
  } else if (five.includes(string)) {
    return 6;
  } else if (six.includes(string)) {
    return 7;
  } else if (seven.includes(string)) {
    return 8;
  } else if (eight.includes(string)) {
    return 9;
  } else if (nine.includes(string)) {
    return 10;
  }
};

const call = input.map((item) => callNumber(item));
console.log(call.reduce((v, i) => v + i));