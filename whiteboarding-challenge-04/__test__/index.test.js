'use strict';

const intersection = require('../lib/index.js');

let exArr1 = ["mike", "sue", "tom", "kathy", "henry"];
let exArr2 = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"];

describe('Should return: ["sue", "kathy"]', function() { // standard match case
    it('Should return: ["sue", "kathy"]', function() {
      expect(intersection.find(exArr1, exArr2)).toEqual(["sue", "kathy"]);
    })
  });

let exArr3 = ["mike", "tom", "henry"];
let exArr4 = ["howey", "jim", "jennifer", "hank", "alex"];

describe('Should return: null', function() { // no match case
    it('Should return: null', function() {
      expect(intersection.find(exArr3, exArr4)).toEqual(null);
    })
  });

let exArr5 = ["mike", "tom", "henry"];
let exArr6 = ["howey", "jim", "jennifer", "hank", "alex", "henry"];

describe('Should return: ["henry"]', function() { //end match case
    it('Should return: null', function() {
      expect(intersection.find(exArr5, exArr6)).toEqual(["henry"]);
    })
  });