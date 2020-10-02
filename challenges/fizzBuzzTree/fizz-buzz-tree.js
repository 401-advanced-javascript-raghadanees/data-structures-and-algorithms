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
    if (root.value % 3 == 0 && root.value % 5 == 0) {
      root.value = `FizzBuzz`;
    }
    else if (root.value % 3 === 0){
      root.value = 'Fizz';
    }
        
    else if (root.value % 5 === 0){
      root.value = 'Buzz';
    }

    if (root.value === '')
      root.value = `${root.value}`;
    root.left = fizzBuzzTree(root.left);
    root.right = fizzBuzzTree(root.right);
    return root;

  }
}