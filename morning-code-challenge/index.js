'use strict';

let whiteboardFn = module.exports = {};

whiteboardFn.highWord = function(x) {
  if (!x) return new Error('Error: String of words required');

  //convert each sentence to arrays split by space
  let wordsArr = x.split(' ');

  //map an array for each words score
  let wordsScores = wordsArr.map(string => {
    let curr = 0;
    for (let i = 0; i < string.length; i++) {
      curr += (string.charCodeAt(i) - 96);
    }
    return curr;
  });

  //test from front to back the highest scoring word and keep each high scoring word
  let biggestWord = '';
  let biggestNum = 0;
  for(var i=0; i< wordsScores.length; i++){
    if(wordsScores[i] > biggestNum){
      biggestNum = wordsScores[i];
      biggestWord = wordsArr[i];         
    }
  }

  return biggestWord;
};