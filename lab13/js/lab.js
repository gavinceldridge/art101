//Authors:  Evan Robel and Isaiah Roberts
//created:  11.17.2021
//
//(c) No copyright

//variables
var maxNums = 200;
//defines output element
var output = document.getElementById("output")

//calls fizbuzz function on page load
window.onload = function() {
  fizzBuzz(maxNums);
};


//loops through 0-200 and outputs matching text
function fizzBuzz(maxNums) {

  //defines the range to be looped through
  for (var num = 1; num<=maxNums; num++){

    //resets outPutString evertime the loop re
    var outPutString = ' ';

    //if divisable by 3 add "Fizz" to outPutString
    if (num%3 == 0) {
      outPutString += "Fizz";
      console.log("Fizz")
    }
    //if divisable by 5 add "Buzz" to outPutString
    if (num%5 == 0) {
      outPutString += "Buzz";
      console.log("Buzz");
    }
    //if divisable by 3 add "Boom" to outPutString
    if(num%7 == 0) {
      outPutString += "Boom";
      console.log("Boom")
    //if not divisable by anything log not divisable
    }else {
      console.log("not divisable");
    }
    //formats outPutString to have "-" at beginning and "!" at end
    if(outPutString != ' ') {
      outPutString = " - " + num + outPutString + "!";
    }


    //creates newpara paragraph element to append to output
    var newPara = document.createElement("p");

    //asigns outPutString to newPara html element
    newPara.innerHTML = outPutString;

    //appends newPara to output
    output.appendChild(newPara);
    //document.getElementById("output").innerHTML = outPutString;
  //  $("#output").html(num.toString() +outPutString);
  }
};
