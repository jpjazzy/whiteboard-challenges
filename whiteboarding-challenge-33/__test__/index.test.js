'use strict';
const whiteboardFn = require('../index');
require('jest');


describe('#null Case ', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.sumExpDigits()).toBeInstanceOf(Error);
  });
});

describe('#null Case ', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.sumExpDigits(-2.484, 15.9349)).toBeInstanceOf(Error);
  });
});


describe('#Standard Case ', function() {
  it('Should return: 26', function() {
    expect(whiteboardFn.sumExpDigits(2, 15)).toEqual(26);
  });
});