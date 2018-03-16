if (document.querySelector('#character-summary') !== null) {
  document.querySelector('#nav-summary').classList.add('is-active');

  document.querySelector('#character-title h1').innerHTML = JSON.parse(localStorage.getItem('name'));
  document.querySelector('#str-mod').innerHTML = JSON.parse(localStorage.getItem('mods')).str;
  document.querySelector('#str').innerHTML = JSON.parse(localStorage.getItem('scores')).str;
  document.querySelector('#dex-mod').innerHTML = JSON.parse(localStorage.getItem('mods')).dex;
  document.querySelector('#dex').innerHTML = JSON.parse(localStorage.getItem('scores')).dex;
  document.querySelector('#con-mod').innerHTML = JSON.parse(localStorage.getItem('mods')).con;
  document.querySelector('#con').innerHTML = JSON.parse(localStorage.getItem('scores')).con;
  document.querySelector('#int-mod').innerHTML = JSON.parse(localStorage.getItem('mods')).int;
  document.querySelector('#int').innerHTML = JSON.parse(localStorage.getItem('scores')).int;
  document.querySelector('#wis-mod').innerHTML = JSON.parse(localStorage.getItem('mods')).wis;
  document.querySelector('#wis').innerHTML = JSON.parse(localStorage.getItem('scores')).wis;
  document.querySelector('#cha-mod').innerHTML = JSON.parse(localStorage.getItem('mods')).cha;
  document.querySelector('#cha').innerHTML = JSON.parse(localStorage.getItem('scores')).cha;

  if (JSON.parse(localStorage.getItem('level')) <= 4) {
    document.querySelector('#prof-bonus').innerHTML = 2;
  } else if (JSON.parse(localStorage.getItem('level')) > 4 && JSON.parse(localStorage.getItem('level')) <= 8) {
    document.querySelector('#prof-bonus').innerHTML = 3;
  } else if (JSON.parse(localStorage.getItem('level')) > 8 && JSON.parse(localStorage.getItem('level')) <= 12) {
    document.querySelector('#prof-bonus').innerHTML = 4;
  } else if (JSON.parse(localStorage.getItem('level')) > 12 && JSON.parse(localStorage.getItem('level')) <= 16) {
    document.querySelector('#prof-bonus').innerHTML = 5;
  } else if (JSON.parse(localStorage.getItem('level')) > 16) {
    document.querySelector('#prof-bonus').innerHTML = 6;
  }

  if (JSON.parse(localStorage.getItem('subrace')) !== 'n/a') {
    document.querySelector('#race').innerHTML = JSON.parse(localStorage.getItem('subrace')).replace(/-/g, ' ') + ' ' + JSON.parse(localStorage.getItem('race')).replace(/-/g, ' ');
  } else {
    document.querySelector('#race').innerHTML = JSON.parse(localStorage.getItem('race')).replace(/-/g, ' ');
  }
  document.querySelector('#level').innerHTML = JSON.parse(localStorage.getItem('level'));
  document.querySelector('#class').innerHTML = JSON.parse(localStorage.getItem('class')).replace(/-/g, ' ');
  document.querySelector('#subclass').innerHTML = JSON.parse(localStorage.getItem('subclass')).replace(/-/g, ' ');
  document.querySelector('#background').innerHTML = JSON.parse(localStorage.getItem('background')).replace(/-/g, ' ');
  document.querySelector('#alignment').innerHTML = JSON.parse(localStorage.getItem('alignment')).replace(/-/g, ' ');

  document.querySelector('#passive-wisdom').innerHTML = 10 + parseInt(JSON.parse(localStorage.getItem('mods')).wis);
  document.querySelector('#ac').innerHTML = 10 + parseInt(JSON.parse(localStorage.getItem('mods')).dex);
  document.querySelector('#initiative').innerHTML = JSON.parse(localStorage.getItem('mods')).dex;

  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'dwarf':
      document.querySelector('#speed').innerHTML = 25;
      break;
    default:
      document.querySelector('#speed').innerHTML = 30;
  }

  document.querySelector('label[for=saving-str] span').innerHTML = JSON.parse(localStorage.getItem('mods')).str;
  document.querySelector('label[for=saving-dex] span').innerHTML = JSON.parse(localStorage.getItem('mods')).dex;
  document.querySelector('label[for=saving-con] span').innerHTML = JSON.parse(localStorage.getItem('mods')).con;
  document.querySelector('label[for=saving-int] span').innerHTML = JSON.parse(localStorage.getItem('mods')).int;
  document.querySelector('label[for=saving-wis] span').innerHTML = JSON.parse(localStorage.getItem('mods')).wis;
  document.querySelector('label[for=saving-cha] span').innerHTML = JSON.parse(localStorage.getItem('mods')).cha;
  document.querySelector('label[for=acrobatics] span').innerHTML = JSON.parse(localStorage.getItem('mods')).dex;
  document.querySelector('label[for=animal-handling] span').innerHTML = JSON.parse(localStorage.getItem('mods')).wis;
  document.querySelector('label[for=arcana] span').innerHTML = JSON.parse(localStorage.getItem('mods')).int;
  document.querySelector('label[for=athletics] span').innerHTML = JSON.parse(localStorage.getItem('mods')).str;
  document.querySelector('label[for=deception] span').innerHTML = JSON.parse(localStorage.getItem('mods')).cha;
  document.querySelector('label[for=history] span').innerHTML = JSON.parse(localStorage.getItem('mods')).int;
  document.querySelector('label[for=insight] span').innerHTML = JSON.parse(localStorage.getItem('mods')).wis;
  document.querySelector('label[for=intimidation] span').innerHTML = JSON.parse(localStorage.getItem('mods')).cha;
  document.querySelector('label[for=investigation] span').innerHTML = JSON.parse(localStorage.getItem('mods')).int;
  document.querySelector('label[for=medicine] span').innerHTML = JSON.parse(localStorage.getItem('mods')).wis;
  document.querySelector('label[for=nature] span').innerHTML = JSON.parse(localStorage.getItem('mods')).int;
  document.querySelector('label[for=perception] span').innerHTML = JSON.parse(localStorage.getItem('mods')).wis;
  document.querySelector('label[for=performance] span').innerHTML = JSON.parse(localStorage.getItem('mods')).cha;
  document.querySelector('label[for=persuasion] span').innerHTML = JSON.parse(localStorage.getItem('mods')).cha;
  document.querySelector('label[for=religion] span').innerHTML = JSON.parse(localStorage.getItem('mods')).int;
  document.querySelector('label[for=sleight-of-hand] span').innerHTML = JSON.parse(localStorage.getItem('mods')).dex;
  document.querySelector('label[for=stealth] span').innerHTML = JSON.parse(localStorage.getItem('mods')).dex;
  document.querySelector('label[for=survival] span').innerHTML = JSON.parse(localStorage.getItem('mods')).wis;

  switch (JSON.parse(localStorage.getItem('class'))) {
    case 'druid':
      document.querySelector('#hp').innerHTML = 8 + 5 * (parseInt(JSON.parse(localStorage.getItem('level'))) - 1) + parseInt(JSON.parse(localStorage.getItem('mods')).con) * parseInt(JSON.parse(localStorage.getItem('level')));
      document.querySelector('#hd').innerHTML = '1d8';
      document.querySelector('input[id=saving-int]').checked = 'checked';
      document.querySelector('input[id=saving-wis]').checked = 'checked';
      document.querySelector('label[for=saving-int] span').innerHTML = parseInt(document.querySelector('label[for=saving-int] span').innerHTML) + parseInt(document.querySelector('#prof-bonus').innerHTML);
      document.querySelector('label[for=saving-wis] span').innerHTML = parseInt(document.querySelector('label[for=saving-wis] span').innerHTML) + parseInt(document.querySelector('#prof-bonus').innerHTML);
      break;
    case 'paladin':
      document.querySelector('#hp').innerHTML = 8 + 6 * (parseInt(JSON.parse(localStorage.getItem('level'))) - 1) + parseInt(JSON.parse(localStorage.getItem('mods')).con) * parseInt(JSON.parse(localStorage.getItem('level')));
      document.querySelector('#hd').innerHTML = '1d10';
      document.querySelector('input[id=saving-wis]').checked = 'checked';
      document.querySelector('input[id=saving-cha]').checked = 'checked';
      document.querySelector('label[for=saving-wis] span').innerHTML = parseInt(document.querySelector('label[for=saving-wis] span').innerHTML) + parseInt(document.querySelector('#prof-bonus').innerHTML);
      document.querySelector('label[for=saving-cha] span').innerHTML = parseInt(document.querySelector('label[for=saving-cha] span').innerHTML) + parseInt(document.querySelector('#prof-bonus').innerHTML);
      break;
    case 'rogue':
      document.querySelector('#hp').innerHTML = 8 + 5 * (parseInt(JSON.parse(localStorage.getItem('level'))) - 1) + parseInt(JSON.parse(localStorage.getItem('mods')).con) * parseInt(JSON.parse(localStorage.getItem('level')));
      document.querySelector('#hd').innerHTML = '1d8';
      document.querySelector('input[id=saving-dex]').checked = 'checked';
      document.querySelector('input[id=saving-int]').checked = 'checked';
      document.querySelector('label[for=saving-dex] span').innerHTML = parseInt(document.querySelector('label[for=saving-dex] span').innerHTML) + parseInt(document.querySelector('#prof-bonus').innerHTML);
      document.querySelector('label[for=saving-int] span').innerHTML = parseInt(document.querySelector('label[for=saving-int] span').innerHTML) + parseInt(document.querySelector('#prof-bonus').innerHTML);
      break;
    default:
  }

  for (var i = 0; i < JSON.parse(localStorage.getItem('skill')).length; i++) {
    for (var j = 0; j < document.querySelectorAll('input[name=skill]').length; j++) {
      if (JSON.parse(localStorage.getItem('skill'))[i] === document.querySelectorAll('input[name=skill]')[j].id) {
        document.querySelectorAll('input[name=skill]')[j].checked = 'checked';
        document.querySelectorAll('input[name=skill]')[j].nextElementSibling.firstElementChild.innerHTML = parseInt(document.querySelectorAll('input[name=skill]')[j].nextElementSibling.firstElementChild.innerHTML) + parseInt(document.querySelector('#prof-bonus').innerHTML);
      }
    }
  }

  for (var i = 0; i < JSON.parse(localStorage.getItem('tool')).length; i++) {
    addTool = document.createElement('li');
    addTool.innerHTML = JSON.parse(localStorage.getItem('tool'))[i].replace(/-/g, ' ');
    document.querySelector('#tool').appendChild(addTool);
  }
  for (var i = 0; i < JSON.parse(localStorage.getItem('artisan')).length; i++) {
    addTool = document.createElement('li');
    addTool.innerHTML = JSON.parse(localStorage.getItem('artisan'))[i].replace(/-/g, ' ');
    document.querySelector('#tool').appendChild(addTool);
  }
  for (var i = 0; i < JSON.parse(localStorage.getItem('gaming')).length; i++) {
    addTool = document.createElement('li');
    addTool.innerHTML = JSON.parse(localStorage.getItem('gaming'))[i].replace(/-/g, ' ');
    document.querySelector('#tool').appendChild(addTool);
  }
  for (var i = 0; i < JSON.parse(localStorage.getItem('music')).length; i++) {
    addTool = document.createElement('li');
    addTool.innerHTML = JSON.parse(localStorage.getItem('music'))[i].replace(/-/g, ' ');
    document.querySelector('#tool').appendChild(addTool);
  }
  for (var i = 0; i < JSON.parse(localStorage.getItem('language')).length; i++) {
    addLanguage = document.createElement('li');
    addLanguage.innerHTML = JSON.parse(localStorage.getItem('language'))[i].replace(/-/g, ' ');
    document.querySelector('#language').appendChild(addLanguage);
  }
}