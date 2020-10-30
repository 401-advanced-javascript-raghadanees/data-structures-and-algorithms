'use strict';
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // Root - Left - right
  preOrder() {
    let output = [];
    let _traverse = (node) => {
      output.push(node.value);
      if (node.left) { _traverse(node.left);   }
      if (node.right) {  _traverse(node.right); }
    };
    _traverse(this.root);
    return output;
  }
  // Left - Root - Right
  inOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      output.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return output;
  }
  // Left - Right - Root
  postOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      output.push(node.value);
    };
    _traverse(this.root);
    return output;
  }
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.right = node2;
node1.left = node3;
node3.right = node4;
node3.left = node5;
let binaryTreeObj = new BinaryTree(node1);
console.log('preOrder : >', binaryTreeObj.preOrder());
console.log('inOrder : >', binaryTreeObj.inOrder());
console.log('post : >', binaryTreeObj.postOrder());
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    // if the tree is empty will assign the new node to the root 
    if (this.root == null) {
      this.root = new Node(value);
      return;
    }
    // else if not empty go the method addNode 
    this.addNode(value, this.root);
  }
  addNode(value, node) {
    if (value > node.value) { // if the new value grater than node go to right
      if (node.right == null) { // if doesn't have a right assign the new value the right node
        node.right = new Node(value);
        return;
      } else { // if there is a right node , will do the recursion addnode 
        this.addNode(value, node.right);
        return;
      }
    }
    if (value <= node.value) { // if the new value less than node go to left 
      if (node.left == null) { // if doesn't have a left assign the new value to the left node 
        node.left = new Node(value);
        return;
      } else {
        this.addNode(value, node.left);
        return;
      }
    }
  }
  /**
 * to see if the value found in the tree or not 
 * @param {*} value 
 */
  contains(value) {
    return this.containsNode(value, this.root);
  }
  containsNode(value, node) {
    if (node == null) {
      return false;
    }
    if (node.value == value) {
      return true;
    } else if (node.value < value) {
      return this.containsNode(value, node.right);
    } else if (node.value >= value) {
      return this.containsNode(value, node.left);
    }
  }
}
let BST = new BinarySearchTree();
BST.add(1);
BST.add(2);
BST.add(3);
BST.add(4);
BST.add(5);
// BST.contains(5);
console.log('contaaaains', BST.contains(10));
console.log('addd', BST);
// console.log('vvv',BST.root.value);
// console.log('rrrrrr',BST.root.right);
// console.log('lllllll',BST.root.right.right.value);
// console.log('*****',BST.root.right.right.right.value);
// console.log('*****',BST.root.right.right.right.right.value);
module.exports = { Node, BinaryTree, BinarySearchTree };