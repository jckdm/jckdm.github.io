window.onload = setTimeout(function() {

  var text = "jack adam is ... an artist",
      soFar = "";

  var visible = document.querySelector(".visible"),
      invisible = document.querySelector(".invisible");
      box = document.getElementsByTagName("BODY")[0];

  a(text, soFar, visible, invisible);
  box.style.display = "block";
}, 350);

function a(text, soFar, vis, invis) {

  invis.innerHTML = text;
  var t = setInterval(function() {
      soFar += text.substr(0, 1),
      text = text.substr(1);

      vis.innerHTML = soFar;
      invis.innerHTML = text;

      if (text.length === 0) clearInterval(t);
      if (soFar.length === 26) { b(text, soFar, vis, invis); }
  }, 110)
}

function b(text, soFar, vis, invis) {

    var i = 26;
    var s = document.querySelector(".strike");

    var x = setInterval(function() {
      if (i > 17) {
        text = soFar.substr(0, i - 1);
        vis.innerHTML = text;
        s.innerHTML = soFar.substr(i-1);
        i -= 1;
      }
    }, 50)
    c(text, soFar, vis);
}

function c(text, soFar, vis) {

    var next = document.querySelector(".next");
    var so = ""
    var te = " ... a technologist"

    var t = setInterval(function() {
        so += te.substr(0, 1);
        te = te.substr(1);

        next.innerHTML = so;
        if (te.length === 0) clearInterval(t);
    }, 55)
    d(text, soFar, vis);
}

function d(text, soFar, vis) {

    var i = 16;
    var s = document.querySelector(".strike2");
    var next = document.querySelector(".next");
    var q = document.querySelector(".q");
    var that = " a technologist";
    var j = that.length;

    var x = setInterval(function() {
      if (i > 1) {
        next.innerHTML = (next.innerHTML).substr(0, i - 1);
        s.innerHTML = that[j-1] + s.innerHTML;
        i -= 1;
        j -= 1;
      }
      next.innerHTML = " ... ";
      q.innerHTML = "?";
    }, 50)

    setTimeout(function(){ document.querySelector('.left').style.display = "block"; }, 2000);
}
