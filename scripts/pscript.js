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

// Get the modal
var pmedia_modal = document.getElementById("mypMediaModal");

// Get the button that opens the modal
var pmedia_btn = document.getElementById("mypMediaBtn");

// Get the <span> element that closes the modal
var pmedia_span = document.getElementsByClassName("pmedia_close")[0];

// When the user clicks the button, open the modal
pmedia_btn.onclick = function() {
	pmedia_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
pmedia_span.onclick = function() {
	pmedia_modal.style.display = "none";
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

document.addEventListener('contextmenu', event => event.preventDefault());
