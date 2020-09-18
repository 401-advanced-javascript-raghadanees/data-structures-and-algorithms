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
  isEmpty() {
    return this.length === 0;
  }


}
//  test
// let st = new Stack();
//  st.push(1);
// st.push(2);
// st.push(3);
// console.log(st)

// console.log(st.isEmpty());
//  st.pop()
// console.log(st)

// console.log(st.peek());



class Queue {
  constructor() {
    this.front = null;
    this.length = 0;
  }
  //Push data in the queue
  enqueue(val) {
    let node = new Node(val);
    let current;
    if (this.front === null) { ///!this.front
      this.front = node;
    } else {
      current = this.front;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  dequeue() {
    //let current = this.front;
    if (!this.front) {
      throw new Error('Empty Queue can not dequeue');
    }
    else {
      let val = this.front.value;
      this.front = this.front.next;
      this.length--;
      return val;
    }

  }

  peek() {
    if (!this.front) {
      throw new Error('Empty Queue can not');
    }
    else {
      return this.front.value;

    }
  }

  isEmpty() {
    return this.length === 0;
  }
    
//   isEmpty(){
//     if(!this.front){
//       return true;
//     }
//     return false;
//   }
}
// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// console.log(q.peek())

// q.dequeue();

// console.log(q)
// console.log(q.isEmpty())
// q.dequeue();
// console.log(q.isEmpty())
module.exports = { Node, Stack, Queue };

//// push() : Add items to the end of an array
// let cats = ['Bob']; >>> cats.push('Willy'); // ['Bob', 'Willy']

//// unshift() : Add items to the beginning of an array
// let cats = ['Bob']; >>>>> cats.unshift('Willy'); // ['Willy', 'Bob']

//// pop() : Remove an item from the end of an array
// let cats = ['Bob', 'Willy', 'Mini']; >>>>>. cats.pop(); // ['Bob', 'Willy']
// pop() returns the removed item.

//// shift() : Remove an item from the beginning of an array
// let cats = ['Bob', 'Willy', 'Mini'];
// cats.shift(); // ['Willy', 'Mini']