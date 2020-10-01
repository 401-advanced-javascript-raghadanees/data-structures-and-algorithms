'use strict';

const BinarySearchTree = require('./tree.js');

describe('BinarySearchTree Module', () => {
  it('preOrderBST()', () => {
    var Bst = new BinarySearchTree();

    // adding nodes to the BinarySearchTree
    Bst.add(15);
    Bst.add(25);
    Bst.add(10);
    Bst.add(7);
    Bst.add(22);
    Bst.add(17);
    Bst.add(13);
    Bst.add(5);
    Bst.add(9);
    Bst.add(27);

    expect(Bst.preOrderBST()).toEqual([15, 10, 7, 5, 9, 13, 25, 22, 17, 27]);
  });
  it('preOrderBST() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.preOrderBST();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('inOrderBST()', () => {
    var Bst = new BinarySearchTree();

    // adding nodes to the BinarySearchTree
    Bst.add(15);
    Bst.add(25);
    Bst.add(10);
    Bst.add(7);
    Bst.add(22);
    Bst.add(17);
    Bst.add(13);
    Bst.add(5);
    Bst.add(9);
    Bst.add(27);


    expect(Bst.inOrderBST()).toEqual([5, 7, 9, 10, 13, 15, 17, 22, 25, 27]);
  });
  it('inOrderBST() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.inOrderBST();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('postOrderBST()', () => {
    var Bst = new BinarySearchTree();

    // adding nodes to the BinarySearchTree
    Bst.add(15);
    Bst.add(25);
    Bst.add(10);
    Bst.add(7);
    Bst.add(22);
    Bst.add(17);
    Bst.add(13);
    Bst.add(5);
    Bst.add(9);
    Bst.add(27);

    
    expect(Bst.postOrderBST()).toEqual([5, 9, 7, 13, 10, 17, 22, 27, 25, 15]);
  });

  it('postOrderBST() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.postOrderBST();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });


  
  it('contains() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.contains(null, 13);
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });



  
});

describe('binary Search tree', () => {

  let BST = new BinarySearchTree();
  
  BST.add(1);
  BST.add(2);
  BST.add(3);
  BST.add(4);
  BST.add(5);
  
  console.log(BST);
  console.log(BST.root.value);
  
  it('can add nodes in the correct location ', () => {
    expect(BST.root.value).toEqual(1);
    expect(BST.root.right.value).toEqual(2);
    expect(BST.root.right.right.value).toEqual(3);
    expect(BST.root.right.right.right.value).toEqual(4);
    expect(BST.root.right.right.right.right.value).toEqual(5);
  
  });
  
  it('can handle returning out when adding an existing value to a binary search tree', () => {
    BST.add(1);
    expect(BST.root.value).toEqual(1);
  });
  
  it('can look at a BST to see if it contains a given value', () => {
    expect(BST.contains(1)).toEqual(true);
    expect(BST.contains(44)).toEqual(false);
    expect(BST.contains(33)).toEqual(false);
  });
  
         
  
});
//   describe('binary tree......', () => {

//     let node1 = new Node(1);
//     let node2 = new Node(2);
//     let node3 = new Node(3);
//     let node4 = new Node(4);
//     let node5 = new Node(5);
  
//     node1.right = node2;
//     node1.left = node3;
//     node3.right = node4;
//     node3.left = node5;
  
  
//     let tree = new BinaryTree(node1);
  
//     it('preOrder', () => {
//       let expected = [1, 3, 5, 4, 2];
//       let preOrderOutput = tree.preOrder();
//       expect(preOrderOutput).toEqual(expected);
  
//     });
  
  
//     it('inOrder', () => {
//       let expected = [5, 3, 4, 1, 2];
//       let preOrderOutput = tree.inOrder();
//       expect(preOrderOutput).toEqual(expected);
  
//     });
  
//     it('postOrder', () => {
//       let expected = [5, 4, 3, 2, 1];
//       let preOrderOutput = tree.postOrder();
//       expect(preOrderOutput).toEqual(expected);
  
//     });
  
  
  
//   });
  