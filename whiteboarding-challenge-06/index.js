'use strict'

let recurse = module.exports = {}

recurse.callfunction = function(count, callback) {
    if (count < 1 || typeof count !== 'number') return undefined;

    callback(count);
    recurse.callfunction(count - 1, callback);
};

function cb(count) {
    console.log(count);
};