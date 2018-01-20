'use strict';

const nd = require('../lib/index.js');

let testNd = {value: 25, next: { value: 1, next: { value: 15, next: { value: 33, next: { value: 4, next: null } } } } };

describe('Should return: {15, nxt}', function() { // standard match case
    it('Should return: {15, nxt}', function() {
      expect(nd.center(testNd)).toEqual({ value: 15, next: { value:  33, next: { value: 4, next: null } } });
    })
  });

  describe('Should return: {value: 25, next: null}', function() { // 1 node match case
    it('Should return: {value: 25, next: null}', function() {
      expect(nd.center({value: 25, next: null})).toEqual({value: 25, next: null});
    })
  });

  describe('Should return: null', function() { // invalid node
    it('Should return: null', function() {
      expect(nd.center({})).toEqual(null);
    })
  });