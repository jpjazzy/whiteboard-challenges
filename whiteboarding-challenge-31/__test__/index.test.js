'use strict';

const intersection = require('../lib/index.js');

let exArr1 = ['mike', 'sue', 'tom', 'kathy', 'henry'];
let exArr2 = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];

describe('string testing', function() { // standard match case
  it('Should return: ["sue", "kathy"]', function() {
    expect(intersection.find(exArr1, exArr2)).toEqual(['sue', 'kathy']);
  });
});

let exArr3 = ['mike', 'tom', 'henry'];
let exArr4 = ['howey', 'jim', 'jennifer', 'hank', 'alex'];

describe('string testing', function() { // no match case
  it('Should return: null (no matches)', function() {
    expect(intersection.find(exArr3, exArr4)).toEqual(null);
  });
});

let exArr5 = ['mike', 'tom', 'henry'];
let exArr6 = ['howey', 'jim', 'jennifer', 'hank', 'alex', 'henry'];

describe('string testing', function() { //end match case
  it('Should return: henry', function() {
    expect(intersection.find(exArr5, exArr6)).toEqual(['henry']);
  });
});

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

describe('Number testing', function() {
  it('Should return: 2', function() {
    expect(intersection.find(nums1, nums2)).toEqual([2]);
  });
});