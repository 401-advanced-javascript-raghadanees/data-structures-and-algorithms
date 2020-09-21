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