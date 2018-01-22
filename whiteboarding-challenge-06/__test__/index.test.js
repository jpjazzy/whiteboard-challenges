'use strict'

const recurse = require('../index')

function cb(count) {
    console.log(count);
};

    describe('#Standard Case ', function() {
        it('Should return: ', function() {
            const mockFn = jest.fn();
            recurse.callfunction(5, mockFn);
            expect(mockFn).toHaveBeenCalledTimes(5)
        })
    });

  describe('#null Case ', function() {
    it('Should return: undefined', function() {
      expect(recurse.callfunction()).toBeUndefined();
    })
  });

  describe('#invalid Case ', function() {
    it('Should return: undefined', function() {
      expect(recurse.callfunction('a', cb)).toBeUndefined()
    })
  });