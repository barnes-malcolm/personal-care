alert();
var reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("click", function (e) {
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