var back = '<div class="back">\n<a id="myArcBtn" class="bha">&#8617;&#xFE0E;</a>\n<div id="myArcModal" class="modal">\n<div class="modal-content">\n<span class="arc_close">&#8617;&#xFE0E;</span>\n<a id="myPhBtn" class="galleries">Photography</a>\n<div class="gap"></div>\n<div id="myPhModal" class="modal">\n<div class="modal-content">\n<span class="ph_close">&#8617;&#xFE0E;</span>\n<a id="myPBtn" class="galleries">Projects</a>\n<div class="gap"> </div>\n<div id="myPModal" class="modal">\n<div class="modal-content">\n<span class="p_close">&#8617;&#xFE0E;</span>\n<span data-href="doll-house.html" class="galleries">Doll House</span>\n<div class="gap"> </div>\n<span data-href="dreaming.html" class="galleries">Dreaming</span>\n<div class="gap"> </div>\n<span data-href="eshete-woldeyilma.html" class="galleries">Eshete Woldeyilma</span>\n<div class="gap"> </div>\n<span data-href="soy-boricua.html" class="galleries">Soy Boricua</span>\n<div class="gap"> </div>\n<span data-href="120.html" class="galleries">120</span>\n<div class="gap"> </div>\n<span data-href="to-come-of-age.html" class="galleries">To Come of Age</span>\n<div class="medspace"> </div>\n</div>\n</div>\n<a id="mySWBtn" class="galleries">Selected Works</a>\n<div id="mySWModal" class="modal">\n<div class="modal-content">\n<span class="sw_close">&#8617;&#xFE0E;</span>\n<span data-href="portraits.html" class="galleries">Portraits</span>\n<div class="gap"> </div>\n<span data-href="self-portraits.html" class="galleries">Self-portraits</span>\n<div class="gap"> </div>\n<span data-href="fashion.html" class="galleries">Fashion</span>\n<div class="gap"> </div>\n<span data-href="still-life.html" class="galleries">Still Life</span>\n<div class="gap"> </div>\n<span data-href="street.html" class="galleries">Street</span>\n<div class="medspace"> </div>\n</div>\n</div>\n<div class="medspace"> </div>\n</div>\n</div>\n<span data-href="paintings.html" class="galleries">Paintings</span>\n<div class="gap"> </div>\n<span data-href="drawings.html" class="galleries">Drawings</span>\n<div class="gap"> </div>\n<span data-href="sculpture.html" class="galleries">Sculpture</span>\n<div class="gap"> </div>\n<span data-href="digital.html" class="galleries">Digital</span>\n<div class="gap"> </div>\n<span data-href="street-art.html" class="galleries">Street Art</span>\n<div class="gap"> </div>\n<span data-href="sounds.html" class="galleries">Ambiance</span>\n<div class="medspace"> </div>\n</div>\n</div>\n<br> <br>\n<div id="arrSpace"></div>\n<div id="hugespace"></div>\n<span data-href="index.html" class="bha" id="backhome">&#8629;&#xFE0E;</span>\n</div>';

$(function() {
  $('body').append(back);

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

  document.addEventListener('contextmenu', event => event.preventDefault());
})
