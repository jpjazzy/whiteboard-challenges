'use strict';

let whiteboardFn = module.exports = {};


whiteboardFn.findMissingNum = function(arr) {
  if (!Array.isArray(arr) || arr.length !== 99) return new Error('Error: Need an array of 99 numbers.');
  for (let i in arr) if (typeof arr[i] !== 'number') return new Error('Error: Don\'t try to trick me with your non numbers.');
  return (5050 - arr.reduce((accumulator, currentValue) => accumulator + currentValue));
}