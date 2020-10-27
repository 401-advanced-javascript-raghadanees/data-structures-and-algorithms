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

// cc5
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
// Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
// Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
// Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
// "{ a } -> { b } -> { c } -> NULL"
// Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
// Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).


// cc6 
// .append(value) which adds a new node with the given value to the end of the list
// .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
// .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value 

// cc7
// Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

// cc8
// Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.




// Remove Node from Singly LL
// Question: How could you write an extension to remove a node from a LL


// If you want to remove a node from your linked list you have to find the node. There are three conditions here

// case -1: your targeted node is in the head. you have to replace the head with the next node
// case -2: your targeted node is in the tail. you just have to remove it from the tail. Hence next of the node before the tail will be null.
// case-3: your targeted node is in the middle of the LinkedList, you have to make the node after your targeted node to be the next node of the node before your targeted node.


// LinkedList.prototype.remove = function(val){
//   var current = this.head;
//   //case-1
//   if(current.value == val){
//      this.head = current.next;     
//   }
//   else{
//     var previous = current;
    
//     while(current.next){
//       //case-3
//       if(current.value == val){
//         previous.next = current.next;          
//         break;
//       }
//       previous = current;
//       current = current.next;
//     }
//     //case -2
//     if(current.value == val){
//       previous.next == null;
//     }
//   }
// }  


// https://www.thatjsdude.com/interview/linkedList.html#kthNodeFromEnd

// detect the starting node for a loop in that list if a loop exists
// Algorithm/Insights
// This is basically the Floyd's loop detection algorithm.
// 1. Initialize two references: a slow reference 'S' and a fast reference 'F' to the start of the list
// 2. Move 'S' forward one node at a time and move 'F' forward two nodes at a time.
// 3. If at some point of time, reference 'S' and reference 'F' point to the same node of the list then we know that there is a loop in the list otherwise we return null saying there is no loop.
// 4. After the loop is detected in step #3, we move back reference 'S' to the start of the list again and keep 'F' at same meeting point.
// 5. Now this time around, we move both 'S' and 'F' forward one node at a time until they meet.
// 6. The node where they meet is start of the loop.

// function detectLoop(sll){
//   var slowPointer = sll.head, 
//       fastPointer = sll.head;

//   while(slowPointer && fastPointer && fastPointer.next){
//     slowPointer = slowPointer.next;
//     fastPointer = fastPointer.next.next;

//     if(slowPointer == fastPointer){
//        return true;
//     }
//   }
//   return false;
// }

// function findLoopStart(sll){
//   var slow = sll.head,
//       fast = sll.head;
//   while(slow && fast){
//      slow = slow.next;

//      //if hits null, then there is no loop
//      if(!fast.next){
//         return null;
//      }

//      fast = fast.next.next;
//      if(slow == fast){
//          slow = sll.head;
//          while(slow != fast){
//             slow = slow.next;
//             fast = fast.next;
//          }
//          return slow;
//      }
//  }
// }


// Rotate by Kth Node
// Question: How could you rotate a Linked List by Kth Node?

// or

// Question:Append the last n nodes of a linked list to the beginning of the list

// Answer: if the given linked list is: 1->2->3->4->5 and k is 3,the list should be modified to: 4->5->1->2->3.


// //will not work for k less than length-1
// function rotateByKthNode(sll, k){
//    var prevHead = sll.head,
//        previous = sll.head, 
//        current = sll.head,
//        i = 1;   ////// i=0
//    while(current.next){
//      if(i==k+1){ ///// (i==k)
//        sll.head = current;
//        previous.next = null;
//      }
//      previous = current;
//      current = current.next;
//      i++;
//   }
//   current.next = prevHead;
//   return sll;
// }
        

// rotateByKthNode(sll,3);
// //{head: {value:4, next:{value: 5, next: {value: 1, next: {value:2, next:{value:3, next: null}}}}}}


// function reversesll(sll){
  
//   if(!sll.head || !sll.head.next) return sll;

//   var nodes=[], 
//     current = sll.head;
//   //storing all the nodes in an array
//   while(current){
//     nodes.push(current);
//     current = current.next;
//   }
    
//   var reversedLL = new LinkedList();
  
//   reversedLL.head = nodes.pop();
//   current = reversedLL.head;
  
//   var node = nodes.pop();  
//   //make sure to make next of the newly inserted node to be null
//   //other wise the last node of your SLL will retain its old next.
//   while(node){
//      node.next = null;
//      current.next = node;
     
//      current = current.next;
//      node = nodes.pop();
//   }
//   return reversedLL;
// }