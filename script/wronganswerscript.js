const imagenav = document.getElementById("mynav")
addSidePicture()

function addSidePicture() {
  let image = document.createElement("img")
  image.setAttribute("src", "images/ida.jpg")
  image.setAttribute("width", "100%")
  imagenav.appendChild(image)
}