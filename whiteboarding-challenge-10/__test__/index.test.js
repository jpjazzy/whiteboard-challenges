'use strict';


const whiteboardFn = require('../index');
require('jest');


describe('#checkBrace null case ', function() {
  it('Should return: false', function() {
    expect(whiteboardFn.checkBrace()).toBe(false);
  });
});


describe('#checkBrace Standard case - Pass ', function() {
  it('Should return: true', function() {
    expect(whiteboardFn.checkBrace('{a}{{}}{}')).toBe(true);
  });
});

describe('#checkBrace Standard case - Fail ', function() {
  it('Should return: false', function() {
    expect(whiteboardFn.checkBrace('{a}{{b}')).toBe(false);
  });
});

describe('#binarySearch null case ', function() {
  it('Should return: null', function() {
    expect(whiteboardFn.binarySearch()).toBeNull();
  });
});

describe('#binarySearch standard case - pass', function() {
  it('Should return: {value: 2, index: 1}', function() {
    expect(whiteboardFn.binarySearch(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({value: 2, index: 1});
  });
});

describe('#binarySearch standard case - fail', function() {
  it('Should return: null', function() {
    expect(whiteboardFn.binarySearch(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeNull();
  });
});