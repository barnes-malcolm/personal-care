$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  $('#businessSignup').submit(function (e) {
    e.preventDefault();
    var formData = new FormData(document.getElementById('businessSignup'))
    console.log(formData.values())
    // Display the values
    for (var value of formData.values()) {
      console.log(value);
    }
    $.post("/api/business", $("#businessSignup").serialize(), function (res) {
      console.log(res)
    });

    // $.ajax({
    //   type: "POST",
    //   url: url,
    //   data: data,
    //   success: success,
    //   dataType: dataType
    // });
  })
});