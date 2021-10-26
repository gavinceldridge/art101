// code for lab 7.
// code which is used to sort arrays.
// @link   https://evanrobel.github.io/art101/lab7/index.html
// @file   This file contains a function which sorts an array.
// @author Evan Robel and Isaiah Roberts
// @since  0.0.0



//sortUserName - function which takes user inputs ans sorts the letters of the names
function sortUserName() {

    //asks user to input a name
    var userName = window.prompt("Hi. Tell me your name so I can fix it.");
    console.log("userName =", userName);

    //splits the username into an array of letters
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);

    //sorts the array of letters
    var nameArraySort = nameArray.sort();
    console.log("nameSorted =", nameArraySort);


    //joins array back into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;

}

//Output
document.writeln("Here is your fixed name: ",
  sortUserName(), "</br>");
