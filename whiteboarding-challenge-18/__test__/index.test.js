'use strict';

const KTree = require('../lib/kary-tree');
const whiteboardFn = require('../index');
require('jest');


describe('#null Case ', function() {
  it('Should return: error', function() {
    expect(whiteboardFn.findMaxChildren()).toBeInstanceOf(Error);
  });
});

let troot1 = new KTree();
troot1.insert(3);
troot1.insert(5, 3);
troot1.insert(8, 3);
troot1.insert(10, 8);
troot1.insert(16, 8);


describe('#Standard Case ', function() {
  it('Should return: root node', function() {
    expect(whiteboardFn.findMaxChildren(troot1)).toEqual({"children": [{"children": [], "val": 5}, {"children": [{"children": [], "val": 10}, {"children": [], "val": 16}], "val": 8}], "val": 3});
  });
});


let troot2 = new KTree();
troot2.insert(10);

describe('#Standard Case ', function() {
  it('Should return: the root node', function() {
    expect(whiteboardFn.findMaxChildren(troot2)).toEqual({"children": [], "val": 10});
  });
});

let troot3 = new KTree();
troot3.insert(-3);
troot3.insert(-5, -3);
troot3.insert(-8, -3);
troot3.insert(-10, -8);
troot3.insert(-16, -8);
troot3.insert(-20, -8);


describe('#Standard Case ', function() {
  it('Should return: the node with value -8', function() {
    expect(whiteboardFn.findMaxChildren(troot3)).toEqual({"children": [{"children": [], "val": -10}, {"children": [], "val": -16}, {"children": [], "val": -20}], "val": -8});
  });
});
