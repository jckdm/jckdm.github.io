var cv_modal = document.getElementById("myCVModal");
var cv_btn = document.getElementById("myCVBtn");
var cv_span = document.getElementsByClassName("cv_close")[0];
cv_btn.onclick = function() { cv_modal.style.display = "block"; }
cv_span.onclick = function() { cv_modal.style.display = "none"; }

var c_modal = document.getElementById("myContactModal");
var c_btn = document.getElementById("myContactBtn");
var c_span = document.getElementsByClassName("c_close")[0];
c_btn.onclick = function() { c_modal.style.display = "block"; }
c_span.onclick = function() { c_modal.style.display = "none"; }

var a_modal = document.getElementById("myAboutModal");
var a_btn = document.getElementById("myAboutBtn");
var a_span = document.getElementsByClassName("a_close")[0];
a_btn.onclick = function() { a_modal.style.display = "block"; }
a_span.onclick = function() { a_modal.style.display = "none"; }

var w_modal = document.getElementById("myWModal");
var w_btn = document.getElementById("myWBtn");
var w_span = document.getElementsByClassName("w_close")[0];
w_btn.onclick = function() { w_modal.style.display = "block"; }
w_span.onclick = function() { w_modal.style.display = "none"; }

var arc_modal = document.getElementById("myArcModal");
var arc_btn = document.getElementById("myArcBtn");
var arc_span = document.getElementsByClassName("arc_close")[0];
arc_btn.onclick = function() { arc_modal.style.display = "block"; }
arc_span.onclick = function() { arc_modal.style.display = "none"; }

var p_modal = document.getElementById("myPModal");
var p_btn = document.getElementById("myPBtn");
var p_span = document.getElementsByClassName("p_close")[0];
p_btn.onclick = function() { p_modal.style.display = "block"; }
p_span.onclick = function() { p_modal.style.display = "none"; }

var sw_modal = document.getElementById("mySWModal");
var sw_btn = document.getElementById("mySWBtn");
var sw_span = document.getElementsByClassName("sw_close")[0];
sw_btn.onclick = function() { sw_modal.style.display = "block"; }
sw_span.onclick = function() { sw_modal.style.display = "none"; }

var ph_modal = document.getElementById("myPhModal");
var ph_btn = document.getElementById("myPhBtn");
var ph_span = document.getElementsByClassName("ph_close")[0];
ph_btn.onclick = function() { ph_modal.style.display = "block"; }
ph_span.onclick = function() { ph_modal.style.display = "none"; }

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


var x = Math.floor(Math.random() * 15);
var y = Math.floor(Math.random() * 15);
document.getElementById("check1").value = x;
document.getElementById("check2").value = y;

function Click() {
  var answer = document.getElementById("answer").value;
  if ((x + y) == answer) {
    document.getElementById("CV").style.display = "block";
    document.getElementById("RESUME").style.display = "block";
    document.getElementById("checker").style.display = "none";
    document.getElementById("checked").style.display = "block";
    document.getElementById("checking").style.display = "none";
  }
}
