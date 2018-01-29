'use strict';


const whiteboardFn = require('../index');
require('jest');


describe('#null Case ', function() {
  it('Should return: an error', function() {
    expect(whiteboardFn.findMissingNum([])).toBeInstanceOf(Error);
  });
});

let arrTest = [];
arrTest = [...Array(100)].map((e, i) => arrTest.push(i+1));
arrTest.splice(10, 1);

describe('#Standard Case ', function() {
  it('Should return: 11', function() {
    expect(whiteboardFn.findMissingNum(arrTest)).toBe(11);
  });
});

let arrTest2 = [];
arrTest2 = [...Array(99)].map((e, i) => arrTest2.push(i+1));
arrTest2.splice(10, 1); // UH OH ONLY 98 ELEMENTS

describe('#null Case ', function() {
  it('Should return: an error', function() {
    expect(whiteboardFn.findMissingNum(arrTest2)).toBeInstanceOf(Error);
  });
});

let arrTest3 = [];
arrTest3 = [...Array(99)].map((e, i) => arrTest3.push(i+1));
arrTest3.push('a'); // ??? 
arrTest3.splice(10, 1);

describe('#null Case ', function() {
  it('Should return: an error', function() {
    expect(whiteboardFn.findMissingNum(arrTest3)).toBeInstanceOf(Error);
  });
});
