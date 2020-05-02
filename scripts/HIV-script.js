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

var p_modal = document.getElementById("myPModal");
var p_btn = document.getElementById("myPBtn");
var p_span = document.getElementsByClassName("p_close")[0];
p_btn.onclick = function() { p_modal.style.display = "block"; }
p_span.onclick = function() { p_modal.style.display = "none"; }

// disable white link popup in bottom left corner
var aTags = document.querySelectorAll('span[data-href]');

for(var i = 0; i < aTags.length; i++){
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e){
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });
}
