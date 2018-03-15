if (document.querySelector('#character-level') !== null) {
  document.querySelector('#nav-level').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  if (JSON.parse(localStorage.getItem('subrace')) === 'n/a' || JSON.parse(localStorage.getItem('subrace')) === null) {
    back.href = 'race.php';
  } else {
    back.href = 'subrace.php';
  }
  document.querySelector('#character-level input').addEventListener('change', function (event) {
    localStorage.setItem('level', JSON.stringify(document.querySelector('#character-level input').value));
    if (parseInt(JSON.parse(localStorage.getItem('level'))) >= 3 && JSON.parse(localStorage.getItem('subclass')) === 'n/a') {
      localStorage.removeItem('subclass');
    }
    $('#error').fadeOut();
    sidenav ();
    next.href = 'class.php';
    nextArrow ();
  });
  document.querySelector('#character-level input').addEventListener('keydown', function (event) {
    event.preventDefault();
    if (event.keyCode === 8 || event.keyCode === 46) {
      document.querySelector('#character-level input').value = document.querySelector('#character-level input').value.slice(0, -1);
    }
    if (document.querySelector('#character-level input').value === '') {
      if (/[1-9]/.test(event.key)) {
        document.querySelector('#character-level input').value += event.key;
      }
    } else if (/^1$/.test(document.querySelector('#character-level input').value)) {
      if (/[0-9]/.test(event.key)) {
        document.querySelector('#character-level input').value += event.key;
      }
    } else if (/^2$/.test(document.querySelector('#character-level input').value)) {
      if (/0/.test(event.key)) {
        document.querySelector('#character-level input').value += event.key;
      }
    }
    if (document.querySelector('#character-level input').value === '') {
      localStorage.removeItem('level');
      sidenav ();
      next.removeAttribute('href');
      nextArrowRemove ();
    } else {
      localStorage.setItem('level', JSON.stringify(document.querySelector('#character-level input').value));
      if (parseInt(JSON.parse(localStorage.getItem('level'))) >= 3 && JSON.parse(localStorage.getItem('subclass')) === 'n/a') {
        localStorage.removeItem('subclass');
      }
      $('#error').fadeOut();
      sidenav ();
      next.href = 'class.php';
      nextArrow ();
    }
  });
  if (JSON.parse(localStorage.getItem('level')) !== null) {
    document.querySelector('#character-level input').value = JSON.parse(localStorage.getItem('level'));
    next.href = 'class.php';
    nextArrow ();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('level')) === null) {
      $('#error').fadeIn();
    }
    if (parseInt(JSON.parse(localStorage.getItem('level'))) < 3) {
      localStorage.setItem('subclass', JSON.stringify('n/a'));
    }
    if (JSON.parse(localStorage.getItem('class')) === 'rogue' && parseInt(JSON.parse(localStorage.getItem('level'))) < 6) {
      if (JSON.parse(localStorage.getItem('expertise')).length > 2) {
        localStorage.removeItem('expertise');
      }
    }
  });
}
