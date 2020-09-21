'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

describe(' PseudoQueue Module ', () => {

  it('enqueue() , Add an item at the end of the PseudoQueue ', () => {

    let test = new PseudoQueue();
    expect(test.stackArray_1.length).toEqual(0);
    expect(test.stackArray_2.length).toEqual(0);
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    console.log('test enqueue : ', test);
    expect(test.stackArray_1).toEqual([1,2,3]);
  });

  it('dequeue() , remove an item at the end of the stackArray_1 then add it to stackArray_2  ', () => {

    let test = new PseudoQueue();
    expect(test.stackArray_1.length).toEqual(0);
    expect(test.stackArray_2.length).toEqual(0);
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    expect(test.stackArray_1).toEqual([1,2,3]);
    test.dequeue();
    console.log('test dequeue : ', test);
    expect(test.stackArray_1).toEqual([1,2]);
    expect(test.stackArray_2).toEqual([3]);
  });

});