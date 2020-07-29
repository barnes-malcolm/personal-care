searchBtn.addEventListener("click", function(e) {
  var val = searchInput.value;
  var searchOptions = inputGroupSelect01.value;

  console.log(searchOptions);
  if (searchOptions == 1) {
    window.location = "/business/name/" + val;
  } else if (searchOptions == 2) {
    window.location = "/business";
  }
});
