'use strict';

const BST = require('../lib/bst').BST;
const TreeNode = require('../lib/bst').TreeNode;
const whiteboardFn = require('../index');
require('jest');

describe('Binary Search Tree testing', function() {
  describe('#Valid testing', function() {
    let testBST = new BST();
    testBST.insert(new TreeNode(10));
    testBST.insert(new TreeNode(25));
    testBST.insert(new TreeNode(7));
    testBST.insert(new TreeNode(5));
    testBST.insert(new TreeNode(6));

    describe('#Standard BST Case', function() {
      it('Should return: true', function() {
        console.log(testBST);
        expect(whiteboardFn.checkBST(testBST)).toEqual(true);
      });
    });
  });

  describe('#Invalid testing', function() {
    describe('#null Case ', function() {
      it('Should return: error', function() {
        expect(whiteboardFn.checkBST()).toBeInstanceOf(Error);
      });
    });

    describe('#invalid structure Case ', function() {
      it('Should return: error', function() {
        expect(whiteboardFn.checkBST({})).toBeInstanceOf(Error);
      });
    });

    
    describe('#Not a BST Case ', function() {
      it('Should return: false', function() {
        let notBST = {};
        notBST.root = {
          value: 25,
          right: {
            value: 24,
            right: null,
            left: null,
          },
          left: {
            value: 26,
            right: null,
            left: null,
          },
        };
        console.log(notBST);
        expect(whiteboardFn.checkBST(notBST)).toEqual(false);
      });
    });
  });
});



