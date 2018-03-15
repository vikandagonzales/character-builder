if (document.querySelector('#character-alignment') !== null) {
  document.querySelector('#nav-alignment').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  if (JSON.parse(localStorage.getItem('level')) === null) {
    back.href = 'level.php';
  } else {
    if (parseInt(JSON.parse(localStorage.getItem('level'))) >= 3 && JSON.parse(localStorage.getItem('class')) !== null) {
      back.href = 'subclass.php';
    } else {
      back.href = 'class.php';
    }
  }
  if (JSON.parse(localStorage.getItem('alignment')) !== null) {
    selected = JSON.parse(localStorage.getItem('alignment'));
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === selected) {
        inputs[i].checked = true;
      }
    }
    next.href = 'background.php';
    nextArrow ();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('alignment')) === null) {
      $('#error').fadeIn();
    }
  });
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
      localStorage.setItem('alignment', JSON.stringify(document.querySelector('input[name=alignment]:checked').value));
      $('#error').fadeOut();
      sidenav ();
      next.href = 'background.php'
      nextArrow ();
    });
  }
}
