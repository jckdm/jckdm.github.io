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

    if (prev.level === 1 && history.state.level === 2) {
      toggletab(history.state.page, true);
    }
    else if (prev.level === 2 && history.state.level === 3) {
      toggletab(history.state.page, true);
    }
    else if (prev.level === 2 && history.state.level === 4) {
      togglefull(history.state.page, true);
    }
    else if (prev.level === 3 && history.state.level === 4) {
      togglefull(history.state.page, true);
    }

    else if (prev.level === 2 && history.state.level === 1) {
      toggletab('hide', true);
    }
    else if (prev.level === 3 && history.state.level === 2) {
      toggletab('hide2', true);
    }
    else if (prev.level === 4 && history.state.level === 2) {
      togglefull('hide', true);
    }
    else if (prev.level === 4 && history.state.level === 3) {
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

    const lev = (id === 'Photography') ? 3 : 2;
    history.pushState({page: id, level: lev}, '')
    histack.push({page: id, level: lev});
    console.log(histack);

    if (id === 'Art') {
      const div = document.createElement('div');
      div.classList.add('subitem', 'item');
      div.setAttribute('onclick', 'toggletab("Photography", false)');

      const f = document.createElement('img');
      f.setAttribute('class', 'icon');
      f.setAttribute('src', 'icon/Folder.png');

      const s = document.createElement('span');
      s.setAttribute('class', 'section');
      s.innerText = 'Photography';

      div.append(f, s);
      $('#content').append(div);
    }
    if (id === 'Photography') {

      const ddo = document.createElement('div');
      ddo.setAttribute('class', 'overlay2');

      const ddoc = document.createElement('div');
      ddoc.setAttribute('class', 'overlay-content2');

      const h = document.createElement('div');
      h.setAttribute('id', 'head');

      const c = document.createElement('img');
      c.setAttribute('id', 'close');
      c.setAttribute('src', 'icon/Close.png');
      c.setAttribute('onclick', 'toggletab("hide2", false)');

      const t = document.createElement('span');
      t.setAttribute('class', 'title2');

      const ddc2 = document.createElement('div');
      ddc2.setAttribute('id', 'content2');

      h.append(c, t);
      ddoc.append(h, ddc2);
      ddo.append(ddoc);
      document.body.append(ddo);

      two = '2';
    }

    if (id === 'Contact' || id === 'Statement') { $('#content')[0].innerHTML = selected; }
    else {
      for (let i = 0; i < selected.length; i++) {
        const div = document.createElement('div');
        div.classList.add('subitem', 'item');
        div.setAttribute('onclick', `togglefull('${id}', false, ${i})`);

        const f = document.createElement('img');
        f.setAttribute('class', 'icon');
        f.setAttribute('src', `icon/${id}.png`);

        const s = document.createElement('span');
        s.setAttribute('class', 'section');
        s.setAttribute('id', 'folder')
        s.innerText = selected[i];

        div.append(f, s);
        $(`#content${two}`).append(div);
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
    else if (selected === 'Tiana/Time') { selected = 'TianaTime'; }
    else if (selected === '"Neighbor-hood"') { selected = 'Neighborhood'; }
    const captblurb = TEXTS[selected];
    const l = TEXTS.sizes[selected];

    history.pushState({page: title, level: 4}, '');
    histack.push({page: title, level: 4});
    console.log(histack);

    if (selected === '_120') { selected = '120'; }

    pics = true;

    const pc = document.createElement('div');
    pc.setAttribute('class', 'pic-container');
    $('#content-full').append(pc);

    if (Array.isArray(captblurb)) {
      for (let i = 0; i < l; i++) {

        const w = document.createElement('div');
        w.setAttribute('class', 'work');

        const p = document.createElement('div');
        p.setAttribute('class', 'piece');

        const img = document.createElement('img');
        img.setAttribute('onclick', `fullsize(this.src, ${i})`);
        img.setAttribute('class', 'gallery');
        img.setAttribute('src', `img/${selected}/${i}.jpg`);

        const s = document.createElement('span');
        s.setAttribute('class', 'small');
        s.innerHTML = captblurb[i];

        p.append(img);
        w.append(p, s);
        $('.pic-container').append(w);
      }
    }
    else {
      if (captblurb.length > 0) {
        const bd = document.createElement('div');
        bd.setAttribute('id', 'blurb');
        bd.innerHTML = captblurb;
        $('#content-full').prepend(bd);

        blurb = true;
      }
      if (l) {
        for (let i = 0; i < l; i++) {
          const w = document.createElement('div');
          w.setAttribute('class', 'work');

          const p = document.createElement('div');
          p.setAttribute('class', 'piece');

          const img = document.createElement('img');
          img.setAttribute('onclick', `fullsize(this.src, ${i})`);
          img.setAttribute('class', 'gallery');

          img.setAttribute('src', `img/${selected}/${i}.jpg`);

          p.append(img);
          w.append(p);
          $('.pic-container').append(w);
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

  const cb = document.createElement('img');
  cb.setAttribute('src', 'icon/Close.png');
  cb.setAttribute('onclick', 'this.parentElement.remove()');
  cb.setAttribute('class', 'arrows');
  cb.setAttribute('id', 'exit');

  const lb = document.createElement('img');
  lb.setAttribute('src', 'icon/Left.png');
  lb.setAttribute('onclick', `move('left', ${si})`);
  lb.setAttribute('class', 'arrows');
  lb.setAttribute('id', 'left');

  const rb = document.createElement('img');
  rb.setAttribute('src', 'icon/Right.png');
  rb.setAttribute('onclick', `move('right', ${si})`);
  rb.setAttribute('class', 'arrows');
  rb.setAttribute('id', 'right');

  const fi = document.createElement('img');
  fi.setAttribute('src', `${i}`);
  fi.setAttribute('id', 'fullimage');

  const div = document.createElement('div');
  div.setAttribute('class', 'fullscreen');

  div.append(cb, lb, rb, fi);
  document.body.append(div);
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
