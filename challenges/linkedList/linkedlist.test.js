'use strict';

const LinkedList = require('./linked-list.js');

describe('Linked-list Modules', () => {

  it('constructor()', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  // it('insert()', () => {
  //   let list = new LinkedList();
  //   let initialValue = 'First One';
  //   list.insert(initialValue);
  //   expect(list.head.value).toEqual(initialValue);

  //   let newValue = 'Second Value';
  //   list.insert(newValue);
  //   expect(list.head.value).toEqual(initialValue);
  //   expect(list.head.next).not.toBeNull();
  //   expect(list.head.next.value).toEqual(newValue);

  //   console.log('list -----> ', list);
  // });

  it('includes()', () => {
    let list = new LinkedList();
    let val1 = 'Hi';
    list.insert(val1);
    let val2 = 'I am';
    list.insert(val2);
    list.insert(23);
    expect(list.includes('I am')).toBeTruthy();
    // expect(list.includes(23)).toBe(true);
    expect(list.includes('ok')).toBe(false);
  });

  // it('toString()', () => {
  //   let list = new LinkedList();
  //   list.insert('Hi');
  //   list.insert('I am');
  //   list.insert(23);
  //   expect(list.toString()).toEqual('{Hi} -> {I am} -> {23} -> NULL');
  // });

  it('append()', () => {
    let list = new LinkedList();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Second Value';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.value).toEqual(newValue);

    console.log('list -----> ', list);  
  });

  it('insertBefore() as first one', () => {
    let list = new LinkedList();
    let first = 1;
    list.append(first);
    list.append(2);
    list.append(3);
    list.insertBefore(1, 5);
    expect(list.head.value).toEqual(5);
    expect(list.head.next.value).toEqual(1);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.toString()).toEqual('{5} -> {1} -> {2} -> {3} -> NULL');
       
  });

  it('insertBefore() not as first value', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(2, 5);
    expect(list.toString()).toEqual('{1} -> {5} -> {2} -> {3} -> NULL');
  });


  it('insertAfter() in the middle of list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(2, 5);
    expect(list.toString()).toEqual('{1} -> {2} -> {5} -> {3} -> NULL');
  });

  it('insertAfter() at the end after last one', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(3, 5);
    expect(list.toString()).toEqual('{1} -> {2} -> {3} -> {5} -> NULL');
  });
});