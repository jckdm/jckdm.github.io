var back = '<div class="back"><a id="myWBtn" class="bha">&#8617;&#xFE0E;</a> <div id="myWModal" class="modal"> <div class="modal-content"> <span class="w_close">&#8617;&#xFE0E; </span><a id="myArcBtn" class="archive">View Full Archive</a> <div class="gap"> </div> <div id="myArcModal" class="modal"> <div class="modal-content"> <span class="arc_close">&#8617;&#xFE0E; </span><a id="myPhBtn" class="galleries">Photography</a> <div class="gap"> </div> <div id="myPhModal" class="modal"> <div class="modal-content"> <span class="ph_close">&#8617;&#xFE0E; </span><a id="myPBtn" class="galleries">Projects</a> <div class="gap"> </div> <div id="myPModal" class="modal"> <div class="modal-content"> <span class="p_close">&#8617;&#xFE0E; </span> <span data-href="doll-house.html" class="galleries">Doll House </span> <div class="gap"> </div> <span data-href="dreaming.html" class="galleries">Dreaming </span> <div class="gap"> </div> <span data-href="eshete-woldeyilma.html" class="galleries">Eshete Woldeyilma </span> <div class="gap"> </div> <span data-href="soy-boricua.html" class="galleries">Soy Boricua </span> <div class="gap"> </div> <span data-href="120.html" class="galleries">120 </span> <div class="gap"> </div> <span data-href="to-come-of-age.html" class="galleries">To Come of Age </span> <div class="medspace"> </div> </div> </div><a id="mySWBtn" class="galleries">Selected Works</a> <div id="mySWModal" class="modal"> <div class="modal-content"> <span class="sw_close">&#8617;&#xFE0E; </span> <span data-href="portraits.html" class="galleries">Portraits </span> <div class="gap"> </div> <span data-href="self-portraits.html" class="galleries">Self-portraits </span> <div class="gap"> </div> <span data-href="fashion.html" class="galleries">Fashion </span> <div class="gap"> </div> <span data-href="still-life.html" class="galleries">Still Life </span> <div class="gap"> </div> <span data-href="street.html" class="galleries">Street </span> <div class="medspace"> </div> </div> </div> <div class="medspace"> </div> </div> </div> <span data-href="paintings.html" class="galleries">Paintings </span> <div class="gap"> </div> <span data-href="drawings.html" class="galleries">Drawings </span> <div class="gap"> </div> <span data-href="sculpture.html" class="galleries">Sculpture </span> <div class="gap"> </div> <span data-href="digital.html" class="galleries">Digital </span> <div class="gap"> </div> <span data-href="street-art.html" class="galleries">Street Art </span> <div class="gap"> </div> <span data-href="sounds.html" class="galleries">Ambiance </span> <div class="medspace"> </div> </div> </div> <span class="slash">/</span><span data-href="120_h.html" class="highlite">medium-format film images of urban intimacy</span> <div class="highgap"></div> <span class="slash">/</span><a href="https://jackadam.cc/tianatime" target="_blank" class="highlite">virtual, globalized art exhibition</a> <div class="highgap"></div> <span class="slash">/</span><span data-href="HIV.html" class="highlite">interactive data visualization of trends in HIV</span> <div class="highgap"></div> <span class="slash">/</span><span data-href="chapbook.html" class="highlite">hand-bound, typeset chapbook</span> <div class="highgap"></div> <span class="slash">/</span><span data-href="eshete-woldeyilma_h.html" class="highlite">on-going photo essay exploring community</span> <div class="iSpace"></div> </div> </div> <br> <br> <div id="arrSpace"> </div> <div id="hugespace"> </div> <span data-href="index.html" class="bha" id="backhome">&#8629;&#xFE0E; </span></div>';

$(function() {
  $('body').append(back);

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
})
