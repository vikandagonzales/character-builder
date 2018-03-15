if (document.querySelector('#character-background') !== null) {
  document.querySelector('#nav-background').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  back.href = 'alignment.php'
  if (JSON.parse(localStorage.getItem('background')) !== null) {
    selected = JSON.parse(localStorage.getItem('background'));
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === selected) {
        inputs[i].checked = true;
      }
    }
    next.href = 'skill.php';
    nextArrow ();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('background')) === null) {
      $('#error').fadeIn();
    }
  });
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
      localStorage.setItem('background', JSON.stringify(document.querySelector('input[name=background]:checked').value));
      localStorage.removeItem('skill');
      localStorage.removeItem('tool');
      localStorage.removeItem('artisan');
      localStorage.removeItem('gaming');
      localStorage.removeItem('music');
      localStorage.removeItem('language');
      $('#error').fadeOut();
      sidenav ();
      next.href = 'skill.php'
      nextArrow ();
    });
  }
}
