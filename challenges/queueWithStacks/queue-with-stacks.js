'use strict';

class PseudoQueue {
  constructor(){
    this.stackArray_1 = [];
    this.stackArray_2 = [];

  }

  
  enqueue(val){
    this.stackArray_1.push(val);
  } 

  
  dequeue(){
  
    if(this.stackArray_1.length > 0){
      let shiftElement = this.stackArray_1.pop();
      this.stackArray_2.push(shiftElement);
    } 

    // this.stackArray_2.pop();
    if(!this.stackArray_1.length){
        if(!this.stackArray_2.length ){
            throw new Error('Empty Queue can not dequeue');
        }
      }
  } 
} 



module.exports = PseudoQueue;