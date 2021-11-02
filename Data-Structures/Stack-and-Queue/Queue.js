// Queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek = () => this.first;

  enqueue = (value) => {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
  };

  dequeue = () => {
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first?.next;
    this.length--;
    return this;
  };

  isEmpty = () => (!this.length ? true : false);
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.enqueue("Samir"));
// console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
// console.log(myQueue.peek());
// console.log(myQueue.isEmpty());

// console.log(myQueue.enqueue("Pavel"));
