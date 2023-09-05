const [count, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

let cnt = 0;

for (let i = 0; i < count; i++) {
  const array = input[i];
  const used = [];
  let flag = true;

  for (let j = 0; j < array.length; j++) {
    const char = array[j];
    if (!used.includes(char)) {
      used.push(char);
      // 문자열이 2개 이상일 때, 이 전의 문자와 일치하지 않는다면 그룹 단어X
    } else if (char !== array[j - 1]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    cnt++;
  }
}

console.log(cnt);