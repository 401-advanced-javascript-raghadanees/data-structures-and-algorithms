'use strict';

let Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
    let node = new Node(value); // value: value, next: null
    node.next = this.head; // I start with the head always
    this.head = node;
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
    if ( k < 0) { 
      throw Error('K must be positive'); 
    }


    /// first we find the no. of node in ll 
    let count = 0;
    let current = this.head;
        
    while (current) {
      count++;
      current = current.next;
    }
    if ( k >= count) { 
      throw Error(`k must be less than ${count} `); 
    }
        
    current = this.head;
    let index = (count - k) - 1;
        
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
        
    return current.value;
  }
}

module.exports = LinkedList;
