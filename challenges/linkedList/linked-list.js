'use strict';

let Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
    let node = new Node(value); // value: value, next: null
    // what if this linked list is empty?
    if (!this.head) { // !null => true : if I dont have head  ,,, same as this.head === null
      this.head = node;
      return this;
    }
    // if we have other stuff, I need to add it at the end
    // I have to loop through all nodes and add it to the tail
    let currentNode = this.head; // I start with the head always
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);

    let currentNode = this.head;

    if (currentNode.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }

      currentNode = currentNode.next;
    }
    return this;

  }

  insertAfter(value, newVal) {
    let newNode = new Node(newVal);

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
               
        return this;
      }
      currentNode = currentNode.next;
    }
    return this;


  }

  includes(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let resultString = '';
    while (current) {
      resultString += `{${current.value}} -> `;
      current = current.next;
    }
    return resultString + 'NULL';
  }

  kthFromEnd(k) {
    if (typeof k != 'number') { 
      throw Error('K is not number'); 
    }


    let count = 0;
    let current = this.head;
        
    while (current) {
      count++;
      current = current.next;
    }
        
        
    current = this.head;
    let index = (count - k) - 1;
    if (index < 0 || k < 0) {
      return 'not valid';
    }
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
        
    return current.value;
  }
}

module.exports = LinkedList;
