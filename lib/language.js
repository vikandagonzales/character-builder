if (document.querySelector('#character-language') !== null) {
  document.querySelector('#nav-proficiencies').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  if (JSON.parse(localStorage.getItem('class')) === 'rogue') {
    back.href = 'expertise.php';
  } else {
    back.href = 'tool.php';
  }
  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'dwarf':
      if (document.querySelector('#language-given').innerHTML === '') {
        document.querySelector('#language-given').innerHTML = 2;
      } else {
        document.querySelector('#language-given').innerHTML = parseInt(document.querySelector('#language-given').innerHTML) + 2;
      }
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
      if (document.querySelector('#language-given').innerHTML === '') {
        document.querySelector('#language-given').innerHTML = 2;
      } else {
        document.querySelector('#language-given').innerHTML = parseInt(document.querySelector('#language-given').innerHTML) + 2;
      }
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
      if (document.querySelector('#language-number').innerHTML === '') {
        document.querySelector('#language-number').innerHTML = 1;
      } else {
        document.querySelector('#language-number').innerHTML = parseInt(document.querySelector('#language-number').innerHTML) + 1;
      }
      if (JSON.parse(localStorage.getItem('subrace')) === 'high') {
        if (document.querySelector('#language-number').innerHTML === '') {
          document.querySelector('#language-number').innerHTML = 1;
        } else {
          document.querySelector('#language-number').innerHTML = parseInt(document.querySelector('#language-number').innerHTML) + 1;
        }
      }
      break;
    case 'human':
      if (document.querySelector('#language-given').innerHTML === '') {
        document.querySelector('#language-given').innerHTML = 1;
      } else {
        document.querySelector('#language-given').innerHTML = parseInt(document.querySelector('#language-given').innerHTML) + 1;
      }
      document.querySelector('div[data-language=common]').classList.remove('hide');
      document.querySelector('#common').classList.add('has-background-color');
      document.querySelector('#common').classList.add('is-primary');
      document.querySelector('#common').disabled = true;
      document.querySelector('#common').checked = 'checked';
      if (document.querySelector('#language-number').innerHTML === '') {
        document.querySelector('#language-number').innerHTML = 1;
      } else {
        document.querySelector('#language-number').innerHTML = parseInt(document.querySelector('#language-number').innerHTML) + 1;
      }
      break;
    default:
  }
  switch (JSON.parse(localStorage.getItem('background'))) {
    case 'acolyte':
      if (document.querySelector('#language-number').innerHTML === '') {
        document.querySelector('#language-number').innerHTML = 2;
      } else {
        document.querySelector('#language-number').innerHTML = parseInt(document.querySelector('#language-number').innerHTML) + 2;
      }
      break;
    default:
  }
  if (document.querySelector('#language-number').innerHTML !== '') {
    $('#language-additional').removeClass('hide');
    $('div[data-language]').removeClass('hide');
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
  languageLimit = (parseInt(document.querySelector('#language-number').innerHTML) || 0) + (parseInt(document.querySelector('#language-given').innerHTML) || 0);
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