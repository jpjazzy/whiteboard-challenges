'use strict';

const whiteboardFn = require('../index');
const TreeNode = require('../lib/binarytree').TreeNode;
const BinaryTree = require('../lib/binarytree').BinaryTree;
require('jest');


let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);
let nine_two = new TreeNode(9);

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

nine.right = nine_two;

describe('#null Case ', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.btToSLL()).toBeInstanceOf(Error);
  });
});


describe('#Standard Case ', function() {
  it('Should return: first value of 1', function() {
    expect(whiteboardFn.btToSLL(binaryTree).head.val).toEqual(1);
  });
});

describe('#Standard Case ', function() {
  it('Should return: second value of 2', function() {
    expect(whiteboardFn.btToSLL(binaryTree).head.next.val).toEqual(2);
  });
});

describe('#Standard Case ', function() {
  it('Should return: third value of 3', function() {
    expect(whiteboardFn.btToSLL(binaryTree).head.next.next.val).toEqual(3);
  });
});

describe('#Standard Case ', function() {
  it('Should return: fourth value of 4', function() {
    expect(whiteboardFn.btToSLL(binaryTree).head.next.next.next.val).toEqual(4);
  });
});

describe('#Standard Case ', function() {
  it('Should return: fifth value of 15', function() {
    expect(whiteboardFn.btToSLL(binaryTree).head.next.next.next.next.val).toEqual(5);
  });
});

describe('#Duplicate Case ', function() {
  it('Should return: a duplicate value of 9 again', function() {
    expect(whiteboardFn.btToSLL(binaryTree).head.next.next.next.next.next.next.next.next.next.val).toEqual(9);
  });
});