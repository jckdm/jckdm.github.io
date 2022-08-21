const INDICES = {
  DigitalDistancing: 0,
  Tiled: 1,
  TianaTime: 2,
  Screensavers: 3,
  CSSParser: 4,
  DollHouse: 0,
  Dreaming: 1,
  EsheteWoldeyilma: 2,
  120: 3,
  Portraits: 4,
  StillLife: 5,
  Street: 6,
  Painting: 0,
  Drawing: 1,
  Sculpture: 2,
  StreetArt: 3,
  Zine: 0,
  TheWinterSocial: 1,
  Chapbook: 2,
  Neighborhood: 3,
  FilmTranslation: 4,
  HowtoSayGoodbyetoaStranger: 0,
  WeHaveSeentheBestofOurTimes: 1
};

$(() => {
  const url = window.location.href.split('?');
  const levels = url.length;

  if (levels == 2) {
    toggletab(url[1], 'false');
  }
  else if (levels == 3) {
    if (url[2] === 'Photography') {
      toggletab(url[1], 'false');
      toggletab(url[2], 'false');
    }
    else {
      toggletab(url[1], 'false');
      togglefull(url[1], 'false', INDICES[url[2]]);
    }
  }
  else if (levels == 4) {
    toggletab(url[1], 'false');
    toggletab(url[2], 'false');
    togglefull(url[2], 'false', INDICES[url[3]]);
  }
})

// hide / show first-level folders
toggletab = (id, flag) => {
  if (id === 'hide') {
    $('#content').scrollTop(0);
    $('#content')[0].innerHTML = '';
    $('.overlay').css('display', 'none');

    window.history.replaceState({id: id}, '', `/`);
    $('#dir').text('jackadam/');
  }
  else if (id === 'hide2') {
    $('.overlay2').remove();
    window.history.pushState({}, '', `?Art`);
    $('#dir').text('jackadam/Art');
  }
  else {
    const selected = TEXTS[id];
    let two = '';

    const lev = (id === 'Photography') ? 3 : 2;

    window.history.pushState({}, '', `?${id}`);
    $('#dir').text(`jackadam/${id}`);

    if (id === 'Art') {
      const div = document.createElement('div');
      div.classList.add('subitem', 'item');
      div.setAttribute('onclick', 'toggletab("Photography", false)');

      const f = document.createElement('img');
      f.setAttribute('class', 'icon');
      f.setAttribute('src', '/icon/Folder.png');

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
      c.setAttribute('src', '/icon/Close.png');
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

      window.history.pushState({}, '', '?Art?Photography');
      $('#dir').text('jackadam/Art/Photography');
    }

    if (id === 'Contact' || id === 'Statement') { $('#content')[0].innerHTML = selected; }
    else {
      for (let i = 0; i < selected.length; i++) {
        const div = document.createElement('div');
        div.classList.add('subitem', 'item');
        div.setAttribute('onclick', `togglefull('${id}', false, ${i})`);

        const f = document.createElement('img');
        f.setAttribute('class', 'icon');
        f.setAttribute('src', `/icon/${id}.png`);

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

    $('#content-full').scrollTop(0);
    $('.overlay-full').css('display', 'none');

    const url = window.location.href.split('?');
    const win = url[url.length - 2];

    if (win === 'Photography') {
      window.history.pushState({}, '', `?Art?Photography`);
      $('#dir').text('jackadam/Art/Photography');
    }
    else {
      window.history.pushState({}, '', `?${win}`);
      $('#dir').text(`jackadam/${win}`);
    }
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

    if (id === 'Photography') { window.history.pushState({}, '', `?Art?Photography?${selected}`); }
    else { window.history.pushState({}, '', `?${id}?${selected}`); }
  }
}

// display fullsize images with options for cycling thru images
fullsize = (i) => {
  const s = i.split('/');
  const si = TEXTS.sizes[s[s.length - 2]];

  const cb = document.createElement('img');
  cb.setAttribute('src', '/icon/Close.png');
  cb.setAttribute('onclick', 'this.parentElement.remove()');
  cb.setAttribute('class', 'arrows');
  cb.setAttribute('id', 'exit');

  const lb = document.createElement('img');
  lb.setAttribute('src', '/icon/Left.png');
  lb.setAttribute('onclick', `move('left', ${si})`);
  lb.setAttribute('class', 'arrows');
  lb.setAttribute('id', 'left');

  const rb = document.createElement('img');
  rb.setAttribute('src', '/icon/Right.png');
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
  let b = light ? '/icon/White-Bomb.png' : '/icon/Black-Bomb.png';
  $('#css').attr('href', f);
  $('#mode').attr('src', b);
  light = !light;
}
