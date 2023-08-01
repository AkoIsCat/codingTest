const fs = require('fs');
const [count, ...array] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return -1;
    }
    const value = this.head.item;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  getSize() {
    return this.length;
  }

  empty() {
    if (this.length > 0) {
      return 0;
    } else {
      return 1;
    }
  }

  front() {
    if (this.length > 0) {
      return this.head.item;
    } else {
      return -1;
    }
  }

  back() {
    if (this.length > 0) {
      return this.tail.item;
    } else {
      return -1;
    }
  }
}

const answer = [];
const que = new Queue();

const command = array.map((item) => item.split(' '));
command.forEach((item) => {
  switch (item[0]) {
    case 'push':
      que.enqueue(item[1]);
      break;
    case 'pop':
      answer.push(que.dequeue());
      break;
    case 'front':
      answer.push(que.front());
      break;
    case 'back':
      answer.push(que.back());
      break;
    case 'size':
      answer.push(que.getSize());
      break;
    case 'empty':
      answer.push(que.empty());
      break;
  }
});

console.log(answer.join('\n'));
