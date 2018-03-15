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
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return').fadeIn(500);
    } else {
        $('#return').fadeOut(500);
    }
});

$('#return').click(function() {
    $('body,html').animate({scrollTop : 0}, 500);
});

// ===== Scroll Smoothing =====
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('nav').height()
        }, 500);
        return false;
      }
    }
  });
});


// if locked, can't access, disable link.
// progress & locks on homepage.
// back button if locked...



/*

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
