'use strict';
// const { BinaryTree, Node } = require('../tree/tree.js');
class Node {
  constructor(value, left = null, right = null){
    this.value= value;
    this.left= left;
    this.right= right;
  }
}


class BinaryTree {
  constructor(root = null){ 
    this.root = root;
  }
}

function treeIntersection(tree1, tree2) {
  let resultArr = [];

  const preOrder = (tree) => {
    let visited = [];
    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) { traverse(node.right); }
    }
    traverse(tree.root);
    return visited;
  }
  let arr1 = preOrder(tree1);
  let arr2 = preOrder(tree2);

  arr1.forEach(value => arr2.includes(value) ? resultArr.push(value) : null);
  return resultArr;
}


let one = new Node(10);
let two = new Node(2);
let three = new Node(3);
let four = new Node(14);
let five = new Node(5);

one.right = two;
one.left = three;
three.right = four;
three.left = five;



let one2 = new Node(10);
let two2 = new Node(22);
let three2 = new Node(34);
let four2 = new Node(14);
let five2 = new Node(51);

one2.right = two2;
one2.left = three2;
three2.right = four2;
three2.left = five2;

let tree1Obj = new BinaryTree(one);
let tree2Obj = new BinaryTree(one2);

console.log('treeIntersection****', treeIntersection(tree1Obj, tree2Obj));

module.exports = { treeIntersection }

//  node challenges/treeIntersection/tree-Intersection.js