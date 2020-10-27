'use strict';
const LinkedList = require('../linkedList/linked-list');

function zipLists(list1, list2) {

  let newZipList = new LinkedList();
    
  newZipList.append(list1.head.value);
  newZipList.append(list2.head.value);
    
  let current = list1.head.next;
  let currentOfList2 = list2.head.next;
  
  while (current || currentOfList2) {
    if (current) {
      newZipList.append(current.value);
      current = current.next;
    }
  
    if (currentOfList2) {
      newZipList.append(currentOfList2.value);
      currentOfList2 = currentOfList2.next;
    }
  }
  return newZipList;
}
  
module.exports = zipLists;
// cc8
// Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.