// stack to emulate/follow window.history
let histack = [];

// handle nav between levels via browser back arrow
$(() => {
  history.pushState({page: 'Home', level: 1}, '');
  histack.push({page: 'Home', level: 1});
  console.log(histack);

  $(window).on('popstate', () => {
    const prev = histack.pop();

    console.log(histack);
    console.log(prev.level, ' --> ', history.state.level);

    if (prev.level == 1 && history.state.level == 2) {
      toggletab(history.state.page, true);
    }
    else if (prev.level == 2 && history.state.level == 3) {
      toggletab(history.state.page, true);
    }
    else if (prev.level == 2 && history.state.level == 4) {
      togglefull(history.state.page, true);
    }
    else if (prev.level == 3 && history.state.level == 4) {
      togglefull(history.state.page, true);
    }

    else if (prev.level == 2 && history.state.level == 1) {
      toggletab('hide', true);
    }
    else if (prev.level == 3 && history.state.level == 2) {
      toggletab('hide2', true);
    }
    else if (prev.level == 4 && history.state.level == 2) {
      togglefull('hide', true);
    }
    else if (prev.level == 4 && history.state.level == 3) {
      togglefull('hide', true);
    }
  });

})

// hide / show first-level folders
toggletab = (id, flag) => {
  if (id === 'hide') {
    $('#content').scrollTop(0);
    $('#content')[0].innerHTML = '';
    $('.overlay').css('display', 'none');
    if (!flag) { history.back(); }
  }
  else if (id === 'hide2') {
    $('.overlay2').remove();
    if (!flag) { history.back(); }
  }
  else {
    const selected = TEXTS[id];
    let two = '';

    const lev = (id == 'Photography') ? 3 : 2;
    history.pushState({page: id, level: lev}, '')
    histack.push({page: id, level: lev});
    console.log(histack);

    if (id === 'Art') {
      $('#content')[0].innerHTML += `<div class="subitem" class="item" onclick="toggletab('Photography', false);"><img class="icon" src="icon/Folder.png"><span class="section">Photography</span></div>`;
    }
    if (id === 'Photography') {
      $('body').append(`<div class="overlay2"><div class="overlay-content2"><div id="head"><img id="close" src="icon/Close.png" onclick="toggletab('hide2', false)"><span class="title2"></span></div><div id="content2"></div></div></div>`);
      two = '2';
    }

    if (id === 'Contact' || id === 'Statement') { $('#content')[0].innerHTML = selected; }
    else {
      for (let i = 0; i < selected.length; i++) {
        $('#content' + two)[0].innerHTML += `<div class="subitem" class="item" onclick="togglefull('${id}', false, ${i});"><img class="icon" src="icon/${id}.png"><span class="section" id="folder">${selected[i]}</span></div>`;
      }
    }
    $('.overlay' + two).css('display', 'block');
    $('.title' + two)[0].innerHTML = id;
  }
}

let blurb = false;
let pics = true;

// toggle top-level galleries
togglefull = (id, flag, n = null) => {
  if (id === 'hide') {
    if (pics) {
      $('.pic-container').remove();
    }
    if (blurb) {
      $('#blurb')[0].remove();
      blurb = false;
    }
    if (!flag) { history.back(); }

    $('#content-full').scrollTop(0);
    $('.overlay-full').css('display', 'none');
  }
  else {
    // if opening for first time, index into array, otherwise use given id
    const title = Array.isArray(TEXTS[id]) ? TEXTS[id][n] : id;
    let selected = title.replace(/\s/g, '');
    if (selected === '120') { selected = '_120'; }
    else if (selected === 'Tiana/Time') { selected = title.replace(/[\/]/, ''); }
    const captblurb = TEXTS[selected];
    const l = TEXTS.sizes[selected];

    history.pushState({page: title, level: 4}, '');
    histack.push({page: title, level: 4});
    console.log(histack);

    if (selected === '_120') { selected = '120'; }

    pics = true;

    $('#content-full').append('<div class="pic-container"></div>');

    if (Array.isArray(captblurb)) {
      for (let i = 0; i < l; i++) {
        $('.pic-container')[0].innerHTML += `<div class="work"><div class="piece"><img onclick="fullsize(this.src, ${i})" class="gallery" src="img/${selected}/${i}.jpg"></div><span class="small">${captblurb[i]}</span></div>`;
      }
    }
    else {
      if (captblurb.length > 0) {
        $('#content-full').prepend(`<div id="blurb">${captblurb}</div>`);
        blurb = true;
      }
      if (l) {
        for (let i = 0; i < l; i++) {
          $('.pic-container')[0].innerHTML += `<div class="work"><div class="piece"><img onclick="fullsize(this.src, ${i})" class="gallery" src="img/${selected}/${i}.jpg"></div></div>`;
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
fullsize = (i) => {
  const s = i.split('/');
  const si = TEXTS.sizes[s[s.length - 2]];
  $('body').append(`<div class="fullscreen"><img src="icon/Close.png" onclick="this.parentElement.remove();" class="arrows" id="exit"><img src="icon/Left.png" onclick="move('left', ${si});" class="arrows" id="left"><img src="icon/Right.png" onclick="move('right', ${si});" class="arrows" id="right"><img src="${i}" id="fullimage"></div>`);
}

// move left or right through fullsize images
move = (d, s) => {
  const p = $('#fullimage')[0].src.split('/');
  let i = +p.pop().split('.')[0];

  if (d === 'left') {
    if (i > 0) { i -= 1; }
    else { i = s + ((i % -s) - 1); }
  }
  else { i = (i + 1) % s; }

  $('#fullimage')[0].src = `${p.join('/')}/${i}.jpg`;
}

let light = true;

// toggle light -> dark mode
mode = () => {
  let f = light ? 'styles-dark.css' : 'styles-light.css';
  let b = light ? 'icon/White-Bomb.png' : 'icon/Black-Bomb.png';
  $('#css').attr('href', f);
  $('#mode').attr('src', b);
  light = !light;
}
