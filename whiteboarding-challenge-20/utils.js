'use strict';

module.exports = {
  map(arr, callback) {
    if (!Array.isArray(arr)) return new Error('Type error: first parameter must be an array');
    if (!callback) return new Error('Type error: Callback required');

    let tempArr = [];
    let cloneArr = new Array(...arr);

    for (let i in cloneArr) {
      tempArr.push(callback(cloneArr[i], i, cloneArr));
    }

    return tempArr;
  },

  filter(arr, callback) {
    if (!Array.isArray(arr)) return new Error('Type error: first parameter must be an array');
    if (!callback) return new Error('Type error: Callback required');

    let tempArr = [];
    let cloneArr = new Array(...arr);

    for (let i in cloneArr) {
      if(callback(cloneArr[i])){
        tempArr.push(cloneArr[i],  i, cloneArr);
      }
    }

    return tempArr;
  },

  reduce(arr, callback, startingVal) {
    if (!Array.isArray(arr)) return new Error('Type error: first parameter must be an array');
    if (!callback) return new Error('Type error: Callback required');

    let accumulator;
    if (startingVal) accumulator = startingVal;
    let cloneArr = new Array(...arr);

    for (let i in cloneArr) {
      if (!accumulator) {
        accumulator = cloneArr[i];
      } else {
        accumulator = callback(accumulator, cloneArr[i], i, cloneArr);
      }
    }

    return accumulator;
  },
};