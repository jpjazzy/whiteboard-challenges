'use strict';

const KTree = require('../lib/kary-tree');
const whiteboardFn = require('../index');
require('jest')


describe('#null Case ', function() {
  it('Should return: error', function() {
    expect(whiteboardFn.findLeafs()).toBeInstanceOf(Error);
  });
});

let troot1 = new KTree();
troot1.insert(1, 1);
troot1.insert(5, 1);
troot1.insert(10, 1);
troot1.insert(15, 5);
troot1.insert(20, 10);
troot1.insert(25, 10);


describe('#Standard Case ', function() {
  it('Should return: an array with the nodes of value 10, 11, and 1337', function() {
    expect(whiteboardFn.findLeafs(troot1)).toEqual([{"children": [], "val": 15}, {"children": [], "val": 20}, {"children": [], "val": 25}]);
  });
});


let troot2 = new KTree();
troot2.insert(10, 1);

describe('#Standard Case ', function() {
  it('Should return: the root node', function() {
    expect(whiteboardFn.findLeafs(troot2)).toEqual([{"children": [], "val": 10}]);
  });
});
