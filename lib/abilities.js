if (document.querySelector('#character-abilities') !== null) {
  document.querySelector('#points').innerHTML = points;
  document.querySelector('#nav-abilities').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  back.href = 'language.php';
  if (JSON.parse(localStorage.getItem('abilities'))) {
    document.querySelectorAll('input')[0].value = JSON.parse(localStorage.getItem('abilities')).str;
    document.querySelectorAll('input')[1].value = JSON.parse(localStorage.getItem('abilities')).dex;
    document.querySelectorAll('input')[2].value = JSON.parse(localStorage.getItem('abilities')).con;
    document.querySelectorAll('input')[3].value = JSON.parse(localStorage.getItem('abilities')).int;
    document.querySelectorAll('input')[4].value = JSON.parse(localStorage.getItem('abilities')).wis;
    document.querySelectorAll('input')[5].value = JSON.parse(localStorage.getItem('abilities')).cha;
  }
  if (JSON.parse(localStorage.getItem('points')) !== null) {
    document.querySelector('#points').innerHTML = JSON.parse(localStorage.getItem('points'));
  } else {
    document.querySelector('#points').innerHTML = 27;
  }
  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'dwarf':
      switch (JSON.parse(localStorage.getItem('subrace'))) {
        case 'hill':
          document.querySelector('#constitution span[data-ability=bonus]').innerHTML = '+2';
          document.querySelector('#wisdom span[data-ability=bonus]').innerHTML = '+1';
          break;
        case 'mountain':
          document.querySelector('#strength span[data-ability=bonus]').innerHTML = '+2';
          document.querySelector('#constitution span[data-ability=bonus]').innerHTML = '+2';
          break;
        default:
      }
      break;
    case 'elf':
      switch (JSON.parse(localStorage.getItem('subrace'))) {
        case 'high':
          document.querySelector('#dexterity span[data-ability=bonus]').innerHTML = '+2';
          document.querySelector('#intelligence span[data-ability=bonus]').innerHTML = '+1';
          break;
        case 'wood':
          document.querySelector('#dexterity span[data-ability=bonus]').innerHTML = '+2';
          document.querySelector('#wisdom span[data-ability=bonus]').innerHTML = '+1';
          break;
        default:
      }
      break;
    case 'human':
      document.querySelector('#strength span[data-ability=bonus]').innerHTML = '+1';
      document.querySelector('#dexterity span[data-ability=bonus]').innerHTML = '+1';
      document.querySelector('#constitution span[data-ability=bonus]').innerHTML = '+1';
      document.querySelector('#intelligence span[data-ability=bonus]').innerHTML = '+1';
      document.querySelector('#wisdom span[data-ability=bonus]').innerHTML = '+1';
      document.querySelector('#charisma span[data-ability=bonus]').innerHTML = '+1';
      break;
    default:
  }
  document.querySelector('#strength span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[0].value) + parseInt(document.querySelector('#strength span[data-ability=bonus]').innerHTML);
  document.querySelector('#dexterity span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[1].value) + parseInt(document.querySelector('#dexterity span[data-ability=bonus]').innerHTML);
  document.querySelector('#constitution span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[2].value) + parseInt(document.querySelector('#constitution span[data-ability=bonus]').innerHTML);
  document.querySelector('#intelligence span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[3].value) + parseInt(document.querySelector('#intelligence span[data-ability=bonus]').innerHTML);
  document.querySelector('#wisdom span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[4].value) + parseInt(document.querySelector('#wisdom span[data-ability=bonus]').innerHTML);
  document.querySelector('#charisma span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[5].value) + parseInt(document.querySelector('#charisma span[data-ability=bonus]').innerHTML);
  for (var i = 0; i < document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('span[data-ability=mod]')[i].innerHTML = Math.floor((parseInt(document.querySelectorAll('input')[i].value) - 10) / 2);
    switch (parseInt(document.querySelectorAll('input')[i].value)) {
      case 8 || 9:
        document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 1;
        break;
      case 10:
        document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 2;
        break;
      case 11:
        document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 3;
        break;
      case 12:
        document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 4;
        break;
      case 13:
        document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 5;
        break;
      case 14:
        document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 7;
        break;
      case 15:
        document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 9;
        break;
      default:
    }
  }
  if (parseInt(document.querySelector('#points').innerHTML) < 1) {
    for (var j = 0; j < document.querySelectorAll('input').length; j++) {
      document.querySelectorAll('input')[j].max = parseInt(document.querySelectorAll('input')[j].value);
    }
  }
  for (var i = 0; i < document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].addEventListener('change', function (event) {
      var p = [0, 1, 2, 3, 4, 5, 7, 9];
      var str = parseInt(document.querySelectorAll('input')[0].value);
      var dex = parseInt(document.querySelectorAll('input')[1].value);
      var con = parseInt(document.querySelectorAll('input')[2].value);
      var int = parseInt(document.querySelectorAll('input')[3].value);
      var wis = parseInt(document.querySelectorAll('input')[4].value);
      var cha = parseInt(document.querySelectorAll('input')[5].value);
      var available = 27;
      document.querySelector('#points').innerHTML = available - (p[str - 8] + p[dex - 8] + p[con - 8] + p[int - 8] + p[wis - 8] + p[cha - 8]);
      for (var j = 0; j < document.querySelectorAll('input').length; j++) {
        if (parseInt(document.querySelectorAll('input')[j].value) >= 13 && parseInt(document.querySelector('#points').innerHTML) === 1) {
          document.querySelectorAll('input')[j].max = 13;
        } else {
          document.querySelectorAll('input')[j].max = 15;
        }
      }
      if (parseInt(document.querySelector('#points').innerHTML) < 1) {
        for (var j = 0; j < document.querySelectorAll('input').length; j++) {
          document.querySelectorAll('input')[j].max = parseInt(document.querySelectorAll('input')[j].value);
        }
      }
      document.querySelector('#strength span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[0].value) + parseInt(document.querySelector('#strength span[data-ability=bonus]').innerHTML);
      document.querySelector('#dexterity span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[1].value) + parseInt(document.querySelector('#dexterity span[data-ability=bonus]').innerHTML);
      document.querySelector('#constitution span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[2].value) + parseInt(document.querySelector('#constitution span[data-ability=bonus]').innerHTML);
      document.querySelector('#intelligence span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[3].value) + parseInt(document.querySelector('#intelligence span[data-ability=bonus]').innerHTML);
      document.querySelector('#wisdom span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[4].value) + parseInt(document.querySelector('#wisdom span[data-ability=bonus]').innerHTML);
      document.querySelector('#charisma span[data-ability=score]').innerHTML = parseInt(document.querySelectorAll('input')[5].value) + parseInt(document.querySelector('#charisma span[data-ability=bonus]').innerHTML);
      for (var i = 0; i < document.querySelectorAll('input').length; i++) {
        document.querySelectorAll('span[data-ability=mod]')[i].innerHTML = Math.floor((parseInt(document.querySelectorAll('span[data-ability=score]')[i].innerHTML) - 10) / 2);
        switch (parseInt(document.querySelectorAll('input')[i].value)) {
          case 8 || 9:
            document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 1;
            break;
          case 10:
            document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 2;
            break;
          case 11:
            document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 3;
            break;
          case 12:
            document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 4;
            break;
          case 13:
            document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 5;
            break;
          case 14:
            document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 7;
            break;
          case 15:
            document.querySelectorAll('span[data-ability=cost]')[i].innerHTML = 9;
            break;
          default:
        }
      }
      abilities.str = parseInt(document.querySelectorAll('input')[0].value);
      abilities.dex = parseInt(document.querySelectorAll('input')[1].value);
      abilities.con = parseInt(document.querySelectorAll('input')[2].value);
      abilities.int = parseInt(document.querySelectorAll('input')[3].value);
      abilities.wis = parseInt(document.querySelectorAll('input')[4].value);
      abilities.cha = parseInt(document.querySelectorAll('input')[5].value);
      mods.str = parseInt(document.querySelectorAll('span[data-ability=mod]')[0].innerHTML);
      mods.dex = parseInt(document.querySelectorAll('span[data-ability=mod]')[1].innerHTML);
      mods.con = parseInt(document.querySelectorAll('span[data-ability=mod]')[2].innerHTML);
      mods.int = parseInt(document.querySelectorAll('span[data-ability=mod]')[3].innerHTML);
      mods.wis = parseInt(document.querySelectorAll('span[data-ability=mod]')[4].innerHTML);
      mods.cha = parseInt(document.querySelectorAll('span[data-ability=mod]')[5].innerHTML);
      scores.str = parseInt(document.querySelectorAll('span[data-ability=score]')[0].innerHTML);
      scores.dex = parseInt(document.querySelectorAll('span[data-ability=score]')[1].innerHTML);
      scores.con = parseInt(document.querySelectorAll('span[data-ability=score]')[2].innerHTML);
      scores.int = parseInt(document.querySelectorAll('span[data-ability=score]')[3].innerHTML);
      scores.wis = parseInt(document.querySelectorAll('span[data-ability=score]')[4].innerHTML);
      scores.cha = parseInt(document.querySelectorAll('span[data-ability=score]')[5].innerHTML);
      points = parseInt(document.querySelector('#points').innerHTML);
      localStorage.setItem('abilities', JSON.stringify(abilities));
      localStorage.setItem('points', JSON.stringify(points));
      localStorage.setItem('mods', JSON.stringify(mods));
      localStorage.setItem('scores', JSON.stringify(scores));
      if (JSON.parse(localStorage.getItem('points')) === 0) {
        $('#error').fadeOut();
        next.href = 'name.php';
        nextArrow();
      } else {
        next.removeAttribute('href');
        nextArrowRemove();
      }
      sidenav();
    });
  }
  $('input').keydown(function (event) {
    event.preventDefault();
  });
  if (JSON.parse(localStorage.getItem('points')) === 0) {
    $('#error').fadeOut();
    sidenav();
    next.href = 'name.php';
    nextArrow();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('points')) !== 0) {
      $('#error').fadeIn();
    }
  });
}