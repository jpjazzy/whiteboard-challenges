'use strict';

const twoHighest = function (arr){
  let highestVals = {};//empty string

  if (arr.length < 2 || !Array.isArray(arr)) return null; //ensure there are at least two numbers to return and that it is an array

  for (let i = 0; i < arr.length; i++) { //ensure that all values are numeric
    if (typeof arr[i] !== 'number') return null;
  }

  arr.sort(); //sort the array

  highestVals.highest = arr[arr.length-1]; //place highest val
  highestVals.secondHighest = arr[arr.length-2]; //place second highest val
  return highestVals; //return the object with the values
}

//Tests
console.log(twoHighest([1, 7, 2, 3, 6, 9]));
console.log(twoHighest([1, 3, 'a']));
console.log(twoHighest('a'));
console.log(twoHighest([-2, 3, -1, 39]));
console.log(twoHighest([2.932, 3.032, 6.304, 4.034]));
console.log(twoHighest([1]));
