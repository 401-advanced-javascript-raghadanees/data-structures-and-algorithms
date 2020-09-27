// https://repl.it/repls/DistantBlankInstance#script.js
'use strict';

let arrOfArr = [[1,2,5,0] , [2,3,6,1] , [3,4,8,2]];
const sumRowsMatrix = (arrOfArr) => {
// Initialize matrix (arrOfArr) 
  let ResltArr = []; 
  // Calculates number of rows and columns present in given matrix  
  let rows = arrOfArr.length;
  // console.log('rows >>arrOfArr.length', rows)
  let cols = arrOfArr[0].length;
  // console.log('cols',cols)
  // Calculates sum of each row of given matrix 

  for(let i = 0 ; i<arrOfArr.length; i++){
    let rowSum = 0;
    for(let j=0;j<arrOfArr[i].length; j++ ){
      rowSum += arrOfArr[i][j];
      ResltArr[i] = rowSum;
    }
 
    console.log('rowSum', rowSum);
  }
  console.log('ResltArr', ResltArr);
};

sumRowsMatrix(arrOfArr);

//-----------------------------------------------
// recursive
function fibonacci_recursive(num) {
  if (num <= 1) return 1;

  return fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2);
}


console.log(fibonacci_recursive(5));
console.log(fibonacci_recursive(2));

///-----------------------------------------------
function fib(n){
  let arr = [1, 1];
  for (let i = 2; i <= n ; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
  return arr[n];
}

console.log(fib(2));
console.log(fib(5));

function fibonacci_iter(n) {
  if (n <= 1) return 1;

  const series = [ 1, 1];
  for(let i = 2; i <= n; i++) {
    series[i] = series[i-1] + series[i-2];
  }
  return series[series.length-1];
}
console.log(fibonacci_iter(2));
console.log(fibonacci_iter(5));




//iterative
// /function fibonacci(num){
//   var a = 1, b = 0, temp;

//   while (num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }
// console.log('iterative >>>>>',fibonacci(5))
// console.log(fibonacci(2))