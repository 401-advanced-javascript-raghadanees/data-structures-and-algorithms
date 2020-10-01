'use strict';

class Node {
  constructor(value, left = null, right = null){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
module.exports = Node;