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

var race = document.querySelector('#character-race');
var subrace = document.querySelector('#character-subrace');

document.addEventListener('DOMContentLoaded', function () {

  // data-visibility how to access DOM
  // next button add is-primary for clickable, add is-muted or something for not. add and remove classes
  // fade in and out using jquery instead of adding hide and show classes.
  // base next button on whether an option was selected or not.
  // breadcrumbs
  // navigation is-active class on current active window, lock and check based on localstorage
  // selections on localstorage

  // RACE - race

  if (race.style === 'display: block') {
    back.classList.remove('is-primary');
    back.classList.remove('is-outlined');
    back.classList.add('is-static');
    next.addEventListener('click', function () {
      race.dataset.visibility = 'hide';
      $('#character-race').hide();
      subrace.dataset.visibility = 'show';
      $('#character-subrace').fadeIn(200);
    });
  }

  // RACE - subrace

  if (subrace.style === 'display: block') {
    back.classList.add('is-primary');
    back.classList.add('is-outlined');
    back.classList.remove('is-static');
    back.addEventListener('click', function () {
      race.dataset.visibility = 'show';
      $('#character-race').fadeIn(200);
      subrace.dataset.visibility = 'hide';
      $('#character-subrace').hide();
    });
  }
});

/*
back.classList.remove('is-primary');
back.classList.remove('is-outlined');
back.classList.add('is-static');
next.addEventListener('click', function() {
  race.dataset.visibility === 'hide';
  subrace.dataset.visibility === 'show';
});
}
$('#next').click(function () {
$('#character-race').hide();
$('#character-subrace').fadeIn(500);
});
if (subrace.dataset.visibility === 'show') {
back.className = '';
back.addEventListener('click', function() {
  race.className = '';
  subrace.className = 'hide';
});
next.addEventListener('click', function() {
  subrace.className = 'hide';
  level.className = '';
})
}
*/

/*
required alert when nothing is selected if user tries to hit 'next'


race - race
if dwarf or elf, next should go to the subrace ID;
if human, next should go straight to class page.

race - subrace
next goes to class page
back goes to race.

class - level
next goes to class
back goes to subrace page if subrace was selected. if not, back to race.

class - class
next goes to subclass if level >= 3, if not, skip to background.
back goes to level

class - subclass
next goes to background - background
back goes to class

background - background
next goes to background - alignment
back goes to subclass if that has been selected. if not, back to class.

background - alignment
next goes to skills - skill proficiencies
back goes to background - background

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

////////spells
next goes to name
back goes to health - method

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
      subclass: ['arcane-trickster', 'assassin', 'thief']
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