'use strict';

function reverseArray(arr){
  var outputArr = [];
  for (var i = arr.length - 1; i> -1; i--){
    outputArr.push(arr[i]);
  }

  return outputArr;
}

console.log(reverseArray([1,2,3,4,5,6,7]));