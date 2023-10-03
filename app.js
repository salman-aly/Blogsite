// var username = document.getElementById("username").value;
// function requiredForm() {
//   var username = document.forms["myForm"]["name"].value;
//   var password = document.forms["myForm"]["password"].value;
//   if (username == "" || password == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
function showPost() {
  var username = document.getElementById("username").value;
  var text = document.getElementById("textarea").value;
  var display = document.getElementById("screen");
  display.innerHTML += "<br />" + text;
  var newUser = document.getElementById("newUser");
  // newUser.innerHTML = "welcome " + username.value;
  // document.writeln("your usernaem is : " + username);
  document.getElementById("textarea").value = "";
}
