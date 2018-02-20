'use strict';


const whiteboardFn = require('../index');
require('jest');


describe('#null Case ', function() {
  it('Should return: error', function() {
    expect(whiteboardFn.rotate2dArray()).toBeInstanceOf(Error);
  });
});


let testArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
  
  // rotated 90 degrees
let resultArr1 = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

describe('#Standard Case ', function() {
  it('Should return: rotated 90 deg array', function() {
    expect(whiteboardFn.rotate2dArray(testArr1)).toEqual(resultArr1);
  });
});

let testArr2 = [
  [3, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
    
// rotated 90 degrees
let resultArr2 = [
  [7, 4, 3],
  [8, 5, 2],
  [9, 6, 3],
];
  
describe('#Standard Case ', function() {
  it('Should return: rotated 90 deg array', function() {
    expect(whiteboardFn.rotate2dArray(testArr2)).toEqual(resultArr2);
  });
});

let testArr3 = [
  ['hi!', 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
      
  // rotated 90 degrees
let resultArr3 = [
  [7, 4, 'hi!'],
  [8, 5, 2],
  [9, 6, 3],
];
    
describe('#Standard Case ', function() {
  it('Should return: rotated 90 deg array with strings', function() {
    expect(whiteboardFn.rotate2dArray(testArr3)).toEqual(resultArr3);
  });
});