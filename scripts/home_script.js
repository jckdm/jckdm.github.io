// Get the modal
var cv_modal = document.getElementById("myCVModal");

// Get the button that opens the modal
var cv_btn = document.getElementById("myCVBtn");

// Get the <span> element that closes the modal
var cv_span = document.getElementsByClassName("cv_close")[0];

// When the user clicks the button, open the modal
cv_btn.onclick = function() {
	cv_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cv_span.onclick = function() {
	cv_modal.style.display = "none";
}

// Get the modal
var c_modal = document.getElementById("myContactModal");

// Get the button that opens the modal
var c_btn = document.getElementById("myContactBtn");

// Get the <span> element that closes the modal
var c_span = document.getElementsByClassName("c_close")[0];

// When the user clicks the button, open the modal
c_btn.onclick = function() {
	c_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
c_span.onclick = function() {
	c_modal.style.display = "none";
}

/*

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == c_modal) {
		c_modal.style.display = "none";
	}
}

*/

// Get the modal
var a_modal = document.getElementById("myAboutModal");

// Get the button that opens the modal
var a_btn = document.getElementById("myAboutBtn");

// Get the <span> element that closes the modal
var a_span = document.getElementsByClassName("a_close")[0];

// When the user clicks the button, open the modal
a_btn.onclick = function() {
	a_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
a_span.onclick = function() {
	a_modal.style.display = "none";
}

// Get the modal
var w_modal = document.getElementById("myWModal");

// Get the button that opens the modal
var w_btn = document.getElementById("myWBtn");

// Get the <span> element that closes the modal
var w_span = document.getElementsByClassName("w_close")[0];

// When the user clicks the button, open the modal
w_btn.onclick = function() {
	w_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
w_span.onclick = function() {
	w_modal.style.display = "none";
}

// Get the modal
var p_modal = document.getElementById("myPModal");

// Get the button that opens the modal
var p_btn = document.getElementById("myPBtn");

// Get the <span> element that closes the modal
var p_span = document.getElementsByClassName("p_close")[0];

// When the user clicks the button, open the modal
p_btn.onclick = function() {
	p_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
p_span.onclick = function() {
	p_modal.style.display = "none";
}

// Get the modal
var sw_modal = document.getElementById("mySWModal");

// Get the button that opens the modal
var sw_btn = document.getElementById("mySWBtn");

// Get the <span> element that closes the modal
var sw_span = document.getElementsByClassName("sw_close")[0];

// When the user clicks the button, open the modal
sw_btn.onclick = function() {
	sw_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sw_span.onclick = function() {
	sw_modal.style.display = "none";
}

// Get the modal
var media_modal = document.getElementById("myMediaModal");

// Get the button that opens the modal
var media_btn = document.getElementById("myMediaBtn");

// Get the <span> element that closes the modal
var media_span = document.getElementsByClassName("media_close")[0];

// When the user clicks the button, open the modal
media_btn.onclick = function() {
	media_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
media_span.onclick = function() {
	media_modal.style.display = "none";
}


// disable white link popup in bottom left corner
var aTags = document.querySelectorAll('span[data-href]');

for(var i = 0; i < aTags.length; i++){
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e){
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });
}

// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {

    // Avoid the real one
    event.preventDefault();

    // Show contextmenu
    $(".custom-menu").finish().toggle(100).

    // In the right position (the mouse)
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {

    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {

        // Hide it
        $(".custom-menu").hide(100);
    }
});


// If the menu element is clicked
$(".custom-menu li").click(function(){

    // This is the triggered action name
    switch($(this).attr("data-action")) {

        // A case for each action. Your actions here
        case "first": alert("Stay a while"); break;
    }

    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
  });
