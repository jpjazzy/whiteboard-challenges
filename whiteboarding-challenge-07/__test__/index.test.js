'use strict';


const whiteboardFn = require('../index')


describe('#null Case ', function() {
    it('Should return: null', function() {
        expect(whiteboardFn.checkLL()).toBeNull();
    });
});

let standard = {val: 1, next: { val: 2, next: {val: 3, next: null} } };
standard.next.next.next = standard;
describe('#Standard Case ', function() {
    it('Should return: true', function() {
        expect(whiteboardFn.checkLL(standard)).toEqual(true);
    });
});

let standard2 = {val: 1, next: { val: 2, next: {val: 3, next: null} } };
describe('#Standard Case ', function() {
    it('Should return: false', function() {
        expect(whiteboardFn.checkLL(standard2)).toEqual(false);
    });
});