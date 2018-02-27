'use strict';

let whiteboardFn = module.exports = {};


whiteboardFn.fibItr = function(fibNum) {
  if (fibNum === 0 || fibNum === 1) return fibNum;
  if (!fibNum || typeof fibNum !== 'number') return new Error('type error: please input fib number');
  if (fibNum < 0 || !Number.isInteger(fibNum)) return new Error('Invalid fib number: please input a positive whole number.');
 

  let fibArr = [0, 1]; // fib array starting point
  let valsToAdd = fibNum-1; // number of values to add to the array

  for (let i = 0; i < valsToAdd; i++) {
    fibArr.push(fibArr[(fibArr.length)-1] + fibArr[(fibArr.length)-2]); //adding each value to the fib array
  }
  
  return fibArr.pop(); // return the last value
};

whiteboardFn.fibRec = function(fibNum) {
  if (fibNum === 0) return 0;
  if (fibNum === 1) return 1;
  if (!fibNum || typeof fibNum !== 'number') return new Error('type error: please input fib number');
  if (fibNum < 0 || !Number.isInteger(fibNum)) return new Error('Invalid fib number: please input a positive whole number.');
  
  return whiteboardFn.fibRec(fibNum - 1) + whiteboardFn.fibRec(fibNum - 2);
};