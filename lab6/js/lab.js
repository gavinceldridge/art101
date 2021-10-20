// code for lab 6.
// code which defines ways of transportation and the specification of a vehicle.
// @link   https://evanrobel.github.io/art101/lab6/index.html
// @file   This file contains objects and arrays.
// @author Evan Robel and Isaiah Roberts
// @since  0.0.0





//vehicle as an object and it's specification
myMainRide = {
  model: "Legacy",
  make: "Subaru",
  year: "2019",
  color: "white",
};


//ways of transportation in the form of an array
myTransport = ["car" , "bike" , "bus", "walking"]



//writes to html
document.writeln("My forms of transportation: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
