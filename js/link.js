$(function() {
  // disable white link popup in bottom left corner
  var aTags = document.querySelectorAll('span[data-href]');

  for (var i = 0; i < aTags.length; i++) {
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e) {
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });
  }
})
