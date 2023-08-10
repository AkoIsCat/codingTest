const fs = require('fs');
const [count, ...array] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .replace(/\r/g, '')
  .split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push_front(value) {
    const newNode = new Node(value);
    if (this.size() === 0) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  push_back(value) {
    const newNode = new Node(value);
    if (this.size() === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop_front() {
    if (this.size() === 0) {
      return -1;
    }

    const removeItem = this.head.value;
    this.head = this.head.next;
    if (this.size() === 1) {
      this.head = null;
    } else {
      this.head.prev = null;
    }
    this.length--;
    return removeItem;
  }

  pop_back() {
    if (!this.length) {
      return -1;
    }

    const removeItem = this.tail.value;
    this.tail = this.tail.prev;
    if (this.size() === 1) {
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.length--;
    return removeItem;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length !== 0 ? 0 : 1;
  }

  front() {
    return this.empty() === 1 ? -1 : this.head.value;
  }
  back() {
    return this.empty() === 1 ? -1 : this.tail.value;
  }
}

const answer = [];
const deque = new Deque();

const command = array.map((item) => item.split(' '));
command.forEach((item) => {
  switch (item[0]) {
    case 'push_back':
      deque.push_back(item[1]);
      break;
    case 'push_front':
      deque.push_front(item[1]);
      break;
    case 'front':
      answer.push(deque.front());
      break;
    case 'back':
      answer.push(deque.back());
      break;
    case 'size':
      answer.push(deque.size());
      break;
    case 'empty':
      answer.push(deque.empty());
      break;
    case 'pop_front':
      answer.push(deque.pop_front());
      break;
    case 'pop_back':
      answer.push(deque.pop_back());
      break;
  }
});

console.log(answer.join('\n'));
