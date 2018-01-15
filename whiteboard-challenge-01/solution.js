'use strict';

let test = function (numArr) {
  let max = Math.max(...numArr);
  let min = Math.min(...numArr);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let avg = numArr.reduce(reducer)/numArr.length;
  return [max, min, avg];
};
