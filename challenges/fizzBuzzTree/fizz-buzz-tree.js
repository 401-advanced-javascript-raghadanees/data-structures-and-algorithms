'use strict';

class Node {
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
} 

class BinaryTree {
    constructor(){ 
      this.root = null;
    }
fizzBuzzTree(root){

    if (this.root === null) {
        return 'Empty tree';
    }
    let newNode = new Node('');
    if (root.value % 3 === 0)
        newNode.value += 'Fizz';
    if (root.value % 5 === 0)
        newNode.value += 'Buzz';
    if (newNode.value === '')
        newNode.value = `${root.value}`;
    newNode.left = fizzBuzzTree(root.left);
    newNode.right = fizzBuzzTree(root.right);
    return newNode;

}
}