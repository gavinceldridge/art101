//Authors:  Evan Robel and Isaiah Roberts
//created:  12.2.2021
//
//(c) No copyright


//api endpoint link set as myUrl var
var myUrl = "https://imgs.xkcd.com/comics/awful_people.png";

//calls ajax function on page load
window.onload = function() {
  callAjax();
};

  //ajax function
function callAjax() {
  console.log("Ajax");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,

      // POST or GET request
      type: "GET",

      //data type
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);

  })
  // If the request fails console log
  .fail(function(request,error) {
      console.log(request, error);

	})
}
