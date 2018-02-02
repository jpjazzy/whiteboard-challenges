'use strict';

const KTree = require('./lib/kary-tree');

let whiteboardFn = module.exports = {};


whiteboardFn.findLeafs = function(troot) {
  //validate inputs
  if (!troot || !troot.root.hasOwnProperty('children')) return new Error('Type error: Unrecognizable input. Please use a tree with .children property');

  //create empty results array
  let results = [];

  //use breadthfirst to iterate through tree
  troot.breadthFirst((currentNode) => {

    //check each node for .children property to be and empty array and push to results array if it is
    if(!currentNode.val.children[0]) results.push(currentNode.val);
  });

  //return results array
  return results;
}