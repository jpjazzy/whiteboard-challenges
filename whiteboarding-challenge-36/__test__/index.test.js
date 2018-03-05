'use strict';

const whiteboardFn = require('../index');
const TreeNode = require('../lib/binarytree').TreeNode;
const BinaryTree = require('../lib/binarytree').BinaryTree;
require('jest');

/* --------------------- CREATING TREE ONE -------------------- */
let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);

let binaryTree = new BinaryTree();
binaryTree.root = one;

one.left = two;
one.right = three;

two.left = six;

three.left = four;
three.right = five;

six.right = seven;

seven.left = eight;
seven.right = nine;
/* --------------------- CREATING IDENTICAL TREE -------------------- */
let one_same = new TreeNode(1);
let two_same = new TreeNode(2);
let three_same = new TreeNode(3);
let four_same = new TreeNode(4);
let five_same = new TreeNode(5);
let six_same = new TreeNode(6);
let seven_same = new TreeNode(7);
let eight_same = new TreeNode(8);
let nine_same = new TreeNode(9);

let binaryTree_same = new BinaryTree();
binaryTree_same.root = one_same;

one_same.left = two_same;
one_same.right = three_same;

two_same.left = six_same;

three_same.left = four_same;
three_same.right = five_same;

six_same.right = seven_same;

seven_same.left = eight_same;
seven_same.right = nine_same;
/* --------------------- CREATING NON-IDENTICAL TREE -------------------- */
let one_diff = new TreeNode(1);
let two_diff = new TreeNode(2);
let three_diff = new TreeNode(3);
let four_diff = new TreeNode(4);
let five_diff = new TreeNode(5);
let six_diff = new TreeNode(6);
let seven_diff = new TreeNode(7);
let eight_diff = new TreeNode(8);
let nine_diff = new TreeNode(9);

let binaryTree_diff = new BinaryTree();
binaryTree_diff.root = one_diff;

one_diff.left = two_diff;
one_diff.right = three_diff;

two_diff.left = six_diff;

three_diff.left = four_diff;
three_diff.right = five_diff;

six_diff.right = seven_diff;

seven_diff.left = eight_diff;

describe('#null Case (no args)', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.testTreeStruct()).toBeInstanceOf(Error);
  });
});

describe('#null Case (no first arg)', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.testTreeStruct({}, binaryTree_same)).toBeInstanceOf(Error);
  });
});

describe('#null Case (no second arg)', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.testTreeStruct(binaryTree, {})).toBeInstanceOf(Error);
  });
});



describe('#Standard Case', function() {
  it('Should return: true', function() {
    expect(whiteboardFn.testTreeStruct(binaryTree, binaryTree_same)).toEqual(true);
  });
});

describe('#Standard Case', function() {
  it('Should return: false', function() {
    expect(whiteboardFn.testTreeStruct(binaryTree, binaryTree_diff)).toEqual(false);
  });
});