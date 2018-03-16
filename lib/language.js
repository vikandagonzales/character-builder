if (document.querySelector('#character-language') !== null) {
  document.querySelector('#nav-proficiencies').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  if (JSON.parse(localStorage.getItem('class')) === 'rogue') {
    back.href = 'expertise.php';
  } else {
    back.href = 'tool.php';
  }
  document.querySelector('#language-given').innerHTML = languageGiven;
  if (languageNumber) {
    document.querySelector('#language-number').innerHTML = languageNumber;
    $('#language-additional').removeClass('hide');
    $('div[data-language]').removeClass('hide');
  }
  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'dwarf':
      document.querySelector('div[data-language=common]').classList.remove('hide');
      document.querySelector('#common').classList.add('has-background-color');
      document.querySelector('#common').classList.add('is-primary');
      document.querySelector('#common').disabled = true;
      document.querySelector('#common').checked = 'checked';
      document.querySelector('div[data-language=dwarvish]').classList.remove('hide');
      document.querySelector('#dwarvish').classList.add('has-background-color');
      document.querySelector('#dwarvish').classList.add('is-primary');
      document.querySelector('#dwarvish').disabled = true;
      document.querySelector('#dwarvish').checked = 'checked';
      break;
    case 'elf':
      document.querySelector('div[data-language=common]').classList.remove('hide');
      document.querySelector('#common').classList.add('has-background-color');
      document.querySelector('#common').classList.add('is-primary');
      document.querySelector('#common').disabled = true;
      document.querySelector('#common').checked = 'checked';
      document.querySelector('div[data-language=elvish]').classList.remove('hide');
      document.querySelector('#elvish').classList.add('has-background-color');
      document.querySelector('#elvish').classList.add('is-primary');
      document.querySelector('#elvish').disabled = true;
      document.querySelector('#elvish').checked = 'checked';
      break;
    case 'human':
      document.querySelector('div[data-language=common]').classList.remove('hide');
      document.querySelector('#common').classList.add('has-background-color');
      document.querySelector('#common').classList.add('is-primary');
      document.querySelector('#common').disabled = true;
      document.querySelector('#common').checked = 'checked';
      break;
    default:
  }
  $('#instructions').fadeIn();
  language = JSON.parse(localStorage.getItem('language')) || [];
  for (var i = 0; i < document.querySelectorAll('input[name=language]:checked').length; i++) {
    if (!language.includes(document.querySelectorAll('input[name=language]:checked')[i].id)) {
      language.push(document.querySelectorAll('input[name=language]:checked')[i].id);
      localStorage.setItem('language', JSON.stringify(language));
    }
  }
  for (var i = 0; i < inputs.length; i++) {
    if (language.indexOf(inputs[i].id) !== -1) {
      inputs[i].checked = true;
    }
  }
  localStorage.setItem('language', JSON.stringify(language));
  if (JSON.parse(localStorage.getItem('language')).length === languageLimit) {
    $('#error').fadeOut();
    sidenav();
    next.href = 'abilities.php';
    nextArrow();
  } else {
    sidenav();
    next.removeAttribute('href');
    nextArrowRemove();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('language')).length !== languageLimit) {
      $('#error').fadeIn();
    }
  });
  $('input[name=language]').on('change', function (event) {
    if ($('input[name=language]:checked').length > languageLimit) {
      event.target.checked = false;
    }
    if (event.target.checked) {
      language.push(event.target.id);
    } else {
      if (language.indexOf(event.target.id) !== -1) {
        language.splice(language.indexOf(event.target.id), 1);
      }
    }
    localStorage.setItem('language', JSON.stringify(language));
    if (JSON.parse(localStorage.getItem('language')).length === languageLimit) {
      $('#error').fadeOut();
      sidenav();
      next.href = 'abilities.php';
      nextArrow();
    } else {
      sidenav();
      next.removeAttribute('href');
      nextArrowRemove();
    }
  });
}