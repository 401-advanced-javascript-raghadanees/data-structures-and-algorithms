'use strict';

const { Node, BinaryTree } = require('../tree/tree');
const { tree_intersection } = require('./tree-Intersection');
describe('Binary Tree', () => {
  let node1 = new Node(10);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(14);
  let node5 = new Node(5);
  node1.right = node2;
  node1.left = node3;
  node3.right = node4;
  node3.left = node5;
  let node01 = new Node(10);
  let node02 = new Node(22);
  let node03 = new Node(34);
  let node04 = new Node(14);
  let node05 = new Node(51);
  node01.right = node02;
  node01.left = node03;
  node03.right = node04;
  node03.left = node05;
  let binaryTreeObj = new BinaryTree(node1);
  let binaryTreeObj2 = new BinaryTree(node01);
  // Root - Left - Right
  it('treeIntersection()', () => {
    let expected = [10,14];
    let treeIntersection = tree_intersection(binaryTreeObj, binaryTreeObj2);
    expect(treeIntersection).toEqual(expected);
  });
});