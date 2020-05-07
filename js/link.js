$(function() {
  // disable white link popup in bottom left corner
  var aTags = document.querySelectorAll('span[data-href]');
  var x = aTags.length;

  for (var i = 0; i < x; i++) {
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e) {
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });
  }
})
