'use strict';


const whiteboardFn = require('../index');
const SLL = require('../lib/sll.js');


describe('#null Case ', function() {
  it('Should return: null', function() {
    expect(whiteboardFn.findIntersection()).toBeNull();
  });
});


let LL1 = new SLL().insertEnd(3).insertEnd(6).insertEnd(9);
let LL2 = new SLL().insertEnd(1).insertEnd(2).insertEnd(3);

 
describe('#Standard Case ', function() {
  it('Should return: node with 3', function() {
    expect(whiteboardFn.findIntersection(LL1, LL2)).toEqual({head: {value: 3, next:null}});
  });
});

let LL3 = new SLL().insertEnd(4).insertEnd(6).insertEnd(9);
let LL4 = new SLL().insertEnd(1).insertEnd(2).insertEnd(3);

 
describe('#No match Case ', function() {
  it('Should return: head node only', function() {
    expect(whiteboardFn.findIntersection(LL3, LL4)).toEqual({head: null});
  });
});