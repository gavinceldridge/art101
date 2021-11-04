//Authors:  Evan Robel and Isaiah Roberts
//created:  11.3.2021
//
//(c) No copyright








//event listener function for when button is clicked
document.getElementById("my-button").addEventListener("click", function() {

  //output variable
  var outputEL = document.getElementById("output")

  //says button was clicked in cosole
  console.log("button clicked!");

  var userName = document.getElementById("my-input").value;
  console.log("username entered= ", userName);

  //splits the username into an array of letters
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  //sorts the array of letters
  var nameArraySort = nameArray.sort();
  console.log("nameSorted =", nameArraySort);


  //joins array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("namejoined =", nameSorted);


  //creates paragraph element to append to output
  var newName = document.createElement("p");

  //asigns namsorted to newname html element
  newName.innerHTML = nameSorted;
  console.log("newName =", newName);



  //appends newname paragraph to output
  outputEL.appendChild(newName);

});
