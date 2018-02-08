'use strict';

const KTree = require('../lib/kary-tree');
const whiteboardFn = require('../index');
require('jest');


describe('#null Case ', function() {
  it('Should return: error', function() {
    expect(whiteboardFn.generateSortedSLL()).toBeInstanceOf(Error);
  });
});

let troot1 = new KTree();
troot1.insert(3);
troot1.insert(5, 3);
troot1.insert(8, 3);
troot1.insert(10, 8);
troot1.insert(16, 8);


describe('#Standard Case ', function() {
  it('Should return: SLL with increasing values from the kary tree (positive)', function() {
    expect(whiteboardFn.generateSortedSLL(troot1)).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "val": 3}, "val": 5}, "val": 8}, "val": 10}, "val": 16}});
  });
});


let troot2 = new KTree();
troot2.insert(10);

describe('#Standard Case ', function() {
  it('Should return: SLL the root node', function() {
    expect(whiteboardFn.generateSortedSLL(troot2)).toEqual({"head": {"next": null, "val": 10}});
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
  it('Should return: SLL with increasing values from the kary tree (negative)', function() {
    expect(whiteboardFn.generateSortedSLL(troot3)).toEqual({"head": {"next": {"next": {"next": {"next": {"next": {"next": null, "val": -20}, "val": -16}, "val": -10}, "val": -8}, "val": -5}, "val": -3}});
  });
});
