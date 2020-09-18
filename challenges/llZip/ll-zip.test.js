'use-strict';

const LinkedList = require('../linkedList/linked-list');
const zipList = require('../llZip/ll-zip');

describe('Zip List ..........', () => {
  it(' zip two lists of the same length', () => {
    const linkedList1 = createList1();
    const linkedList = createList2();
    expect(zipList(linkedList1, linkedList).toString()).toBe('{1} -> {11} -> {2} -> {12} -> {3} -> {13} -> {4} -> {14} -> NULL');
  });


});

const createList1 = () => {
  const linkedList = new LinkedList();
  linkedList.insert('1');
  linkedList.insert('2');
  linkedList.insert('3');
  linkedList.insert('4');
  return linkedList;
};

const createList2 = () => {
  const linkedList = new LinkedList();
  linkedList.insert('11');
  linkedList.insert('12');
  linkedList.insert('13');
  linkedList.insert('14');
  return linkedList;
};