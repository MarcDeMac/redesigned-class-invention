// Add event listeners to each button
document.getElementById("btn-red").addEventListener("click", function() {
	document.body.style.backgroundColor = "red";
});

document.getElementById("btn-green").addEventListener("click", function() {
	document.body.style.backgroundColor = "green";
});

document.getElementById("btn-blue").addEventListener("click", function() {
	document.body.style.backgroundColor = "blue";
});
function showImage(imageUrl) {
	var image = document.createElement("img");
	image.src = imageUrl;
	image.classList.add("popup-image");
	document.body.appendChild(image);
  }
  
  // New JavaScript code for dragging image
  var draggableImage = null;
  var offsetX = 0;
  var offsetY = 0;
  
  document.addEventListener("mousedown", function(event) {
	if (event.target.classList.contains("popup-image")) {
	  draggableImage = event.target;
	  offsetX = event.clientX - draggableImage.offsetLeft;
	  offsetY = event.clientY - draggableImage.offsetTop;
	}
  });
  
  document.addEventListener("mousemove", function(event) {
	if (draggableImage !== null) {
	  draggableImage.style.left = (event.clientX - offsetX) + "px";
	  draggableImage.style.top = (event.clientY - offsetY) + "px";
	}
  });
  
  document.addEventListener("mouseup", function(event) {
	draggableImage = null;
  });
 
  
  