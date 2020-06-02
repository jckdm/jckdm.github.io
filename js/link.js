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

function show(id) { $('#' + id.substr(0, id.length - 3) + 'Modal').css('display', 'block'); }
function hide(id) { $('#' + id.substr(0, id.length - 5) + 'Modal').css('display', 'none'); }
