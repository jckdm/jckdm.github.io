$(window).resize(function() {
  setTimeout(function() { location.reload(true); }, 2000);
});

var w = $(window).width() - 20;
var h = $(window).height() - 20;

var ww = w / 50;
var arr, y;

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

  fill((20 * m) + 5, (36 * m) + 9, (82 * m) + 20.5);
  stroke(0, 0, 0, 50);
  for (var i = 0; i < w / 10; i++) {
    for (var j = 0; j < h / 10; j++) {
      rect(i*10, j*10, ww, ww);
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

var y = 0;

function draw() {

  var j0 = Math.random() * (w / 75);
  var j1 = Math.random() * (w / 40);

  if (y < h) {
    noStroke();
    fill(70, 100, 140, 80);

    for (var i = 0; i < 10; i++) {
      var j = i % 2 == 0 ? j0 : j1;
      var x = arr[i] + j;
      rect(x, y, ww, 10);
    }
    y += 5;
  }
  else { setup(); }
}
