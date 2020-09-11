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

    includes(val){
        let current = this.head;
        while(current) { 
            if(val === current.value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    toString(){
        let current = this.head;
        let resultString = '';
        while(current){
            resultString += current.value + '->';
            current = current.next;
        }
        return resultString + 'Null' ;
    }
}

module.exports = LinkedList;
