'use strict'
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