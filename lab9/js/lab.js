//Authors:  Evan Robel and Isaiah Roberts
//created:  11.1.2021
//
//(c) No copyright

//declare output var
var outputEL = document.getElementById("output")

//create new element and assign to variable
var new1EL = document.createElement("p")

//change an html attribute of new1EL
new1EL.innerHTML = "<p>I am big!!!</p>";
new1EL.style.fontSize = "40px";

//Create another new element and assign it to a variable new2El
var new2EL = document.createElement("p")

//change an html attribute of new2EL
new2EL.style.color = 'red';
new2EL.innerHTML = "<p>I am now red!</p>";

// Append <p> to <div> with id="output"
outputEL.appendChild(new1EL);
outputEL.appendChild(new2EL);
