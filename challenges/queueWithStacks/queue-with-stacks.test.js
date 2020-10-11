'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

describe(' PseudoQueue Module ', () => {

  it('enqueue()...................  ', () => {

    let testQ = new PseudoQueue();
    expect(testQ.inputStack.length).toEqual(0);
    expect(testQ.outputStack.length).toEqual(0);
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    console.log('testQ enqueue : ', testQ);
    
    expect([testQ.inputStack.top.value,testQ.inputStack.top.next.value,testQ.inputStack.top.next.next.value]).toEqual([3,2,1]);
  });

  it('dequeue() ,,,,,,,,,,,, ', () => {

    let testQ = new PseudoQueue();
    expect(testQ.inputStack.length).toEqual(0);
    expect(testQ.outputStack.length).toEqual(0);
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    expect([testQ.inputStack.top.value,testQ.inputStack.top.next.value,testQ.inputStack.top.next.next.value]).toEqual([3,2,1]);
    testQ.dequeue();
    console.log('testQ dequeue : ', testQ);
    expect([testQ.inputStack.top.value,testQ.inputStack.top.next.value]).toEqual([3,2]);
    // expect(testQ.outputStack).toEqual([1]);
  });

});

