const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getSize() {
    return this.length;
  }
}

const number = Number(input);
const list = new LinkedList();

for (let i = 1; i <= number; i++) {
  list.push(i);
}

while (list.length !== 1) {
  list.removeHead();
  list.push(list.getHead());
  list.removeHead();
}

console.log(list.getHead());
