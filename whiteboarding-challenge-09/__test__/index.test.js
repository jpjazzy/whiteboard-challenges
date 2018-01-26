'use strict';


const whiteboardFn = require('../index')
let SLL = require('../lib/sll.js');
require('jest')

describe('#null Case ', function() {
    it('Should return: null', function() {
        expect(whiteboardFn.findNthNodeFromEnd()).toBe(null);
    });
});

let LL1 = new SLL().insertEnd(3).insertEnd(6).insertEnd(9).insertEnd(8).insertEnd(7);

describe('#Standard Case ', function() {
    it('Should return: object 1 from the end (2 nodes)', function() {
        expect(whiteboardFn.findNthNodeFromEnd(LL1, 1)).toEqual({"next": {"next": null, "value": 7}, "value": 8});
    });
});

describe('#null Case ', function() {
    it('Should return: null (n too high)', function() {
        expect(whiteboardFn.findNthNodeFromEnd(LL1, 10)).toBeNull();
    });
});

