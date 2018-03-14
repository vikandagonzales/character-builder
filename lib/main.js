// ===== Mobile Menu =====
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// ===== Scroll to Top =====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $('#return').fadeIn(500);
  } else {
    $('#return').fadeOut(500);
  }
});

$('#return').click(function () {
  $('body,html').animate({ scrollTop: 0 }, 500);
});

// ===== Scroll Smoothing =====
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('nav').height()
        }, 500);
        return false;
      }
    }
  });
});

// ===== Character Option Pages =====

var arrows = document.querySelector('#arrows');
var back = document.querySelector('#back');
var next = document.querySelector('#next');
var error = document.querySelector('#error');
var inputs = document.querySelectorAll('input');

var selected;
var skill = [];

document.addEventListener('DOMContentLoaded', function () {

  function sidenav() {
    if (JSON.parse(localStorage.getItem('race')) !== null && JSON.parse(localStorage.getItem('subrace')) !== null) {
      $('#nav-race span[data-id=times]').hide();
      $('#nav-race span[data-id=check]').fadeIn();
    } else {
      $('#nav-race span[data-id=times]').fadeIn();
      $('#nav-race span[data-id=check]').hide();
    }
    if (JSON.parse(localStorage.getItem('level')) !== null) {
      $('#nav-level span[data-id=times]').hide();
      $('#nav-level span[data-id=check]').fadeIn();
      $('#nav-class').removeClass('disable');
      if (JSON.parse(localStorage.getItem('class')) !== null && JSON.parse(localStorage.getItem('subclass')) !== null) {
        $('#nav-class span[data-id=times]').hide();
        $('#nav-class span[data-id=check]').fadeIn();
        $('#nav-class span[data-id=lock]').hide();
      } else {
        $('#nav-class span[data-id=times]').fadeIn();
        $('#nav-class span[data-id=check]').hide();
        $('#nav-class span[data-id=lock]').hide();
      }
    } else {
      $('#nav-level span[data-id=times]').fadeIn();
      $('#nav-level span[data-id=check]').hide();
      $('#nav-class span[data-id=times]').hide();
      $('#nav-class span[data-id=check]').hide();
      $('#nav-class span[data-id=lock]').fadeIn();
      $('#nav-class').addClass('disable');
    }
    if (JSON.parse(localStorage.getItem('alignment')) !== null) {
      $('#nav-alignment span[data-id=times]').hide();
      $('#nav-alignment span[data-id=check]').fadeIn();
    } else {
      $('#nav-alignment span[data-id=times]').fadeIn();
      $('#nav-alignment span[data-id=check]').hide();
    }
    if (JSON.parse(localStorage.getItem('background')) !== null) {
      $('#nav-background span[data-id=times]').hide();
      $('#nav-background span[data-id=check]').fadeIn();
    } else {
      $('#nav-background span[data-id=times]').fadeIn();
      $('#nav-background span[data-id=check]').hide();
    }
    if (JSON.parse(localStorage.getItem('race')) !== null && JSON.parse(localStorage.getItem('subrace')) !== null && JSON.parse(localStorage.getItem('class')) !== null && JSON.parse(localStorage.getItem('subclass')) !== null && JSON.parse(localStorage.getItem('background')) !== null) {
      $('#nav-proficiencies').removeClass('disable');
      $('#nav-proficiencies span[data-id=times]').fadeIn();
      $('#nav-proficiencies span[data-id=check]').hide();
      $('#nav-proficiencies span[data-id=lock]').hide();
    } else {
      $('#nav-proficiencies span[data-id=times]').hide();
      $('#nav-proficiencies span[data-id=check]').hide();
      $('#nav-proficiencies span[data-id=lock]').fadeIn();
      $('#nav-proficiencies').addClass('disable');
    }
  }

  function nextArrow() {
    next.classList.remove('is-static');
    next.classList.add('is-primary');
    next.classList.add('is-outlined');
  }

  function nextArrowRemove() {
    next.classList.add('is-static');
    next.classList.remove('is-primary');
    next.classList.remove('is-outlined');
  }

  sidenav();

  // RACE

  if (document.querySelector('#character-race') !== null) {
    document.querySelector('#nav-race').classList.add('is-active');
    $('#next').removeClass('hide');
    if (JSON.parse(localStorage.getItem('race')) !== null) {
      selected = JSON.parse(localStorage.getItem('race'));
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === selected) {
          inputs[i].checked = true;
        }
      }
      if (JSON.parse(localStorage.getItem('subrace')) === 'n/a') {
        next.href = 'level.php';
      } else {
        next.href = 'subrace.php';
      }
      nextArrow();
    }
    next.addEventListener('click', function () {
      if (JSON.parse(localStorage.getItem('race')) === null) {
        $('#error').fadeIn();
      }
    });
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('click', function () {
        if (document.querySelector('input[name=race]:checked').value === 'human') {
          localStorage.setItem('subrace', JSON.stringify('n/a'));
          next.href = 'level.php';
        } else {
          localStorage.removeItem('subrace');
          next.href = 'subrace.php';
        }
        localStorage.setItem('race', JSON.stringify(document.querySelector('input[name=race]:checked').value));
        $('#error').fadeOut();
        sidenav();
        nextArrow();
      });
    }
  }

  // RACE > Subrace

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
      nextArrow();
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
        sidenav();
        next.href = 'level.php';
        nextArrow();
      });
    }
  }

  // LEVEL

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
      sidenav();
      next.href = 'class.php';
      nextArrow();
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
        sidenav();
        next.removeAttribute('href');
        nextArrowRemove();
      } else {
        localStorage.setItem('level', JSON.stringify(document.querySelector('#character-level input').value));
        if (parseInt(JSON.parse(localStorage.getItem('level'))) >= 3 && JSON.parse(localStorage.getItem('subclass')) === 'n/a') {
          localStorage.removeItem('subclass');
        }
        $('#error').fadeOut();
        sidenav();
        next.href = 'class.php';
        nextArrow();
      }
    });
    if (JSON.parse(localStorage.getItem('level')) !== null) {
      document.querySelector('#character-level input').value = JSON.parse(localStorage.getItem('level'));
      next.href = 'class.php';
      nextArrow();
    }
    next.addEventListener('click', function () {
      if (JSON.parse(localStorage.getItem('level')) === null) {
        $('#error').fadeIn();
      }
      if (parseInt(JSON.parse(localStorage.getItem('level'))) < 3) {
        localStorage.setItem('subclass', JSON.stringify('n/a'));
      }
    });
  }

  // CLASS

  if (document.querySelector('#character-class') !== null) {
    document.querySelector('#nav-class').classList.add('is-active');
    $('#back').removeClass('hide');
    $('#next').removeClass('hide');
    back.href = 'level.php';
    if (JSON.parse(localStorage.getItem('class')) !== null) {
      selected = JSON.parse(localStorage.getItem('class'));
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === selected) {
          inputs[i].checked = true;
        }
      }
      if (parseInt(JSON.parse(localStorage.getItem('level'))) < 3) {
        localStorage.setItem('subclass', JSON.stringify('n/a'));
        next.href = 'alignment.php';
      } else {
        next.href = 'subclass.php';
      }
      nextArrow();
    }
    next.addEventListener('click', function () {
      if (JSON.parse(localStorage.getItem('class')) === null) {
        $('#error').fadeIn();
      }
    });
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('click', function () {
        if (parseInt(JSON.parse(localStorage.getItem('level'))) < 3) {
          localStorage.setItem('subclass', JSON.stringify('n/a'));
          next.href = 'alignment.php';
        } else {
          localStorage.removeItem('subclass');
          next.href = 'subclass.php';
        }
        localStorage.setItem('class', JSON.stringify(document.querySelector('input[name=class]:checked').value));
        $('#error').fadeOut();
        sidenav();
        nextArrow();
      });
    }
  }

  // CLASS > Subclass

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
      nextArrow();
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
        sidenav();
        next.href = 'alignment.php';
        nextArrow();
      });
    }
  }

  // ALIGNMENT

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
      nextArrow();
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
        sidenav();
        next.href = 'background.php';
        nextArrow();
      });
    }
  }

  // BACKGROUND

  if (document.querySelector('#character-background') !== null) {
    document.querySelector('#nav-background').classList.add('is-active');
    $('#back').removeClass('hide');
    $('#next').removeClass('hide');
    back.href = 'alignment.php';
    if (JSON.parse(localStorage.getItem('background')) !== null) {
      selected = JSON.parse(localStorage.getItem('background'));
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === selected) {
          inputs[i].checked = true;
        }
      }
      next.href = 'skill.php';
      nextArrow();
    }
    next.addEventListener('click', function () {
      if (JSON.parse(localStorage.getItem('background')) === null) {
        $('#error').fadeIn();
      }
    });
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('click', function () {
        localStorage.setItem('background', JSON.stringify(document.querySelector('input[name=background]:checked').value));
        $('#error').fadeOut();
        sidenav();
        next.href = 'skill.php';
        nextArrow();
      });
    }
  }

  // PROFICIENCIES > Skill

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
    if (JSON.parse(localStorage.getItem('skill')) !== null) {
      skill = JSON.parse(localStorage.getItem('skill'));
      for (var i = 0; i < inputs.length; i++) {
        if (skill.indexOf(inputs[i].id) !== -1) {
          inputs[i].checked = true;
        }
      }
    }
    if (JSON.parse(localStorage.getItem('skill')).length === parseInt(document.querySelector('#skill-number').innerHTML)) {
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
      if (JSON.parse(localStorage.getItem('skill')).length !== parseInt(document.querySelector('#skill-number').innerHTML)) {
        $('#error').fadeIn();
      }
    });
    $('.is-checkradio').on('change', function (event) {
      if ($('.is-checkradio:checked').length > parseInt(document.querySelector('#skill-number').innerHTML) + parseInt(document.querySelector('#skill-given').innerHTML)) {
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
      if (JSON.parse(localStorage.getItem('skill')).length === parseInt(document.querySelector('#skill-number').innerHTML)) {
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

  // if locked, can't access, disable link.
  // progress & locks on homepage.
  // back button if locked...
});

/*

skills - skill proficiencies
next goes to expertise if applicable, if not, skip to tool proficiencies, if applicable. if not, skip to languages.
back goes to alignment

skills - expertise
next goes to tool proficiencies if applicable. if not, skip to languages.
back goes to skill proficiencies.

skills - tool proficiencies
next goes to languages.
back goes to expertise if selected. if not, go back to skill proficiencies.

skills - languages
next goes to attributes - choices
back goes to tool proficiencies if selected. if not, go back to expertise if selected. if not, go back to skill proficiencies.

attributes - choices
next goes to attributes - point buy / standard array / rolling 3d6 7 times, drop lowest
back goes to languages

attributes - point buy / standard array / rolling 3d6 7 times drop lowest
next goes to health - choices
back goes to attributes - choices

health - choices
next goes to health - roll / standard
back goes to attributes - method

health - roll / standard
next goes to spells if applicable, if not skip to name
back goes to health - choices

name
next goes to summary
back goes to spells if selected, if not back to health - choices

*/
/*
let character = {
  character: {
    name: '',
    race: [],
    level: 0,
    class: [],
    background: '',
    weapons: [],
    armor: [],
    tools: [],
    skills: [],
    expertise: [],
    savingthrows: [],
    languages: [],
    attributes: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      wisdom: 0,
      intelligence: 0,
      charisma: 0
    }

  },
  races: [
    {
      race: 'dwarf',
      subrace: ['hill', 'mountain']
    },
    {
      race: 'elf',
      subrace: ['high', 'wood']
    },
    {
      race: 'human'
    }
  ],
  classes: [
    {
      class: 'rogue',
      subclass: ['thief', 'assassin', 'arcane-trickster']
    },
    {
      class: 'paladin',
      subclass: ['devotion', 'ancients', 'vengeance']
    },
    {
      class: 'druid',
      subclass: ['land', 'moon']
    }
  ],
  backgrounds: [],
  proficiencies: {
    weapons: [],
    armor: [],
    tools: [],
    skills: [],
    expertise: [],
    savingthrows: [],
    languages: []
  },
}
*/