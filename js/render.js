function s(page) {
  var portraits = 9;
  var selfportraits = 8;
  var fashion = 6;
  var stilllife = 15;
  var street = 10;

  var dollhouse = 20;
  var dreaming = 12;
  var eshetewoldeyilma = 13;
  var soyboricua = 11;
  var _120 = 9;
  var tocomeofage = 3;

  var paintings = 9;
  var drawings = 8;
  var sculpture = 4;
  var digital = 6;
  var streetart = 8;

  var chapbook = 6;

  return (eval(page));
}

$(function() {
  var filename = (window.location.pathname).split('/').pop();

  var name = (filename.slice(0, -5)).replace(/-/g, '');
  if (name == "120_h") { name = '120'; }
  if (name == "eshetewoldeyilma_h") { name = 'eshetewoldeyilma'; }
  var path = 'img/' + name + '/';
  if (name == "120") { name = '_' + name; }
  var l = s(name);

  var sculpture1 = '<i>Fixing a Hole</i> <br> <br> 2019 <br> <br> 48 x 16 in. <br> <br> Candle wax on wood';
  var sculpture2 = '<i>Cerulean (Light)</i> <br> <br> 2019 <br> <br> 33 x 22 in. <br> <br> Acrylic, wall paint, spray paint, raw canvas, thread, nails, superglue on canvas';
  var sculpture3 = '<i>Sidetable</i> <br> <br> 2019 <br> <br> Pine, ash, brass, resin';
  var sculpture4 = '<i>Solar Storm Above the Spanish Empire</i> <br> <br> 2018 <br> <br> 49 x 14 in. <br> <br> Dye, embroidery, blood, paper ticket on unprimed canvas';

  var paintings1 = '<i> After Keith Haring </i> <br> <br> 2019 <br> <br> 30 x 30 in. <br> <br> Acrylic on canvas <br> <br> <br> <a href="pics/dearkeith.pdf" class="statement" target="_blank">STATEMENT</a>';
  var paintings2 = '<i>Lovers</i> <br> <br> 2019 <br> <br> 22 x 29 in. <br> <br> Acrylic, ink on foam board';
  var paintings3 = '<i>Evidence for a Large Exomoon Orbiting Kepler-1625b</i> <br> <br> 2018–2019 <br> <br> 35 x 47 in. (each 35 x 23.5 in.) <br> <br> Wall paint, acrylic paint on wood panels';
  var paintings4 = '<i> A Flag Belongs </i> <br> <br> 2018 <br> <br> 26 x 45 in. <br> <br> Paper, ink, embroidery on unprimed canvas';
  var paintings5 = '2018 <br> <br> 16 x 12 in. <br> <br> Ink with bamboo pen on cardstock';
  var paintings6 = '<i>Birth</i> <br> <br> 2017 <br> <br> 30 x 24 in. <br> <br> Acrylic paint, ink, paper, spray paint, oil on canvas';
  var paintings7 = '2016 <br> <br> 20 x 14 in. <br> <br> Ink with bamboo pen on cardstock';
  var paintings8 = '<i>Charlie-Gibbs Fracture Zone</i> <br> <br> 2018 <br> <br> 23 x 29 in. <br> <br> Wall paint, spray paint, acrylic paint on wood panel';
  var paintings9 = '<i>El techo de tu cuarto</i> <br> <br> 2018 <br> <br> 18 x 48 in. <br> <br> Glass paint and block printing ink on paper';

  for (var i = l; i >= 1; i--) {
    if (name == "sculpture" || name == "paintings") {
      $('.images').prepend('<div class="container"> <img class="hoverables" src="' + path + i + '.jpg"></img> <div class="overlay"> <div class="text">'
      + eval(name + i) + '</div> </div> </div> <div class="iSpace"></div>');
    }
    else {
      $('.websiteImages').prepend('<img class="reg-images" src="' + path + i + '.jpg"></img> <div class="iSpace"></div>');
    }
  }
})
