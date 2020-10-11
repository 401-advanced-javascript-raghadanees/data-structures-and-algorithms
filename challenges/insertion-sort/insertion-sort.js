'use strict';
function insertionSort(array){
  if(!array.length || (typeof array !== 'object')) 
    throw new Error('Invalid sequence');
  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    let temp = array[i];
    while( j >= 0 && temp < array[j]){
      array[j + 1] = array [j];
      j = j - 1;
    }
    array[j + 1 ] = temp;
  }
  return array;
}

// let x1 = [8,4,23,42,16,15];
// let x2 = [20,18,12,8,5,-2];
// let x3 = [5,12,7,5,5,7];
// let x4 = [2,3,5,7,13,11];
//  console.log(insertionSort(x1));
//  console.log(insertionSort(x2));
//  console.log(insertionSort(x3));
//  console.log(insertionSort(x4));

module.exports = insertionSort;



// Assignment
// Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.
// Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.
// You may review an example document HERE
// Pseudocode
//   InsertionSort(int[] arr)
//     FOR i = 1 to arr.length
//       int j <-- i - 1
//       int temp <-- arr[i]
//       WHILE j >= 0 AND temp < arr[j]
//           arr[j + 1] <-- arr[j]
//            j <-- j - 1
//       arr[j + 1] <-- temp
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
