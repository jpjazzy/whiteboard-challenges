'use strict';
const TreeNode = require('./lib/binarytree').TreeNode;
const BinaryTree = require('./lib/binarytree').BinaryTree;
const SLL = require('./lib/sll');

let whiteboardFn = module.exports = {};


whiteboardFn.btToSLL = function(btInput) {
  if (!btInput) return new Error('type error: Please insert a binary tree');
  if (!btInput.hasOwnProperty('root')) return new Error('type error: Binary tree needs root property');
  if (!btInput.root.hasOwnProperty('value') || !btInput.root.hasOwnProperty('left') || !btInput.root.hasOwnProperty('right')) {
    return new Error('type error: Please insert a binary tree with the properties value, left and right.');
  }

  let btArr = btInput.inOrderTraversal();
  btArr.sort((a, b) => a - b);

  let resultSLL = new SLL();
  for (let i in btArr) {
    resultSLL.insertEnd(btArr[i]);
  }

  return resultSLL;
};