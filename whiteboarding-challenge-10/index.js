'use strict';

let whiteboardFn = module.exports = {};


whiteboardFn.checkBrace = function(str) { //Note, array used as my stack due to same functionality as a stack for push/pop
  if (typeof str !== 'string') return false;

  let stack = [];
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '{') stack.push(strArr[i]);
    if (strArr[i] === '}') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
    
  if (stack.length > 0) return false;
  return true;
};

whiteboardFn.binarySearch = function(n, sortedArray) {
  if (typeof n !== 'number' || !Array.isArray(sortedArray)) return null;

  let searchMax = sortedArray.length - 1;
  let searchMin = 0;
  let center;

  while (searchMin <= searchMax) {
    center = Math.floor((searchMax + searchMin) / 2);
    if (sortedArray[center] === n) return {value: n, index: center};
    if (sortedArray[center] < n) searchMin = center + 1;
    if (sortedArray[center] > n) searchMax = center - 1;
  }

  return null;
};

