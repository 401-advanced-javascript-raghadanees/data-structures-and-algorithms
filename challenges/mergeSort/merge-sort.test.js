'use strict';

const mergeSort = require('./merge-sort.js');

describe('Mergesort', () => {
  it('Mergesort ', () => {
    let array = [8, 4, 15, 16, 23, 42];
    expect(mergeSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
describe('merge sort tests', () => {
  it('will only sort arrays of at least 2 values', () => {
    global.console = {
      log: jest.fn(),
      info: jest.fn(),
      error: jest.fn(),
    };
    let x = [2, 1];
    mergeSort(x);
    expect(global.console.log).toHaveBeenCalledWith([1, 2]);
    expect(global.console.log).toHaveBeenCalledTimes(1);
  });
  it('arrays of 1 will not run', () => {
    global.console = {
      log: jest.fn(),
      info: jest.fn(),
    };
    let x = [1];
    mergeSort(x);
    expect(global.console.log).toHaveBeenCalledTimes(0);
  });
  it('will recursively go through arrays multiple times', () => {
    global.console = {
      log: jest.fn(),
      info: jest.fn(),
      error: jest.fn(),
    };
    let x = [8, 4, 23, 42, 16, 15];
    mergeSort(x);
    expect(global.console.log).toHaveBeenCalledTimes(5);
  });
});
