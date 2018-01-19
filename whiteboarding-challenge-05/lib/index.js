'use strict';

const nd = module.exports = {};

nd.center = function(inputNode) {
    if (typeof inputNode !== 'object' || !inputNode.hasOwnProperty('value') || !inputNode.hasOwnProperty('next')) return null;

    let nodeCount = 0;

    let currentNode = inputNode;
    while (currentNode.next) {
        nodeCount++;
        currentNode = currentNode.next;
    } 

    nodeCount = Math.ceil(nodeCount)/2
    
    currentNode = inputNode;
    for (let i = 0; i < nodeCount; i++) currentNode = currentNode.next;

    return currentNode;
}