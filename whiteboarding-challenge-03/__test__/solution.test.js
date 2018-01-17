//TEST CODE FILE
'use strict'

//test train
let train = {
  value: 2,
  next: {
    value: 3,
    next: {
      value: 6,
      next: null
    }
  }
}

let train2 = {
  value: 2,
  next: null
}

let train3 = {}


const solution = require('../solution.js')

describe('Should return 11 passengers', function() {
   it('Should return 11 passengers', function() {
     expect(solution.add(train)).toBe(11);
   })
 });

 describe('Should return 2 passengers', function() {
    it('Should return 2 passengers', function() {
      expect(solution.add(train2)).toBe(2);
    })
  });

  describe('Should return null', function() {
     it('Should return null', function() {
       expect(solution.add(train3)).toBe(null);
     })
   });
