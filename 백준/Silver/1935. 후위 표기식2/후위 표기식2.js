let [_, string, ...array] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .replace(/\r/g, '')
  .split('\n');

const operand = [];
const map = new Map();

const calculate = (num1, num2, op) => {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
};

for (let item of string) {
  if (item !== '-' && item !== '+' && item !== '*' && item !== '/') {
    if (!map.has(item)) {
      map.set(item, array.shift());
    }
    operand.push(map.get(item));
  } else {
    const op2 = operand.pop();
    const op1 = operand.pop();
    operand.push(calculate(+op1, +op2, item));
  }
}

console.log(parseFloat(operand.pop()).toFixed(2));

