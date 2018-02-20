'use strict';

let whiteboardFn = module.exports = {};


whiteboardFn.rotate2dArray = function(arr) {
  if (!arr) return new Error('Input Error: Need an array to rotate.');
  for (let i in arr) { // arr checking
    if (arr.length !== arr[i].length) return new Error('Dimensional Error: Array must be a square');
  }
  

  let results = [];
  let vertArr = []; //resulting array to return later and temp array for vertical arrays
  let n = arr.length; //length of the array

  

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      //create new array out of all the same x values on each new array
      vertArr.push(arr[n - x -1][y]);
    }

    results.push(vertArr); //put the new vertical array in the results array
    vertArr = []; // create vertical array to do the next one
  }

  return results;
};