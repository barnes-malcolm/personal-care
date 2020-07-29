searchBtn.addEventListener("click", function(e) {
  var val = searchInput.value;
  console.log(val);
  console.log(window.location);
  console.log(window.location.href);
  window.location = "/business/name/" + val;
});
