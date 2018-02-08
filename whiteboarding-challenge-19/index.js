'use strict';

const KTree = require('./lib/kary-tree');
const SLL = require('./lib/sll');

let whiteboardFn = module.exports = {};


whiteboardFn.generateSortedSLL = function(troot) {
  //validate inputs
  if (!troot || !troot.root.hasOwnProperty('children')) return new Error('Type error: Unrecognizable input. Please use a tree with .children property');

  //create empty array to push node vals
  let SLLArr = [];

  //push all k-ary node values to an array
  //use breadthfirst to iterate through tree
  troot.breadthFirst((currentNode) => {
    SLLArr.push(currentNode.val.val);  
  });
  
  //sort the array
  SLLArr = SLLArr.sort((a, b) => a - b);
  console.log(SLLArr);

  //create blank SLL to push values
  let sortedSLL = new SLL();

  //create new SLL with the array
  for (let i in SLLArr) {
    sortedSLL.insertHead(SLLArr[i]);
  }

  //return SLL 
  return sortedSLL;
};