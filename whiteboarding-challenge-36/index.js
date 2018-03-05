'use strict';
const BinaryTree = require('./lib/binarytree').BinaryTree;
const TreeNode = require('./lib/binarytree').TreeNode;

let whiteboardFn = module.exports = {};


whiteboardFn.testTreeStruct = function(tree1, tree2) {
  if (!tree1 || !tree2) return new Error('type error: please input binary trees as two arguments to compare.');
  if (!tree1.hasOwnProperty('root') || tree1.hasOwnProperty('left') || tree1.hasOwnProperty('right')) return new Error('type error: invalid tree structure on argument 1');
  if (!tree2.hasOwnProperty('root') || tree2.hasOwnProperty('left') || tree2.hasOwnProperty('right')) return new Error('type error: invalid tree structure on argument 2');

  let TreeStructure1 = tree1.inOrderTraversal();
  let TreeStructure2 = tree2.inOrderTraversal();

  if (TreeStructure1.toString() === TreeStructure2.toString()) {
    return true;
  }

  return false;
};