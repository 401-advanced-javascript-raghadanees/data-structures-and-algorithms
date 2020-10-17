'use strict';

function mergeSort(arr){
  if(!arr.length || typeof arr !== 'object') throw new Error('Not Valid Input');

  let n = arr.length;
  if (n > 1){
    let mid = n/2;
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);
    Merge(left, right, arr);
    console.log(arr);
    return arr ;
  }
}

function Merge(left, right, arr){
  let l = 0;
  let r = 0;
  let i = 0;

  while( l < left.length && r < right.length){
    if(left[l] <= right[r]){
      arr[i] = left[l];
      l++;
    }else{
      arr[i] = right[r];
      r++;
    }
    i++;
  }

  if (l === left.length){
    for(r; r < right.length; r++){
      arr[i] = right[r];
      i++;
    }
  }else{
    for(l; l < left.length; l++){
      arr[i] = left[l];
      i++;
    }
  }
}

let x = [8,4,23,42,16,15];
// let x = [1];

mergeSort(x);

// let x1 = [8,4,23,42,16,15];
// let x2 = [20,18,12,8,5,-2];
// let x3 = [5,12,7,5,5,7];
// let x4 = [2,3,5,7,13,11];
// console.log(mergeSort(x1));
// console.log(mergeSort(x2));
// console.log(mergeSort(x3));
// console.log(mergeSort(x4));

module.exports = mergeSort;


// Merge Sort
// Assignment
// Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.
// Once you are done with your article, code a working, tested implementation of Merge Sort based on the pseudocode provided.
// Pseudo Code
// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)
// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0
//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
//         k <-- k + 1
//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left
// Sample Arrays
// In your blog article, visually show the output of processing this input array:
// [8,4,23,42,16,15]
// For your own understanding, consider also stepping through these inputs:
// Reverse-sorted: [20,18,12,8,5,-2]
// Few uniques: [5,12,7,5,5,7]
// Nearly-sorted: [2,3,5,7,13,11]
// Implementation
// Provide a visual step through for each of the sample arrays based on the provided pseudo code
// Convert the pseudo-code into working code in your language
// Present a complete set of working tests
