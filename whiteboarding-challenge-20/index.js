'use strict';
const utils = require('./utils');


console.log('Array [1,2,3,4] * 2 =', utils.map([1,2,3,4], val => val*2 ));
console.log('Array [1,2,3,4] * 2 =', utils.map([1,2,3,4], (val, i) => i ));
console.log('Array [1,2,3,4] * 2 =', utils.map([1,2,3,4], (val, i, myArr) => myArr ));

console.log('Array [1,2,3,4] filtered for evens =', utils.filter([1,2,3,4], val => val % 2 === 0));

console.log('Array [1,2,3,4] added together =', utils.reduce([1,2,3,4], (accumulator, currentValue) => accumulator + currentValue ));