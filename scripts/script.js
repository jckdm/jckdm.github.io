window.onload = function() {
	document.body.style.backgroundColor = "#00008B";
	document.getElementById('html').style.background = "#000000";
};

(function() {

	// Declaring carimages so they can be used
	var websiteImages = document.querySelector(".websiteImages");
	// Declaring the variable car images onclicked
	websiteImages.addEventListener("click", function(e) {
		// Gets the source of the click
		if(e.target.tagName === "IMG") {
			// Creates a new element, which is a div/span and assigns it to a variable
			var overlay = document.createElement("div");
			var closeButton = document.createElement("span");
			// Assigns id to newly created div
			overlay.id = "overlay";
			closeButton.id = "closeButt"
			// Append overlay to body
			document.body.appendChild(overlay);
			document.body.appendChild(closeButton);
			// Get image source
			var imageSource = e.target.src;
			// Create image
			var popUpImage = document.createElement("img");
			popUpImage.id = "popimage";
			popUpImage.src = imageSource;
			// Append image to the overlay
			closeButton.appendChild(popUpImage);
			overlay.appendChild(popUpImage);
			popUpImage.addEventListener('click', function() {
				if(overlay) {
					overlay.parentElement.removeChild(overlay);
					closeButton.parentElement.removeChild(closeButton);
				}
			})
			closeButton.addEventListener('click', function() {
					overlay.parentElement.removeChild(overlay);
					closeButton.parentElement.removeChild(closeButton);
			})
		}
	});
}());


document.addEventListener('contextmenu', event => event.preventDefault());
