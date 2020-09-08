  
'use strict';

const insertShiftArray = require('./array-shift.js');


describe('`insertShiftArray` function', () => {
  
  describe('validate output', () => {
    it('should insert the target `val` in the middle of an even-length `arr`', () => {
      expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
    });
    it('should insert the target `val` just after the middle of an odd-length `arr`', () => {
      expect(insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
    });
  });
});