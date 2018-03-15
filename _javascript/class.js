if (document.querySelector('#character-class') !== null) {
  document.querySelector('#nav-class').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  back.href = 'level.php';
  if (JSON.parse(localStorage.getItem('class')) !== null) {
    selected = JSON.parse(localStorage.getItem('class'));
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === selected) {
        inputs[i].checked = true;
      }
    }
    if (parseInt(JSON.parse(localStorage.getItem('level'))) < 3) {
      localStorage.setItem('subclass', JSON.stringify('n/a'));
      next.href = 'alignment.php';
    } else {
      next.href = 'subclass.php';
    }
    nextArrow ();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('class')) === null) {
      $('#error').fadeIn();
    }
  });
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
      if (parseInt(JSON.parse(localStorage.getItem('level'))) < 3) {
        localStorage.setItem('subclass', JSON.stringify('n/a'));
        next.href = 'alignment.php';
      } else {
        localStorage.removeItem('subclass');
        next.href = 'subclass.php';
      }
      localStorage.setItem('class', JSON.stringify(document.querySelector('input[name=class]:checked').value));
      localStorage.removeItem('skill');
      localStorage.removeItem('tool');
      localStorage.removeItem('artisan');
      localStorage.removeItem('gaming');
      localStorage.removeItem('music');
      localStorage.removeItem('expertise');
      $('#error').fadeOut();
      sidenav ();
      nextArrow ();
    });
  }
}
