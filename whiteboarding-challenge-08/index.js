'use strict';
let SLL = require('./lib/sll.js');

let whiteboardFn = module.exports = {};


whiteboardFn.findIntersection = function(LL1, LL2) {

  if (!LL1 || !LL2) return null;

  let valList = {};
  let result = new SLL;
  let current = LL1.head;

  while (current) {
    if (!current.value) return null; //incorrectly formatted node

    valList[current.value] = true;
    current = current.next;
  }

  current = LL2.head;
  while (current) {
    if (!current.value) return null; //incorrectly formatted node

    if (valList[current.value]) { // if the list of values from the first table contains a key for the current node value, put it in the result list
      result.insertEnd(current.value);
    }
    current = current.next; // else move on
  }

  return result; //return the results Linked List
}