'use strict';

const SLL = require('./lib/sll');
const Stack = require('./lib/stack');

let whiteboardFn = module.exports = {};


whiteboardFn.dedupe = function(LL) {
  //validate input
  if (!LL || !LL.hasOwnProperty('next')) return new Error('Unknown Linked List Structure. Cannot perform function without a next property on nodes.');  

  //create new stack
  let nodeStack = new Stack();

  //set a current node to work with
  let currNode = LL;

  //push the first value so that we don't run into null issues
  nodeStack.push(LL.val);

  //iterate through LL while the current node being looked at is not null
  while (currNode){
    //if top of stack node value !== LL current node value
    if (nodeStack.peek().val !== currNode.val){
      //push current node value to stack
      nodeStack.push(currNode.val);
    }
      
    //reassign the current node of the LL to the next node
    currNode = currNode.next;
  }

  //generate new linked list to push values to
  let resultLL = new SLL();
  //while the new stack pop !== null
  while (nodeStack.peek()) {
    //insert new popped value into a new LL
    resultLL.insertHead(nodeStack.pop().val);
  }
  //return new LL
  return resultLL.head;
}