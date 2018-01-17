'use strict';

const traverse = module.exports = {}

//iterative method
traverse.add = function(engine) {
  if (typeof engine !== 'object' || !engine.hasOwnProperty('value')) return null;
  let current = engine;
  let sum = 0;
  while(current.next) {
    sum += current.value;
    console.log(current.value);
    current = current.next;
  }
  sum += current.value;
  console.log(current.value);
  console.log('sum:', sum);
  return sum;
}
