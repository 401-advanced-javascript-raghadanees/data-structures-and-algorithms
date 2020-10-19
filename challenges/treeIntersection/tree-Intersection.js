'use strict';

// Time O(n) n is the number of nodes
// Space O(h) h is the height of the tree

// Binary Search Tree 
// O(log(n))
// O(h)

class BinaryTree {

  constructor(root) {
    this.root = root;
  }



  // Left - Right - Root
  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
  postOrderObj() {
    let obj = {};
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      obj[node.value] = 1;
    };
    _walk(this.root);
    return obj;
  }
}
   
function treeIntersection (tree1,tree2){
  let arr = [];
  var firstTreeObj =  tree1.postOrderObj();
  let _walk = (node) => {
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    if(firstTreeObj[node.value])arr.push(node.value);
  };
  _walk(tree2.root);
  return arr;
}

const Node = require('./node');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;
let tree1= new BinaryTree(one);
console.log('tree.inOrder(1)',tree1.postOrderObj(43543));
// tree1.preOrder(2);
// tree1.preOrder(3);
// tree1.preOrder(4);
// tree1.preOrder(5);
// tree1.preOrder(6);
console.log(tree1);

let one2 = new Node(1);
let two2 = new Node(2);
let three2 = new Node(3);
let four2 = new Node(4);
let five2 = new Node(5);
let six2 = new Node(6);
let seven2 = new Node(7);


one2.left = two2;
one2.right = three2;
two2.left = six2;
six2.right = seven2;
// seven2.left = eight2;
// seven2.right = nine2;
three2.left = four2;
three2.right = five2;
let tree2= new BinaryTree(one2);
console.log(treeIntersection (tree1,tree2));

module.exports = BinaryTree;