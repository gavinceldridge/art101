//Authors:  Evan Robel and Isaiah Roberts
//created:  11.30.2021
//
//(c) No copyright

//api endpoint link set as myUrl var
var myUrl = "https://randomfox.ca/floof/";

//detects when activate button is clicked
$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,

      // POST or GET request
      type: "GET",

  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      var imgUrl = data.image;
      var imgTag = "<img src=" + imgUrl + ">";
      $("#output").html(imgTag);

  })
  // If the request fails console log
  .fail(function(request,error) {
      console.log(request, error);

	})
}
