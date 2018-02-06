'use strict';

const KTree = require('../lib/kary-tree');
const whiteboardFn = require('../index');
require('jest')


describe('#null Case ', function() {
  it('Should return: error', function() {
    expect(whiteboardFn.calcSum()).toBeInstanceOf(Error);
  });
});

let troot1 = new KTree();
troot1.insert(3);
troot1.insert(5, 3);
troot1.insert(8, 3);
troot1.insert(10, 8);
troot1.insert(16, 8);


describe('#Standard Case ', function() {
  it('Should return: a sum of 42', function() {
    expect(whiteboardFn.calcSum(troot1)).toEqual(42);
  });
});


let troot2 = new KTree();
troot2.insert(10);

describe('#Standard Case ', function() {
  it('Should return: the root node value of 10', function() {
    expect(whiteboardFn.calcSum(troot2)).toEqual(10);
  });
});

let troot3 = new KTree();
troot3.insert(-3);
troot3.insert(-5, -3);
troot3.insert(-8, -3);
troot3.insert(-10, -8);
troot3.insert(-16, -8);


describe('#Standard Case ', function() {
  it('Should return: a negative sum -42', function() {
    expect(whiteboardFn.calcSum(troot3)).toEqual(-42);
  });
});
