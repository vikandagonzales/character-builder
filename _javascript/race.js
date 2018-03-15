if (document.querySelector('#character-race') !== null) {
  document.querySelector('#nav-race').classList.add('is-active');
  $('#next').removeClass('hide');
  if (JSON.parse(localStorage.getItem('race')) !== null) {
    selected = JSON.parse(localStorage.getItem('race'));
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === selected) {
        inputs[i].checked = true;
      }
    }
    if (JSON.parse(localStorage.getItem('subrace')) === 'n/a') {
      next.href = 'level.php';
    } else {
      next.href = 'subrace.php';
    }
    nextArrow ();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('race')) === null) {
      $('#error').fadeIn();
    }
  });
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
      if (document.querySelector('input[name=race]:checked').value === 'human') {
        localStorage.setItem('subrace', JSON.stringify('n/a'));
        next.href = 'level.php';
      } else {
        localStorage.removeItem('subrace');
        next.href = 'subrace.php';
      }
      localStorage.removeItem('skill');
      localStorage.removeItem('tool');
      localStorage.removeItem('artisan');
      localStorage.removeItem('gaming');
      localStorage.removeItem('music');
      localStorage.removeItem('language');
      localStorage.setItem('race', JSON.stringify(document.querySelector('input[name=race]:checked').value));
      $('#error').fadeOut();
      sidenav ();
      nextArrow ();
    });
  }
}
