$(window).resize(function() {
  setTimeout(function() { location.reload(true); }, 2000);
});

var w = $(window).width() - 25;
var h = $(window).height() - 25;

var ww = w / 50;
var arr, y;
var flag = true;

var ascii_arr = [];
for (var i = 32; i < 127; i++) {
  ascii_arr.push(String.fromCharCode(i));
}

function setup() {
  createCanvas(w, h);

  var d = new Date();
  var hr = d.getHours();
  var hrs;

  // 6am – 12am
  if (hr >= 6) { hrs = 6 + (23 - hr); }
  // 12am – 6am
  if (hr < 6) { hrs = 5 - hr; }
  var m = ((hrs * 60) + (59 - d.getMinutes()) + d.getSeconds() / 3600) / 1440;

  textSize(8);
  fill((20 * m) + 2.5, (36 * m) + 4.5, (82 * m) + 10.25);
  for (var i = 0; i < w; i += 8) {
    for (var j = 0; j < h; j += 8) {
      text(ascii_arr[Math.floor(Math.random() * 95) % 95], i, j);
    }
  }
  arr = ws();
  y = 0;
}

function ws() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr.push(Math.random() * w);
  }
  return arr;
}

function draw() {

  var j0 = Math.random() * (w / 75);
  var j1 = Math.random() * (w / 40);

  if (y < h) {
    noStroke();
    fill(70, 100, 140, 100);

    for (var i = 0; i < 10; i++) {
      var j = i % 2 == 0 ? j0 : j1;
      var x = arr[i] + j;
      rect(x, y, ww, 10);
    }
    y += 5;
  }
  else { setup(); }
}
