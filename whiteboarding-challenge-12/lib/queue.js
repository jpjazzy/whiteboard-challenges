'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize=1337) {
    this.top = null; //remove things here
    this.bot = null; //add things here
    this.maxSize = maxSize;
    this.size = 0;
  }

  enqueue(val) {
    if(this.size === this.maxSize) throw new Error('Queue overflow!');

    let node = new Node(val);

    if (this.bot) this.bot.next = node;
    this.bot = node;
    if (!this.top) this.top = node;    
    this.size++;

    return this.top;
  }

  dequeue() { // LIKE DAIRY QUEEN
    let temp = this.top;
    this.top = this.top.next;
    if (!this.top) this.bot = null;
    this.size--;

    return temp;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }
};