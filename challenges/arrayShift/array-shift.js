'use strict';

let insertShiftArray = (arr, val) => {
    
    
  let mid = Math.ceil(arr.length / 2) - 1;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < mid) {
      newArr[i] = arr[i];
    }

    if (i === mid) {
      newArr[i] = arr[i];
      newArr[i + 1] = val;
    }

    if (i > mid) {
      newArr[i + 1] = arr[i];
    }
  }

  return newArr;
};

module.exports = insertShiftArray;