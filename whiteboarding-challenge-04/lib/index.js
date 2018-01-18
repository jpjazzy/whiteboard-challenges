'use strict';

const intersection = module.exports = {};

intersection.find = function (arr1, arr2) {
    let intx = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                intx.push(arr1[i]);
                break;
            }
        }
    }

    if (intx.length === 0) return null;
    return intx;
}