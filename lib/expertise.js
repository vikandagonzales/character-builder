if (document.querySelector('#character-expertise') !== null) {
  document.querySelector('#nav-proficiencies').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  back.href = 'tool.php';
  switch (JSON.parse(localStorage.getItem('class'))) {
    case 'rogue':
      if (parseInt(JSON.parse(localStorage.getItem('level'))) >= 6) {
        document.querySelector('#expertise-number').innerHTML = '4';
      } else {
        document.querySelector('#expertise-number').innerHTML = '2';
      }
      for (var i = 0; i < document.querySelectorAll('[data-expertise]').length; i++) {
        if (JSON.parse(localStorage.getItem('skill')).includes(document.querySelectorAll('[data-expertise]')[i].dataset.expertise) || JSON.parse(localStorage.getItem('tool')).includes(document.querySelectorAll('[data-expertise]')[i].dataset.expertise)) {
          document.querySelectorAll('[data-expertise]')[i].classList.remove('hide');
        }
      }
      break;
    default:
  }
  $('#instructions').fadeIn();
  expertise = JSON.parse(localStorage.getItem('expertise')) || [];
  for (var i = 0; i < inputs.length; i++) {
    if (expertise.indexOf(inputs[i].id) !== -1) {
      inputs[i].checked = true;
    }
  }
  localStorage.setItem('expertise', JSON.stringify(expertise));
  expertiseLimit = parseInt(document.querySelector('#expertise-number').innerHTML) || 0;
  if (JSON.parse(localStorage.getItem('expertise')).length === expertiseLimit) {
    $('#error').fadeOut();
    sidenav();
    next.href = 'language.php';
    nextArrow();
  } else {
    sidenav();
    next.removeAttribute('href');
    nextArrowRemove();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('expertise')).length !== expertiseLimit) {
      $('#error').fadeIn();
    }
  });
  $('input[name=expertise]').on('change', function (event) {
    if ($('input[name=expertise]:checked').length > expertiseLimit) {
      event.target.checked = false;
    }
    if (event.target.checked) {
      expertise.push(event.target.id);
    } else {
      if (expertise.indexOf(event.target.id) !== -1) {
        expertise.splice(expertise.indexOf(event.target.id), 1);
      }
    }
    localStorage.setItem('expertise', JSON.stringify(expertise));
    if (JSON.parse(localStorage.getItem('expertise')).length === expertiseLimit) {
      $('#error').fadeOut();
      sidenav();
      next.href = 'language.php';
      nextArrow();
    } else {
      sidenav();
      next.removeAttribute('href');
      nextArrowRemove();
    }
  });
}