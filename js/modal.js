show = (id) => $('#' + id.substr(0, id.length - 3) + 'Modal').css('display', 'block')
hide = (id) => $('#' + id.substr(0, id.length - 5) + 'Modal').css('display', 'none')

let flag = false;

describe = () => {
  let sh, w, o;

  if (!flag) { sh = 'hide'; w = '50%'; o = 1; }
  else { sh = 'show'; w = '90%'; o = 0; }

  $('#pull').text(sh + ' project description');
  $('.websiteImages').css({ 'max-width': w, transition: '1s ease-in-out' });
  $('.sidebar').css({ opacity: o, transition: '1s ease-in' });
  flag = !flag;
}
