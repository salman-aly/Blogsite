var backgroundImage = "";

function post() {
  var title = document.getElementById("title");
  var description = document.getElementById("descri");
  if (title.value.trim() && description.value.trim()) {

    var posts = document.getElementById("posts")

    posts.innerHTML += `<div class="posts">
     <div>
      <h3>${title.value}</h3>
     </div>
     <div>
      <p>
        ${description.value}
      </p>
     </div>
  </div>`

    title.value = "";
    description.value = "";

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter title and description!',
    })
  }
}


function selectedImage(event) {
  backgroundImage = event.target;
  var bgImage = document.querySelector('.bg-img');
  bgImage.style.backgroundImage = "`url ${backgroundImage}`"
}


