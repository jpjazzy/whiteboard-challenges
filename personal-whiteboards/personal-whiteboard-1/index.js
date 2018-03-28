'use strict';

let whiteboardFn = module.exports = {};


whiteboardFn.checkBST = function(BST) {
  //validation
  // if (!BST) return new Error('Type error: BST must have content');
  // // if (!BST.root.hasOwnProperty('value'))  return new Error('Type error: BST must have a value property');
  // if (typeof BST.root.value !== 'number')  return new Error('Type error: value must be a number');
  // if (!BST.hasOwnProperty('root'))  return new Error('Type error: BST must have root');
  // if (!BST.root.hasOwnProperty('left') || !BST.root.hasOwnProperty('right'))  return new Error('Type error: BST must have left and right properties');


  //check left and right value
  if(this._checkBST(BST.root, BST.root.left, BST.root.right)) return true;

  //return false if makes it to this point
  return false;
};

whiteboardFn._checkBST = function(root, left=null, right=null) {
  if (root === null) return true;
  if (left != null && root.value < left.value) return false;
  if (right != null && root.value > right.value) return false;

  return (this._checkBST(root.left, left, root) && this._checkBST(root.right, root, right));

};

