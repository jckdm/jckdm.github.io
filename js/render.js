function s(page) {
  var portraits = 9;
  var selfportraits = 8;
  var fashion = 6;
  var stilllife = 15;
  var street = 10;

  var dollhouse = 20;
  var dreaming = 12;
  var eshetewoldeyilma = 13;
  var tocomeofage = 3;
  var _120 = 9;
  var soyboricua = 11;

  var drawings = 8;
  var digital = 6;
  var streetart = 8;

  return (eval(page));
}

$(function() {
  var filename = (window.location.pathname).split('/').pop();

  var name = (filename.slice(0, -5)).replace(/-/g, '');
  var path = 'img/' + name + '/';
  if (name == "120") { name = '_' + name; }
  var l = s(name);

  for (var i = l; i >= 1; i--) {
    $('.websiteImages').prepend('<img class="reg-images" src="' + path + i + '.jpg"></img> <div class="iSpace"></div>');
  }
})
