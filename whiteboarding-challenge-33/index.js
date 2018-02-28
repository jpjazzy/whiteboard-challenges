'use strict';

let whiteboardFn = module.exports = {};


whiteboardFn.sumExpDigits = function(base, exp) {
  if (typeof base !== 'number' || typeof exp !== 'number') return new Error('type error: please use valid inputs');
  if (isNaN(base**exp)) return new Error('calculation error: cannot calculate exponent')
  
  return (base**exp).toString().split('').reduce((a, b) => ~~a + ~~b);
};