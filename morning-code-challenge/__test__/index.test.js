'use strict';

const whiteboardFn = require('../index');
require('jest');

describe('#null Case ', function() {
  it('Should return: error', function() {
    expect(whiteboardFn.highWord()).toBeInstanceOf(Error);
  });
});

let test1 = 'this is a string of words';
describe('#Standard Case ', function() {
  it('Should return: string as the highest scoring word', function() {
    expect(whiteboardFn.highWord(test1)).toBe('string');
  });
});

let test2 = 'aa bb cc dd ccb';
describe('#Standard Case ', function() {
  it('Should return: dd as first highest scoring word', function() {
    expect(whiteboardFn.highWord(test2)).toBe('dd');
  });
});