'use strict';

const SLL = require('../lib/sll');
const whiteboardFn = require('../index');
require('jest');


describe('#Error Case ', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.dedupe()).toBeInstanceOf(Error);
  });
});



let TestLL2 = new SLL();
describe('#Error Case ', function() {
  it('Should return: Error', function() {
    expect(whiteboardFn.dedupe(TestLL2.head)).toBeInstanceOf(Error);
  });
});

let TestLL1 = new SLL();
TestLL1.insertEnd(2);
TestLL1.insertEnd(5);
TestLL1.insertEnd(6);
TestLL1.insertEnd(6);
TestLL1.insertEnd(9);

let ResultLL1 = new SLL();
ResultLL1.insertEnd(2);
ResultLL1.insertEnd(5);
ResultLL1.insertEnd(6);
ResultLL1.insertEnd(9);
describe('#Standard Case ', function() {
  it('Should return: SLL with 2, 5, 6, and 9', function() {
    expect(whiteboardFn.dedupe(TestLL1.head)).toEqual(ResultLL1.head);
  });
});

let TestLL3 = new SLL();
TestLL3.insertEnd(2);
TestLL3.insertEnd(5);
TestLL3.insertEnd(6);
TestLL3.insertEnd(9);

let ResultLL3 = new SLL();
ResultLL3.insertEnd(2);
ResultLL3.insertEnd(5);
ResultLL3.insertEnd(6);
ResultLL3.insertEnd(9);
describe('#Standard Case ', function() {
  it('Should return: SLL with 2, 5, 6, and 9', function() {
    expect(whiteboardFn.dedupe(TestLL3.head)).toEqual(ResultLL3.head);
  });
});