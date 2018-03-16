if (document.querySelector('#character-name') !== null) {
  document.querySelector('#nav-name').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  if (JSON.parse(localStorage.getItem('skill')) && JSON.parse(localStorage.getItem('tool')) && JSON.parse(localStorage.getItem('artisan')) && JSON.parse(localStorage.getItem('gaming')) && JSON.parse(localStorage.getItem('music')) && JSON.parse(localStorage.getItem('expertise')) && JSON.parse(localStorage.getItem('language'))) {
    if ((JSON.parse(localStorage.getItem('skill')).length > 0 || skillLimit === 0) && (JSON.parse(localStorage.getItem('tool')).length > 0 || toolLimit === 0) && JSON.parse(localStorage.getItem('artisan')).length === artisanLimit && JSON.parse(localStorage.getItem('gaming')).length === gamingLimit && JSON.parse(localStorage.getItem('music')).length === musicLimit && JSON.parse(localStorage.getItem('expertise')).length === expertiseLimit && (JSON.parse(localStorage.getItem('language')).length > 0 || languageLimit === 0)) {
      back.href = 'abilities.php';
    }
  } else {
    back.href = 'background.php';
  }
  document.querySelector('input').addEventListener('keyup', function (event) {
    if (document.querySelector('input').value === '') {
      localStorage.removeItem('name');
      sidenav();
      next.removeAttribute('href');
      nextArrowRemove();
    } else {
      localStorage.setItem('name', JSON.stringify(document.querySelector('input').value));
      $('#error').fadeOut();
      sidenav();
      next.href = 'summary.php';
      nextArrow();
    }
  });
  if (JSON.parse(localStorage.getItem('name')) !== null) {
    document.querySelector('input').value = JSON.parse(localStorage.getItem('name'));
    next.href = 'summary.php';
    nextArrow();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('name')) === null) {
      $('#error').fadeIn();
    }
  });
}