'use strict';

const KTree = require('./lib/kary-tree');

let whiteboardFn = module.exports = {};


whiteboardFn.findMaxChildren = function(troot) {
  //validate inputs
  if (!troot || !troot.root.hasOwnProperty('children')) return new Error('Type error: Unrecognizable input. Please use a tree with .children property');

  //create variables for the max number of children and to store the biggest node
  let biggestNode = troot.root;
  let biggestCount = troot.root.children.length || 0;


  //use breadthfirst to iterate through tree
  troot.breadthFirst((currentNode) => {

    //replace the current biggest node if something bigger is found
    if (currentNode.val.children && biggestCount < currentNode.val.children.length)
    {
      biggestCount = currentNode.val.children.length;
      biggestNode = currentNode.val;
    }
    
  });

  //return sum
  return biggestNode;
}