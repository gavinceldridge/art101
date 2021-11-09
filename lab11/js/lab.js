//Authors:  Evan Robel and Isaiah Roberts
//created:  11.8.2021
//
//(c) No copyright

//creates challenge button
button1 = $(document.createElement('button'));
//gives the button a label
$(button1).html("Make me special!");
//appends to selected div
$("#challenge").append(button1)


//detects when results bytton is clicked
$(button1).click(function(){
  		// changes the css of the div to class special
      $("#challenge").toggleClass("special");
      console.log('pressed');
});


//creates problems button
button2 = $(document.createElement('button'));
//gives the button a label
$(button2).html("Make me special!");
//appends to selected div
$("#problems").append(button2)


//detects when results bytton is clicked
$(button2).click(function(){
    	// changes the css of the div to class special
      $("#problems").toggleClass("special");
  		// logs press
      console.log('pressed');
});


//creates results button
button3 = $(document.createElement('button'));
//gives the button a label
$(button3).html("Make me special!");
//appends to selected div
$("#results").append(button3)


//detects when results bytton is clicked
$(button3).click(function(){
      // changes the css of the div to class special
      $("#results").toggleClass("special");
  		// logs press
      console.log('pressed');
});
