if (document.querySelector('#character-subclass') !== null) {
  document.querySelector('#nav-class').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  if (JSON.parse(localStorage.getItem('subrace')) === 'n/a' || JSON.parse(localStorage.getItem('subrace')) === null) {
    back.href = 'race.php';
  } else {
    back.href = 'subrace.php';
  }
  switch (JSON.parse(localStorage.getItem('class'))) {
    case 'druid':
      document.querySelector('div[data-subclass=land]').classList.remove('hide');
      document.querySelector('div[data-subclass=moon]').classList.remove('hide');
      break;
    case 'paladin':
      document.querySelector('div[data-subclass=devotion]').classList.remove('hide');
      document.querySelector('div[data-subclass=ancients]').classList.remove('hide');
      document.querySelector('div[data-subclass=vengeance]').classList.remove('hide');
      break;
    case 'rogue':
      document.querySelector('div[data-subclass=thief]').classList.remove('hide');
      document.querySelector('div[data-subclass=assassin]').classList.remove('hide');
      document.querySelector('div[data-subclass=arcane-trickster]').classList.remove('hide');
      break;
    default:
  }
  if (JSON.parse(localStorage.getItem('subclass')) !== null) {
    selected = JSON.parse(localStorage.getItem('subclass'));
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === selected) {
        inputs[i].checked = true;
      }
    }
    next.href = 'alignment.php';
    nextArrow ();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('subclass')) === null) {
      $('#error').fadeIn();
    }
  });
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
      localStorage.setItem('subclass', JSON.stringify(document.querySelector('input[name=subclass]:checked').value));
      $('#error').fadeOut();
      sidenav ();
      next.href = 'alignment.php';
      nextArrow ();
    });
  }
}
