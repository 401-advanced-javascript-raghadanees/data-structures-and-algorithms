'use strict';

function multiBracketValidation(string){
  const arr = [];

  for (let i = 0; i < string.length; i++) {
      
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      arr.push(string[i]);
    }
    if ((string[i] === ')' && arr[arr.length - 1] === '(') 
      || (string[i] === '}' && arr[arr.length - 1] === '{')
      || (string[i] === ']' && arr[arr.length - 1] === '[')) {
      arr.pop();
    } else if ((string[i] === ')' && arr[arr.length - 1] !== '(') 
      || (string[i] === '}' && arr[arr.length - 1] !== '{')
      || (string[i] === ']' && arr[arr.length - 1] !== '[')) {
      return false;
    }
  }
  if (arr.length === 0) return true;
  return false;
}

// console.log(multiBracketValidation('()[[Extra Characters]]'));
// console.log(multiBracketValidation('{(})'));
module.exports = multiBracketValidation;