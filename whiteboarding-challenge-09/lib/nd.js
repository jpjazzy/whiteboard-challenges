'use strict'

class Node {
  constructor(value) {
    if (!value) throw new Error('Not a valid value');

    this.value = value
    this.next = null
  }
}

module.exports = Node

