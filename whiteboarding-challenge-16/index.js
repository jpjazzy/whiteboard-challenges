'use strict';

const KTree = require('./lib/kary-tree');

let whiteboardFn = module.exports = {};


whiteboardFn.calcSum = function(troot) {
  //validate inputs
  if (!troot || !troot.root.hasOwnProperty('children')) return new Error('Type error: Unrecognizable input. Please use a tree with .children property');

  //create empty results array
  let sumResult = 0;

  //use breadthfirst to iterate through tree
  troot.breadthFirst((currentNode) => {

    //add all values to the sumResult to keep track
    if(currentNode.val.val) sumResult += currentNode.val.val;
  });

  //return sum
  return sumResult;
}