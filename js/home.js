$('#myAboutBtn').on('click', function() { $('#myAboutModal').css('display', 'block'); });
$('.a_close').first().on('click', function() { $('#myAboutModal').css('display', 'none'); });

$('#myCVBtn').on('click', function() { $('#myCVModal').css('display', 'block'); });
$('.cv_close').first().on('click', function() { $('#myCVModal').css('display', 'none'); });

$('#myContactBtn').on('click', function() { $('#myContactModal').css('display', 'block'); });
$('.c_close').first().on('click', function() { $('#myContactModal').css('display', 'none'); });

$('#myWBtn').on('click', function() { $('#myWModal').css('display', 'block'); });
$('.w_close').first().on('click', function() { $('#myWModal').css('display', 'none'); });

$('#myArcBtn').on('click', function() { $('#myArcModal').css('display', 'block'); });
$('.arc_close').first().on('click', function() { $('#myArcModal').css('display', 'none'); });

$('#myPhBtn').on('click', function() { $('#myPhModal').css('display', 'block'); });
$('.ph_close').first().on('click', function() { $('#myPhModal').css('display', 'none'); });

$('#myPBtn').on('click', function() { $('#myPModal').css('display', 'block'); });
$('.p_close').first().on('click', function() { $('#myPModal').css('display', 'none'); });

$('#mySWBtn').on('click', function() { $('#mySWModal').css('display', 'block'); });
$('.sw_close').first().on('click', function() { $('#mySWModal').css('display', 'none'); });

var x = Math.floor(Math.random() * 15);
var y = Math.floor(Math.random() * 15);
document.getElementById("check1").value = x;
document.getElementById("check2").value = y;

function Click() {
  var answer = document.getElementById("answer").value;
  if ((x + y) == answer) {
    $('#CV, #RESUME, #checked').css('display', 'block');
    $('#checker, #checking').css('display', 'none');
    $('#switch').toggleClass('rSpace');
  }
}
