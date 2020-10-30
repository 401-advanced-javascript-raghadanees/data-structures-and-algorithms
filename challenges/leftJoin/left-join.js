'use strict';

function leftJoin(hash1, hash2) {

  let arr = [];

  Object.keys(hash1).forEach(key => {
    let arr2 = [];
    arr2.push(key, hash1[key]);
    if (hash2[key]) {
      arr2.push(hash2[key]);
    }
    else {
      arr2.push(null);
    }

    arr.push(arr2);
  });
  return arr;
}
 

let obj1 = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
 
};

let obj2 = {
  'fond': 'averse',
  'wrath': 'delight',
  'flow': 'idle',
  
};

module.exports = leftJoin;

console.log('leftJoin ======>', leftJoin(obj1,obj2));
// result will be as following::::

// leftJoin ======> [
//   [ 'fond', 'enamored', 'averse' ],
//   [ 'wrath', 'anger', 'delight' ],
//   [ 'diligent', 'employed', null ]
// ]