alert();
<<<<<<< HEAD
var reveiwForem = document.getElementById("reviewForm")
reviewForm.addEventListener("click", function(e) {
    e.preventDefault();
    var data = new FormData
})
=======
var reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("click", function(e) {
  e.preventDefault();
  var data = new FormData(reviewForm);
  console.log(data);
});
// $.ajax({
//   url: "/api/reviews",
//   type: "POST",
//   dataType: "json",
//   data: {
//     title: "This salon is Awesome",
//     body: "Iloved Becky",
//     user: "YelpWarrior12",
//     businessId: 1,
//   },
//   contentType: "application/json",
// });
>>>>>>> 5cb6603b7e3557acc847bc95703ee7e4c26a7e0f
