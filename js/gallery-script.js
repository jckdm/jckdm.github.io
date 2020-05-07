var back = '<div class="back">\n<a id="myArcBtn" class="bha">&#8617;&#xFE0E;</a>\n<div id="myArcModal" class="modal">\n<div class="modal-content">\n<span class="arc_close">&#8617;&#xFE0E;</span>\n<a id="myPhBtn" class="galleries">Photography</a>\n<div class="gap"></div>\n<div id="myPhModal" class="modal">\n<div class="modal-content">\n<span class="ph_close">&#8617;&#xFE0E;</span>\n<a id="myPBtn" class="galleries">Projects</a>\n<div class="gap"> </div>\n<div id="myPModal" class="modal">\n<div class="modal-content">\n<span class="p_close">&#8617;&#xFE0E;</span>\n<span data-href="doll-house.html" class="galleries">Doll House</span>\n<div class="gap"> </div>\n<span data-href="dreaming.html" class="galleries">Dreaming</span>\n<div class="gap"> </div>\n<span data-href="eshete-woldeyilma.html" class="galleries">Eshete Woldeyilma</span>\n<div class="gap"> </div>\n<span data-href="soy-boricua.html" class="galleries">Soy Boricua</span>\n<div class="gap"> </div>\n<span data-href="120.html" class="galleries">120</span>\n<div class="gap"> </div>\n<span data-href="to-come-of-age.html" class="galleries">To Come of Age</span>\n<div class="medspace"> </div>\n</div>\n</div>\n<a id="mySWBtn" class="galleries">Selected Works</a>\n<div id="mySWModal" class="modal">\n<div class="modal-content">\n<span class="sw_close">&#8617;&#xFE0E;</span>\n<span data-href="portraits.html" class="galleries">Portraits</span>\n<div class="gap"> </div>\n<span data-href="self-portraits.html" class="galleries">Self-portraits</span>\n<div class="gap"> </div>\n<span data-href="fashion.html" class="galleries">Fashion</span>\n<div class="gap"> </div>\n<span data-href="still-life.html" class="galleries">Still Life</span>\n<div class="gap"> </div>\n<span data-href="street.html" class="galleries">Street</span>\n<div class="medspace"> </div>\n</div>\n</div>\n<div class="medspace"> </div>\n</div>\n</div>\n<span data-href="painting.html" class="galleries">Painting</span>\n<div class="gap"> </div>\n<span data-href="drawing.html" class="galleries">Drawing</span>\n<div class="gap"> </div>\n<span data-href="sculpture.html" class="galleries">Sculpture</span>\n<div class="gap"> </div>\n<span data-href="digital.html" class="galleries">Digital</span>\n<div class="gap"> </div>\n<span data-href="street-art.html" class="galleries">Street Art</span>\n<div class="gap"> </div>\n<span data-href="ambiance.html" class="galleries">Ambiance</span>\n<div class="medspace"> </div>\n</div>\n</div>\n<br> <br>\n<div id="arrSpace"></div>\n<div id="hugespace"></div>\n<span data-href="index.html" class="bha" id="backhome">&#8629;&#xFE0E;</span>\n</div>';

$(function() {
  $('body').append(back);

  $('#myArcBtn').on('click', function() { $('#myArcModal').css('display', 'block'); });
  $('.arc_close').first().on('click', function() { $('#myArcModal').css('display', 'none'); });

  $('#myPhBtn').on('click', function() { $('#myPhModal').css('display', 'block'); });
  $('.ph_close').first().on('click', function() { $('#myPhModal').css('display', 'none'); });

  $('#myPBtn').on('click', function() { $('#myPModal').css('display', 'block'); });
  $('.p_close').first().on('click', function() { $('#myPModal').css('display', 'none'); });

  $('#mySWBtn').on('click', function() { $('#mySWModal').css('display', 'block'); });
  $('.sw_close').first().on('click', function() { $('#mySWModal').css('display', 'none'); });
})
