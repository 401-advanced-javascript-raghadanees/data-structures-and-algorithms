'use strict';

const { Stack, Queue } = require('./stacks-and-queues.js');

describe('Stack tests', () => {
  it('Can instantiate a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });
  it('Can check if a stack is empty or not', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('Can push into the stack', () => {
    const stack = new Stack();
    stack.push(45);
    expect(stack.top.value).toBe(45);
  });
  it('Can add more than node onto stack', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.top.value).toBe(1);
    expect(stack.top.next.value).toBe(2);
    expect(stack.top.next.next.value).toBe(3);
  });
  it('Can pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    stack.pop();
    expect(stack.top.value).toBe(2);
  });

  it('Can peek the next item on the stack.', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });
});

describe('Queue tests', () => {
  it('Can instantiate a queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });
  it('Can check if a queue is empty or not', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(22);
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('Can enqueue onto a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
  });

  it('Can dequeue off of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    queue.enqueue(2);
    expect(queue.front.next.value).toBe(2);
    expect(queue.front.value).toBe(1);
    queue.dequeue();
    expect(queue.front.value).toBe(2);
  });
  it('Can peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.front.next.value).toBe(2);
    expect(queue.peek()).toBe(1);
    queue.enqueue(3);
    expect(queue.front.next.next.value).toBe(3);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

});