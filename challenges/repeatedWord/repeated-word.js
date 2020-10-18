'use strict';
let obj = {};

function repeatedWord(str) {
  let arrStr = str.split(',').join('').toLowerCase().split(' ');
  // console.log(arrStr);

  let newHash = new Hashtable(1024);
  for (let i = 0; i < arrStr.length; i++) {
    if (newHash.get(arrStr[i]) == null) {
      newHash.add(arrStr[i], 'any value');
    } else {
      return arrStr[i];
    }
  }
  return 'no repeated words';
}

class Hashtable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size);
  }


  hash(key) {
    return key.split('').reduce((accumilate, value) => {
      return accumilate + value.charCodeAt(0);
    }, 0) * 599 % this.size;

  }

  add(key, value) {
    let hashIndex = this.hash(key);
    if (!this.entries[hashIndex]) {
      this.entries[hashIndex] = new LinkedList();
    }
    let entry = { [key]: value };
    // console.log('entry,,,,', entry);
    this.entries[hashIndex].append(entry);
  }

  get(key) {
    const index = this.hash(key);
    return this.entries[index] ? this.entries[index] : null;
  }

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

obj.repeatedWord=repeatedWord;
obj.Hashtable= Hashtable;
console.log(obj);
module.exports=obj;

// let newHash = new Hashtable(1024);
// newHash.add('Raghad', 123);

// let str1 = 'Once upon a time, there was a brave princess who...';
// let str2 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..';
// let str3 = 'Once upon a time';
// console.log('str2......',repeatedWord(str1));
// console.log(repeatedWord(str2),'str2');
// console.log(repeatedWord(str3),'str3');