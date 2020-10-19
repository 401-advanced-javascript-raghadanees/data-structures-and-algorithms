'use strict';

class Hashtable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size);  //bucket
  }


  hash(key) {
    // I will has my key to get the index of where to store my data.
    return key.split('').reduce((accumilate, value) => {
      // console.log('accumilate',accumilate );
      // console.log('value', value);
      return accumilate + value.charCodeAt(0);
    }, 0) * 599 % this.size;

    // let charArr = key.split('');
    // return charArr.reduce((accumilate, value) => {
    //   return accumilate + value.charCodeAt(0);

    // }, 0) * 599 % this.size;
  }

  add(key, value) {
    // 1st get me the hashed of my key
    let hashIndex = this.hash(key);
    // if the key does not exist in my entries(new Array) then create it and add the new linkedlist to it, and add to the linkedlist
    // if this resulting key existed in the entries then add to it.
    if (!this.entries[hashIndex]) {
    // console.log('inside if entries,,,,',!this.entries[hashIndex])
      this.entries[hashIndex] = new LinkedList();
    }
    let entry = { [key]: value };
    console.log('entry,,,,',entry);
    this.entries[hashIndex].append(entry);
  }

  // this method will takes a key and return the value of the index of that key 
  get(key) {
    const index = this.hash(key); // will return the index of the key in the array hash table like [777]
    // return this.entries[index] ? this.entries[index] : null; // if the index is exist return the value of it , else return false
    return this.entries[index] ? this.entries[index] : null;
  }

  // this method will see the key exist in the hash table  is exist will return true if not return false 
  contains(key) {
    const hashIndex = this.hash(key);
    return this.entries[hashIndex] ? true : false;
  }

}


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {

      let curruntNode = this.head;
      while (curruntNode.next) {
        curruntNode = curruntNode.next;
      }
      curruntNode.next = newNode;
    }
  }

  includes(value) {
    let curentNode = this.head;
    while (curentNode) {
      if (curentNode.value == value) {
        return true;
      }
      curentNode = curentNode.next;
    }
    return false;
  }

}


let newHash = new Hashtable(1024);
newHash.add('Raghad', 123);
// newHash.add('R', 321);

// console.log('*****',newHash.get('Raghads'));
// console.log('contains*****',newHash.contains('Raghad'));
// console.log('newHash....', newHash);
// console.log('hash.....', newHash.hash('Raghad'));
// console.log('hash.....', newHash.hash('R'));

module.exports = Hashtable;

// module.exports = {LinkedList , Node, Hashtable};