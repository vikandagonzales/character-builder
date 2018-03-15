if (document.querySelector('#character-subrace') !== null) {
  document.querySelector('#nav-race').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  back.href = 'race.php';
  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'dwarf':
      document.querySelector('div[data-subrace=hill]').classList.remove('hide');
      document.querySelector('div[data-subrace=mountain]').classList.remove('hide');
      break;
    case 'elf':
      document.querySelector('div[data-subrace=high]').classList.remove('hide');
      document.querySelector('div[data-subrace=wood]').classList.remove('hide');
      break;
    default:
  }
  if (JSON.parse(localStorage.getItem('subrace')) !== null) {
    selected = JSON.parse(localStorage.getItem('subrace'));
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === selected) {
        inputs[i].checked = true;
      }
    }
    next.href = 'level.php';
    nextArrow ();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('subrace')) === null) {
      $('#error').fadeIn();
    }
  });
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
      localStorage.setItem('subrace', JSON.stringify(document.querySelector('input[name=subrace]:checked').value));
      $('#error').fadeOut();
      sidenav ();
      next.href = 'level.php';
      nextArrow ();
    });
  }
}
