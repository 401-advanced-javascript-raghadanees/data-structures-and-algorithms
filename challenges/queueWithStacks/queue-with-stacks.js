'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// stack LIFO >> last in first out
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;

  }
  //  adds a new node with a value to the top of the stack
  push(val) {
    let node = new Node(val);
    node.next = this.top;  /// الترتيب مهم اول شي مننقل قيمة التوب وبعدا منضيف النود 
    this.top = node;
    this.length++;
  }


  // pop removes the node from the top of the stack, and returns the node’s value.
  pop() {
    let newTop = this.top;
    if (this.top) {
      let val = newTop.value;
      newTop = newTop.next;
      this.top = newTop;
      this.length--;
      return val;
    } else {
      throw new RangeError('Empty!! Can not pop');
    }
  }
  // peek returns the value of the node located on top of the stack, without removing it from the stack.
  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      throw new RangeError('Empty!! Can not peek');
    }

  }
  

}

class PseudoQueue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
    this.size=0;

  }


  enqueue(val) {
    this.inputStack.push(val);
    this.size++;
  }


  dequeue() {
    let current = this.inputStack.top;
    while (current) {
      this.outputStack.push(current.value);
      current = current.next;
    }

    this.outputStack.pop();
    this.size--;
    this.inputStack = new Stack();

    current = this.outputStack.top;

    while (current) {
      this.inputStack.push(current.value);
      current = current.next;
    }

    this.outputStack = new Stack();
  }


}

// let q = new PseudoQueue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log('q : ', q);
// q.dequeue();
// q.dequeue();
// q.dequeue();

// console.log('q : ', q);



module.exports = PseudoQueue;