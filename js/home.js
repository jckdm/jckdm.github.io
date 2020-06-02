var x = Math.floor(Math.random() * 15);
var y = Math.floor(Math.random() * 15);
document.getElementById("check1").value = x;
document.getElementById("check2").value = y;

function Click() {
  var answer = document.getElementById("answer").value;
  if ((x + y) == answer) {
    $('#CV, #RESUME, #checked').css('display', 'block');
    $('#checker, #checking').css('display', 'none');
    $('#switch').toggleClass('homespace');
  }
}
