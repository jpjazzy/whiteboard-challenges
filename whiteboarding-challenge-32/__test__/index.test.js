'use strict';
const whiteboardFn = require('../index');
require('jest');

describe('Iterative function testing', function() {
  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(whiteboardFn.fibItr()).toBeInstanceOf(Error);
    });
  });

  describe('#invalid Case ', function() {
    it('Should return: error', function() {
      expect(whiteboardFn.fibItr(-1)).toBeInstanceOf(Error);
    });
  });

  describe('#invalid Case ', function() {
    it('Should return: error', function() {
      expect(whiteboardFn.fibItr(5.2)).toBeInstanceOf(Error);
    });
  });

  describe('#Standard Case ', function() {
    it('Should return: 3', function() {
      expect(whiteboardFn.fibItr(4)).toEqual(3);
    });
  });
});

describe('Recursive function testing', function() {
  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(whiteboardFn.fibRec()).toBeInstanceOf(Error);
    });
  });
  
  describe('#invalid Case ', function() {
    it('Should return: error', function() {
      expect(whiteboardFn.fibRec(-1)).toBeInstanceOf(Error);
    });
  });
  
  describe('#invalid Case ', function() {
    it('Should return: error', function() {
      expect(whiteboardFn.fibRec(5.2)).toBeInstanceOf(Error);
    });
  });
  
  describe('#Standard Case ', function() {
    it('Should return: 3', function() {
      expect(whiteboardFn.fibRec(4)).toEqual(3);
    });
  });
});