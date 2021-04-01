// hide / show first-level folders
toggletab = (id) => {
  if (id == 'hide') {
    $('#content').scrollTop(0);
    $('#content')[0].innerHTML = '';
    $('.overlay').css('display', 'none');
  }
  else if (id == 'hide2') {
    $('.overlay2').remove();
  }
  else {
    const selected = eval(id);
    let two = '';

    if (id == 'Art') {
      $('#content')[0].innerHTML += '<div class="subitem" class="item" onclick="toggletab(\'Photography\');"><img class="icon" src="icon/Folder.png"><br><span class="section">Photography</span></div>';
    }
    if (id == 'Photography') {
      $('body').append('<div class="overlay2"><div class="overlay-content2"><div id="head"><img id="close" src="icon/Close.png" onclick="toggletab(\'hide2\')"><span class="title2"></span></div><div id="content2"></div></div></div>');
      two = '2';
    }

    if (id == 'Contact' || id == 'Statement') { $('#content')[0].innerHTML = selected; }
    else {
      for (let i = 0; i < selected.length; i++) {
        $('#content' + two)[0].innerHTML += '<div class="subitem" class="item" onclick="togglefull(' + id + ', ' + i + ');"><img class="icon" src="icon/' + id + '.png"><span class="section" id="folder">' + selected[i] + '</span></div>';
      }
    }
    $('.overlay' + two).css('display', 'block');
    $('.title' + two)[0].innerHTML = id;
  }
}

let blurb = false;
let pics = true;

// toggle top-level galleries
togglefull = (id, n = null) => {
  if (id == 'hide') {
    if (pics) {
      $('.pic-container').remove();
    }
    if (blurb) {
      $('#blurb')[0].remove();
      blurb = false;
    }
    $('#content-full').scrollTop(0);
    $('.overlay-full').css('display', 'none');
  }
  else {
    const title = id[n];
    let selected = title.replace(/\s/g, '');
    if (selected == '120') { selected = '_120'; }
    else if (selected == 'Tiana/Time') { selected = title.replace(/[\/]/, ''); }
    const captblurb = eval(selected);
    const l = sizes[selected];

    if (selected == '_120') { selected = '120'; }

    pics = true;

    $('#content-full').append('<div class="pic-container"></div>');

    if (Array.isArray(captblurb)) {
      for (let i = 0; i < l; i++) {
        $('.pic-container')[0].innerHTML += '<div class="work"><div class="piece"><img onclick="fullsize(this.src, ' + i + ')" class="gallery" src="img/' + selected + '/' + i + '.jpg"></div><span class="small">' + captblurb[i] + '</span></div>';
      }
    }
    else {
      if (captblurb.length > 0) {
        $('#content-full').prepend('<div id="blurb">' + captblurb + '</div>');
        blurb = true;
      }
      if (l) {
        for (let i = 0; i < l; i++) {
          $('.pic-container')[0].innerHTML += '<div class="work"><div class="piece"><img onclick="fullsize(this.src, ' + i + ')" class="gallery" src="img/' + selected + '/' + i + '.jpg"></div></div>';
        }
      }
      else {
        $('.pic-container').remove();
        pics = false;
      }
    }
    $('.overlay-full').css('display', 'block');
    $('.title-full')[0].innerHTML = title;
  }
}

// display fullsize images with options for cycling thru images
fullsize = (i, ii) => {
  const s = i.split('/');
  const si = sizes[s[s.length - 2]];
  $('body').append('<div class="fullscreen"><img src="icon/Close.png" onclick="this.parentElement.remove();" class="arrows" id="exit"><img src="icon/Left.png" onclick="move(\'left\', ' + si + ');" class="arrows" id="left"><img src="icon/Right.png" onclick="move(\'right\', ' + si + ');" class="arrows" id="right"><img src="' + i + '" id="fullimage"></div>');
}

// move left or right through fullsize images
move = (d, s) => {
  const p = $('#fullimage')[0].src.split('/');
  let i = +p.pop().split('.')[0];

  if (d == 'left') {
    if (i > 0) { i -= 1; }
    else { i = s + ((i % -s) - 1); }
  }
  else { i = (i + 1) % s; }

  $('#fullimage')[0].src = p.join('/') + '/' + i + '.jpg';
}

let light = true;

// toggle light -> dark mode
mode = () => {
  let f = (light) ? 'styles-dark.css' : 'styles-light.css';
  let b = (light) ? 'icon/White-Bomb.png' : 'icon/Black-Bomb.png';
  $('#css').attr('href', f);
  $('#mode').attr('src', b);
  light = !light;
}
