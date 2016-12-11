"use strict"; 
let stringSum = 0;
function addTwoDigits(n) {
  let stringNum = n.toString();
  stringNum = stringNum.split('');
  for (let i = 0; i<stringNum.length; i++) {
    stringSum = parseInt(stringNum[i]) + stringSum 
  }
  console.log("stringSum", stringSum);
  return stringSum
}

addTwoDigits(69);
