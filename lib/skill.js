if (document.querySelector('#character-skill') !== null) {
  document.querySelector('#nav-proficiencies').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  back.href = 'background.php';
  switch (JSON.parse(localStorage.getItem('class'))) {
    case 'druid':
      document.querySelector('#skill-number').innerHTML = '2';
      document.querySelector('div[data-skill=arcana]').classList.remove('hide');
      document.querySelector('div[data-skill=animal-handling]').classList.remove('hide');
      document.querySelector('div[data-skill=insight]').classList.remove('hide');
      document.querySelector('div[data-skill=medicine]').classList.remove('hide');
      document.querySelector('div[data-skill=nature]').classList.remove('hide');
      document.querySelector('div[data-skill=perception]').classList.remove('hide');
      document.querySelector('div[data-skill=religion]').classList.remove('hide');
      document.querySelector('div[data-skill=survival]').classList.remove('hide');
      break;
    case 'paladin':
      document.querySelector('#skill-number').innerHTML = '2';
      document.querySelector('div[data-skill=athletics]').classList.remove('hide');
      document.querySelector('div[data-skill=insight]').classList.remove('hide');
      document.querySelector('div[data-skill=intimidation]').classList.remove('hide');
      document.querySelector('div[data-skill=medicine]').classList.remove('hide');
      document.querySelector('div[data-skill=persuasion]').classList.remove('hide');
      document.querySelector('div[data-skill=religion]').classList.remove('hide');
      break;
    case 'rogue':
      document.querySelector('#skill-number').innerHTML = '4';
      document.querySelector('div[data-skill=acrobatics]').classList.remove('hide');
      document.querySelector('div[data-skill=athletics]').classList.remove('hide');
      document.querySelector('div[data-skill=deception]').classList.remove('hide');
      document.querySelector('div[data-skill=insight]').classList.remove('hide');
      document.querySelector('div[data-skill=intimidation]').classList.remove('hide');
      document.querySelector('div[data-skill=investigation]').classList.remove('hide');
      document.querySelector('div[data-skill=perception]').classList.remove('hide');
      document.querySelector('div[data-skill=performance]').classList.remove('hide');
      document.querySelector('div[data-skill=persuasion]').classList.remove('hide');
      document.querySelector('div[data-skill=sleight-of-hand]').classList.remove('hide');
      document.querySelector('div[data-skill=stealth]').classList.remove('hide');
      break;
    default:
  }
  switch (JSON.parse(localStorage.getItem('background'))) {
    case 'acolyte':
      document.querySelector('#skill-addition').classList.remove('hide');
      if (document.querySelector('#skill-given').innerHTML === '') {
        document.querySelector('#skill-given').innerHTML = 2;
      } else {
        document.querySelector('#skill-given').innerHTML = parseInt(document.querySelector('#skill-given').innerHTML) + 2;
      }
      document.querySelector('div[data-skill=insight]').classList.remove('hide');
      document.querySelector('#insight').classList.add('has-background-color');
      document.querySelector('#insight').classList.add('is-primary');
      document.querySelector('#insight').disabled = true;
      document.querySelector('#insight').checked = 'checked';
      document.querySelector('div[data-skill=religion]').classList.remove('hide');
      document.querySelector('#religion').classList.add('has-background-color');
      document.querySelector('#religion').classList.add('is-primary');
      document.querySelector('#religion').disabled = true;
      document.querySelector('#religion').checked = 'checked';
      break;
    case 'charlatan':
      document.querySelector('#skill-addition').classList.remove('hide');
      if (document.querySelector('#skill-given').innerHTML === '') {
        document.querySelector('#skill-given').innerHTML = 2;
      } else {
        document.querySelector('#skill-given').innerHTML = parseInt(document.querySelector('#skill-given').innerHTML) + 2;
      }
      document.querySelector('div[data-skill=deception]').classList.remove('hide');
      document.querySelector('#deception').classList.add('has-background-color');
      document.querySelector('#deception').classList.add('is-primary');
      document.querySelector('#deception').disabled = true;
      document.querySelector('#deception').checked = 'checked';
      document.querySelector('div[data-skill=sleight-of-hand]').classList.remove('hide');
      document.querySelector('#sleight-of-hand').classList.add('has-background-color');
      document.querySelector('#sleight-of-hand').classList.add('is-primary');
      document.querySelector('#sleight-of-hand').disabled = true;
      document.querySelector('#sleight-of-hand').checked = 'checked';
      break;
    case 'criminal':
      document.querySelector('#skill-addition').classList.remove('hide');
      if (document.querySelector('#skill-given').innerHTML === '') {
        document.querySelector('#skill-given').innerHTML = 2;
      } else {
        document.querySelector('#skill-given').innerHTML = parseInt(document.querySelector('#skill-given').innerHTML) + 2;
      }
      document.querySelector('div[data-skill=deception]').classList.remove('hide');
      document.querySelector('#deception').classList.add('has-background-color');
      document.querySelector('#deception').classList.add('is-primary');
      document.querySelector('#deception').disabled = true;
      document.querySelector('#deception').checked = 'checked';
      document.querySelector('div[data-skill=stealth]').classList.remove('hide');
      document.querySelector('#stealth').classList.add('has-background-color');
      document.querySelector('#stealth').classList.add('is-primary');
      document.querySelector('#stealth').disabled = true;
      document.querySelector('#stealth').checked = 'checked';
      break;
    default:
  }
  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'elf':
      document.querySelector('#skill-addition').classList.remove('hide');
      if (document.querySelector('#skill-given').innerHTML === '') {
        document.querySelector('#skill-given').innerHTML = 1;
      } else {
        document.querySelector('#skill-given').innerHTML = parseInt(document.querySelector('#skill-given').innerHTML) + 1;
      }
      document.querySelector('div[data-skill=perception]').classList.remove('hide');
      document.querySelector('#perception').classList.add('has-background-color');
      document.querySelector('#perception').classList.add('is-primary');
      document.querySelector('#perception').disabled = true;
      document.querySelector('#perception').checked = 'checked';
      break;
    default:
  }
  $('#instructions').fadeIn();
  skill = JSON.parse(localStorage.getItem('skill')) || [];
  for (var i = 0; i < document.querySelectorAll('input[name=skill]:checked').length; i++) {
    if (!skill.includes(document.querySelectorAll('input[name=skill]:checked')[i].id)) {
      skill.push(document.querySelectorAll('input[name=skill]:checked')[i].id);
      localStorage.setItem('skill', JSON.stringify(skill));
    }
  }
  for (var i = 0; i < inputs.length; i++) {
    if (skill.indexOf(inputs[i].id) !== -1) {
      inputs[i].checked = true;
    }
  }
  skillLimit = (parseInt(document.querySelector('#skill-number').innerHTML) || 0) + (parseInt(document.querySelector('#skill-given').innerHTML) || 0);
  localStorage.setItem('skill', JSON.stringify(skill));
  if (JSON.parse(localStorage.getItem('skill')).length === skillLimit) {
    $('#error').fadeOut();
    sidenav();
    next.href = 'tool.php';
    nextArrow();
  } else {
    sidenav();
    next.removeAttribute('href');
    nextArrowRemove();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('skill')).length !== skillLimit) {
      $('#error').fadeIn();
    }
  });
  $('input[name=skill]').on('change', function (event) {
    if ($('input[name=skill]:checked').length > skillLimit) {
      event.target.checked = false;
    }
    if (event.target.checked) {
      skill.push(event.target.id);
    } else {
      if (skill.indexOf(event.target.id) !== -1) {
        skill.splice(skill.indexOf(event.target.id), 1);
      }
    }
    localStorage.setItem('skill', JSON.stringify(skill));
    if (JSON.parse(localStorage.getItem('skill')).length === skillLimit) {
      $('#error').fadeOut();
      sidenav();
      next.href = 'tool.php';
      nextArrow();
    } else {
      sidenav();
      next.removeAttribute('href');
      nextArrowRemove();
    }
  });
}