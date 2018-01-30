'use strict';
const Stack = require('./lib/stack');
let whiteboardFn = module.exports = {};


whiteboardFn.TwoStackQueue = class {
  constructor() {
    this.EnqStack = new Stack();
    this.DeqStack = new Stack();
  }


  twoStackEnqueue(val) {
    //push all new values to the enqueue stack
    this.EnqStack.push(val);
    return this.EnqStack;
  }
    
  twoStackDequeue() { 
    //if Dequeue and enqueue stack empty, return null 
    if(!this.DeqStack.top && !this.EnqStack.top) return null;

    //if dequeue stack empty then move entire enqueue stack to dequeue 
    if(!this.DeqStack.top) {
      this.DeqStack = this.EnqStack;
      this.EnqStack = new Stack();
    }
    //pop off from dequeue stack
    return this.DeqStack.pop();
  }
};

