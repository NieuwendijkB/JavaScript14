var click = document.getElementById("mybutton");
click.addEventListener("click", function () {
  alert("button clicked");
});

/* part 2
var change = document.getElementById("myChangeButton");

change.addEventListener("click", function () {
  change.classList.add("red-background");
});
*/

var toggle = document.getElementById("myChangeButton");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("red-background");
});
