'use strict';
let HashTable = require('./lib/hash-table');

let whiteboardFn = module.exports = {};


whiteboardFn.sortAnagrams = function(arrOfWords) {
  if (!arrOfWords || !Array.isArray(arrOfWords)) return new Error('Type Error: please input an array of words.');
  let AnagramsHT = new HashTable(); // create new hash table an empty array for output
  let resultArr = []; 

  //place all items in the hashtable
  for (let i in arrOfWords) {
    AnagramsHT.set(AnagramsHT.hashKey(arrOfWords[i]), arrOfWords[i]);
  }

  //get a list of the keys
  let AnagramKeys = Object.keys(AnagramsHT.getTable());

  //for every key, place the entire array in the results array
  for (let i in AnagramKeys) {
    resultArr = resultArr.concat(AnagramsHT.memory[AnagramKeys[i]]);
  }

  return resultArr;
};