$(document).ready(setTimeout(() => {
  a();
  $('body')[0].style.display = 'block';
}, 350));

a = () => {
  let text = 'jack adam is ... an artist';
  let soFar = '';
  const vis = document.querySelector('.visible');
  const invis = document.querySelector('.invisible');

  invis.innerHTML = text;
  const t = setInterval(() => {
      soFar += text.substr(0, 1),
      text = text.substr(1);

      vis.innerHTML = soFar;
      invis.innerHTML = text;

      if (text.length == 0) clearInterval(t);
      if (soFar.length == 26) { b(text, soFar, vis); }
  }, 110)
}

b = (text, soFar, vis) => {

    let i = 26;
    const s = document.querySelector('.strike');

    const x = setInterval(() => {
      if (i > 17) {
        text = soFar.substr(0, i - 1);
        vis.innerHTML = text;
        s.innerHTML = soFar.substr(i-1);
        i -= 1;
      }
    }, 50)
    c(text, soFar, vis);
}

c = (text, soFar, vis) => {

    const next = document.querySelector('.next');
    let so = ''
    let te = ' a technologist'

    const t = setInterval(() => {
        so += te.substr(0, 1);
        te = te.substr(1);

        next.innerHTML = so;
        if (te.length === 0) clearInterval(t);
    }, 55)
    d(text, soFar);
}

d = (text, soFar) => {

    let i = 16;
    const s = document.querySelector('.strike2');
    const next = document.querySelector('.next');
    const q = document.querySelector('.q');
    const that = ' a technologist';
    let j = that.length;

    const x = setInterval(() => {
      if (i > 1) {
        next.innerHTML = (next.innerHTML).substr(0, i - 1);
        s.innerHTML = that[j-1] + s.innerHTML;
        i -= 1;
        j -= 1;
      }
      next.innerHTML = ' ';
    }, 50)

    setTimeout(() => $('#pages').css('visibility', 'visible'), 2000);
}
