//Authors:  Evan Robel and Isaiah Roberts
//created:  10.27.2021
//
//(c) No copyright




// defines an array of numbers
numbers = [1, 2, 3, 4, 5]
//logs the array of numbers to the console
console.log("Array:", numbers);

// a function which multiplies any number x by 2
 function multiply(x){
   var results = x * 2;
   return results;
 }
//logs 2 x 4 to console
console.log("2 X 4 =", multiply(4));


// multiplies all numbers in the array by 2
var results = numbers.map(multiply)
//logs whole array multiplied by 2 to the console
console.log("these numbers are now twice as big:", results);

//anonymous call back function which cubes the array
var results = numbers.map(function(x){
  var results = x ** 3;
  return results;
})
console.log("These numbers are now cubed:", results);
