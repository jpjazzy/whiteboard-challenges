'use strict';


const whiteboardFn = require('../index');
require('jest');


describe('#null Case ', function() {
  it('Should return: error', function() {
    expect(whiteboardFn.sortAnagrams()).toBeInstanceOf(Error);
  });
});


describe('#Standard Case ', function() {
  it('Should return: Anagrams, sorted by length and alphabetical', function() {
    expect(whiteboardFn.sortAnagrams(['acre', 'act', 'race', 'cat', 'tac', 'care'])).toEqual(['acre', 'care', 'race', 'act', 'cat', 'tac']);
  });
});

describe('#Standard Case ', function() {
  it('Should return: Anagrams, sorted by length and alphabetical with a duplicate', function() {
    expect(whiteboardFn.sortAnagrams(['acre', 'acre', 'act', 'race', 'cat', 'tac', 'care'])).toEqual(['acre', 'acre', 'care', 'race', 'act', 'cat', 'tac']);
  });
});

describe('#Standard Case ', function() {
  it('Should return: Anagrams, sorted by length and alphabetical', function() {
    expect(whiteboardFn.sortAnagrams(['lumber', 'rumble', 'acre', 'acre', 'act', 'race', 'cat', 'tac', 'care'])).toEqual(['lumber', 'rumble', 'acre', 'acre', 'care', 'race', 'act', 'cat', 'tac']);
  });
});