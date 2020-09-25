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

  preOrder(){
    // /////////////////// root -> left -> right 
    if(this.root == null){
      return 'Empty tree !!!';
    }
    let  root = this.root;
    let visited = [];
    function traversalPreOrder(node){
      visited.push(node.value);
      if(node.left){
        traversalPreOrder(node.left);
      }
      if(node.right){
        traversalPreOrder(node.right);
      }
    }
    traversalPreOrder(root);
    return visited;
  }
  
  inOrder(){
    ///////////////////// left - root - right  
    if(this.root == null){
      return 'Empty tree';
    }
    let  root = this.root;
    let visited = [];
    function traversalInOrder(node){
      if(node.left){
        traversalInOrder(node.left);
      }
      visited.push(node.value);
      if(node.right){
        traversalInOrder(node.right);
      }
    }
    traversalInOrder(root);
    return visited;
  }

  postOrder(){
    // left - right - node  
    if(this.root == null){
      return 'Empty tree';
    }
    let  root = this.root;
    let visited = [];
    function traversalPostOrder(node){
      if(node.left){
        traversalPostOrder(node.left);
      }
      if(node.right){
        traversalPostOrder(node.right);
      }
      visited.push(node.value);
    }
    traversalPostOrder(root);
    return visited;
  }
}
//----------------------------------------------

class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  
  preOrderBST(){
    // root - left - right 
    if(this.root == null){
      return 'Empty tree';
    }
    let  root = this.root;
    let visited = [];
    function traversal(node){
      visited.push(node.value);
      if(node.left){
        traversal(node.left);
      }
      if(node.right){
        traversal(node.right);
      }
    }//end traversal function
    traversal(root);
    return visited;
  }
  inOrderBST(){
    // left - root - right  
    if(this.root == null){
      return 'Empty tree';
    }
    let  root = this.root;
    let visited = [];
    function traversal(node){
      if(node.left){
        traversal(node.left);
      }
      visited.push(node.value);
      if(node.right){
        traversal(node.right);
      }
    }
    traversal(root);
    return visited;
  }//end inOrderBST
  postOrderBST(){
    // left - right - node  
    if(this.root == null){
      return 'Empty tree !!!';
    }
    let  root = this.root;
    let visited = [];
    function traversal(node){
      if(node.left){
        traversal(node.left);
      }
      if(node.right){
        traversal(node.right);
      }
      visited.push(node.value);
    }
    traversal(root);
    return visited;
  }
  add(value){
    if(typeof value != 'number'){
      return 'the value should be number';
    }
    if(this.root == null){
      this.root = new Node(value);
      return this;
    }

    return  traversal(this.root);

    function traversal(node){
      if(value<node.value){
        if(node.left == null){
          node.left = new Node(value);
          return this;
        }else {
          return traversal(node.left);
        }
      }else if(value>node.value){
        if(node.right == null){
          node.right = new Node(value);
          return this;
        }else {
          return traversal(node.right);
        }
      }else {
        return 'this node is  exist';
      }
    }
  }//end add

  contains(value){
    if(typeof value != 'number'){
      return 'the value should be number';
    }
    if(this.root == null ){
      return 'Empty tree';
    }
    let node = this.root;
    while(node != null){
      if(value == node.value){
        return true;
      }else if(value< node.value){
        node=node.left;
      } else  if(value> node.value){
        node = node.right;
      }
    }
    return false;
  }//end contains 
}
let BST = new BinarySearchTree();
BST.add(10);
BST.add(15);
BST.add(5);
BST.add(50);
BST.add(3);
BST.add(7);
BST.add(12);
console.log(BST);
console.log(BST.contains(10));
console.log( '------' );
console.log('preOrderBST',BST.preOrderBST());
console.log( '------' );
console.log('inOrderBST',BST.inOrderBST());
console.log( '------' );
console.log('postOrderBST',BST.postOrderBST());
console.log( '------' );
let  BT = new BinaryTree();
//BT= BST;
console.log(BT);
console.log('preOrderBT',BT.preOrder());
console.log( '------' );
console.log('inOrderBT',BT.inOrder());
console.log( '------' );
console.log('postOrderBT',BT.postOrder());
console.log( '------' );




module.exports = {BT:BinaryTree, BST:BinarySearchTree , node : Node};