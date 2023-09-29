// var username = document.forms["myForm"]["name"].value;
function requiredForm() {
  var username = document.forms["myForm"]["name"].value;
  var password = document.forms["myForm"]["password"].value;
  if (username == "" || password == "") {
    alert("Name must be filled out");
    return false;
  }
}
function showPost() {
  var text = document.getElementById("textarea").value;
  var display = document.getElementById("screen");
  display.innerHTML += "<br />" + text;
  var newUser = document.getElementById("newUser");
  // newUser.innerHTML = "welcome " + username.value;
  document.getElementById("textarea").value = "";
}
