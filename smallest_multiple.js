/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here

  var number = 1;
  var myArray = [];

  for (i = 1; i < ceiling; i++) {
    myArray.push(i);
  }

  function check(number) {
    for (var k in myArray) {
      if(number % myArray[k] !== 0) {
        return false;
      }
    }
    return true;
  }

  while(check(number) === false) {
    number ++;
  }

  return number;

};

