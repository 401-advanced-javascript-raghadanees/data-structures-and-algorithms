'use strict';

const LinkedList = require('./linked-list.js');

describe('linked list module', () => {


  it(' check if k is greater than the length of the linked list', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(15);
  
    expect(ll.kthFromEnd(6)).toEqual('not valid');
  
  });
  
  it(' check if k and the length of the list are the same', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(15);
  
    expect(ll.kthFromEnd(3)).toEqual('not valid');
  });
  
  
  
  it('  check if k is not a positive integer', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(15);
  
    expect(ll.kthFromEnd(-3)).toEqual('not valid');
  });
  
  
  
  it('Where the linked list is of a size 1', () => {
    let ll = new LinkedList();
    ll.insert(5);
  
    expect(ll.kthFromEnd(1)).toEqual('not valid');
  });
  
  
  it('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(10);
    ll.insert(15);
  
    expect(ll.kthFromEnd(1)).toEqual(10);
  });
  
});

