// var username = document.getElementById("username").value;
// function requiredForm() {
//   var username = document.forms["myForm"]["name"].value;
//   var password = document.forms["myForm"]["password"].value;
//   if (username == "" || password == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }


// function showPost() {
//   var username = document.getElementById("username").value;
//   var text = document.getElementById("textarea").value;
//   var display = document.getElementById("screen");
//   display.innerHTML += "<br />" + text;
//   // var newUser = document.getElementById("newUser");
//   // var updateUsername = (username.innerHTML = "welcome " + username);
//   // document.writeln("@ " + updateUsername);
//   document.getElementById("textarea").value = "";
// }


function post() {
  var title = document.getElementById("title");
  var description = document.getElementById("descri");

  var posts = document.getElementById("posts")
  posts.innerHTML = "<h1>" + title.value+ "</h1>">
   `<div>
  <div>
    <h5>Post</h5>
  </div>
  <div>
    <h3>Title</h3>
  </div>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
      laborum.
    </p>
  </div>
</div>`


}