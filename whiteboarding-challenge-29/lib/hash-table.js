'use strict';

const HashTable = module.exports = function(size=1024) {
  this.size = size;
  this.counter = 0;
  this.memory = {}; 
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.toLowerCase().split('').sort().join('');
  return hash;
};

HashTable.prototype.set = function(key, value) {
  if (this.counter < this.size) {
    this.memory[this.hashKey(key)] = this.memory[this.hashKey(key)] ? [...this.memory[this.hashKey(key)], value] : [value];
    this.memory[this.hashKey(key)].sort(function(a, b){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    });
    this.counter++;
    return this.memory[this.hashKey(key)];
  } else {
    return new Error('Size error: Cannot fit value');
  }
};

HashTable.prototype.getTable = function() {
  return this.memory;
};

HashTable.prototype.get = function(key) {
  return this.memory[this.hashKey(key)] ? this.memory[this.hashKey(key)] : new Error('Invalid Key');
};

HashTable.prototype.remove = function(key) {
  let address = this.hashKey(key);
  if (this.memory[address]) this.counter--;
  return this.memory[address] ? delete this.memory[address] : new Error('Invalid Key.');
};