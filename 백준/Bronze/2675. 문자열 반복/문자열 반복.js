const [T, ...R] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

let answer = '';

const repeatString = (count, string) => {
  answer += string.repeat(count);
};

R.forEach((item) => {
  const split = item.split(' ');
  const count = split[0];
  const stringArray = split[1].split('');

  stringArray.forEach((string) => repeatString(count, string));
  console.log(answer);
  answer = '';
});
