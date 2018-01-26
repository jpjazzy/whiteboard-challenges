'use strict';

let SLL = require('./lib/sll.js');

let whiteboardFn = module.exports = {};

whiteboardFn.findNthNodeFromEnd = function(LL, n) {
  if (!LL || n !== 0 && !n || typeof n !== 'number') return null;

  let currNode = LL.head;
  let counter = 0;
  while(currNode) {
    currNode = currNode.next;
    counter++;
  }

  if (n > counter || n < 0) return null;
  let curNode = LL.head;
  let nLoc = counter - n;
  for (let i = 1; i < nLoc; i++) {
    curNode = curNode.next;
  }
  return curNode;
}