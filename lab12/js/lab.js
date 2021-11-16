//Authors:  Evan Robel and Isaiah Roberts
//created:  11.15.2021
//
//(c) No copyright


//function to get length and return based on that
function sortingHat(str){

//gets length of inputed name
  var length = str.length;

//gets value 1-3 based on length
  var mod = length % 4;

//gets corresponding house based on var mod
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

//button function called apon click
var myButton = document.getElementById("my-button");
myButton.addEventListener("click",function() {

//gets user inputed name
  var name = document.getElementById("input").value;

//calls sorting function and uses input name
  var house =sortingHat(name);

//sets output text variable
  outputText = "<p> You have been sorted into " + house + "</p>";

//appends output text to output div
  document.getElementById("output").innerHTML = outputText;

})
