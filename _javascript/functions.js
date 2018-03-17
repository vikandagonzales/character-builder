function sidenav () {
  if (
    JSON.parse(localStorage.getItem('race')) !== null &&
    JSON.parse(localStorage.getItem('subrace')) !== null
  ) {
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
    if (
      JSON.parse(localStorage.getItem('class')) !== null &&
      JSON.parse(localStorage.getItem('subclass')) !== null
    ) {
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
  if (
    JSON.parse(localStorage.getItem('race')) !== null &&
    JSON.parse(localStorage.getItem('subrace')) !== null &&
    JSON.parse(localStorage.getItem('class')) !== null &&
    JSON.parse(localStorage.getItem('subclass')) !== null &&
    JSON.parse(localStorage.getItem('background')) !== null
  ) {
    $('#nav-proficiencies').removeClass('disable');
    $('#nav-proficiencies span[data-id=lock]').hide();

    if (
      JSON.parse(localStorage.getItem('skill')) &&
      JSON.parse(localStorage.getItem('tool')) &&
      JSON.parse(localStorage.getItem('artisan')) &&
      JSON.parse(localStorage.getItem('gaming')) &&
      JSON.parse(localStorage.getItem('music')) &&
      JSON.parse(localStorage.getItem('expertise')) &&
      JSON.parse(localStorage.getItem('language'))
    ) {
      if (
        (JSON.parse(localStorage.getItem('skill')).length > 0 || skillLimit === 0) &&
        (JSON.parse(localStorage.getItem('tool')).length > 0 || toolLimit === 0) &&
        (JSON.parse(localStorage.getItem('artisan')).length === artisanLimit) &&
        (JSON.parse(localStorage.getItem('gaming')).length === gamingLimit) &&
        (JSON.parse(localStorage.getItem('music')).length === musicLimit) &&
        (JSON.parse(localStorage.getItem('expertise')).length === expertiseLimit) &&
        (JSON.parse(localStorage.getItem('language')).length > 0 || languageLimit === 0)
      ) {
        $('#nav-proficiencies span[data-id=times]').hide();
        $('#nav-proficiencies span[data-id=check]').fadeIn();
        $('#nav-abilities').removeClass('disable');
        $('#nav-abilities span[data-id=lock]').hide();
        if (JSON.parse(localStorage.getItem('points')) === 0) {
          $('#nav-abilities span[data-id=times]').hide();
          $('#nav-abilities span[data-id=check]').fadeIn();
          if (
            JSON.parse(localStorage.getItem('name')) !== null &&
            JSON.parse(localStorage.getItem('alignment')) !== null
          ) {
            $('#nav-summary').removeClass('disable');
            $('#nav-summary span[data-id=unlock]').fadeIn();
            $('#nav-summary span[data-id=lock]').hide();
          } else {
            $('#nav-summary span[data-id=unlock]').hide();
            $('#nav-summary span[data-id=lock]').fadeIn();
            $('#nav-summary').addClass('disable');
          }
        } else {
          $('#nav-abilities span[data-id=times]').fadeIn();
          $('#nav-abilities span[data-id=check]').hide();
          $('#nav-summary span[data-id=unlock]').hide();
          $('#nav-summary span[data-id=lock]').fadeIn();
          $('#nav-summary').addClass('disable');
        }
      }
    } else {
      $('#nav-proficiencies span[data-id=times]').fadeIn();
      $('#nav-proficiencies span[data-id=check]').hide();
      $('#nav-abilities span[data-id=times]').hide();
      $('#nav-abilities span[data-id=check]').hide();
      $('#nav-abilities span[data-id=lock]').fadeIn();
      $('#nav-abilities').addClass('disable');
      $('#nav-summary span[data-id=unlock]').hide();
      $('#nav-summary span[data-id=lock]').fadeIn();
      $('#nav-summary').addClass('disable');
    }
  } else {
    $('#nav-proficiencies span[data-id=times]').hide();
    $('#nav-proficiencies span[data-id=check]').hide();
    $('#nav-proficiencies span[data-id=lock]').fadeIn();
    $('#nav-proficiencies').addClass('disable');
    $('#nav-abilities span[data-id=times]').hide();
    $('#nav-abilities span[data-id=check]').hide();
    $('#nav-abilities span[data-id=lock]').fadeIn();
    $('#nav-abilities').addClass('disable');
    $('#nav-summary span[data-id=unlock]').hide();
    $('#nav-summary span[data-id=lock]').fadeIn();
    $('#nav-summary').addClass('disable');
  }
  if (JSON.parse(localStorage.getItem('name')) !== null) {
    $('#nav-name span[data-id=times]').hide();
    $('#nav-name span[data-id=check]').fadeIn();
  } else {
    $('#nav-name span[data-id=times]').fadeIn();
    $('#nav-name span[data-id=check]').hide();
  }
}

function nextArrow () {
  next.classList.remove('is-static');
  next.classList.add('is-primary');
  next.classList.add('is-outlined');
}

function nextArrowRemove () {
  next.classList.add('is-static');
  next.classList.remove('is-primary');
  next.classList.remove('is-outlined');
}

if (document.querySelector('#clear')) {
  document.querySelector('#clear').addEventListener('click', function () {
    localStorage.clear();
    sidenav();
    progress();
  });
}

function progress () {
  if (
    JSON.parse(localStorage.getItem('race')) !== null &&
    JSON.parse(localStorage.getItem('subrace')) !== null
  ) {
    completion.push('race');
  } else {
    if (completion.indexOf('race') !== -1) {
      completion.splice(completion.indexOf('race'),1);
    }
  }
  if (JSON.parse(localStorage.getItem('level')) !== null) {
    completion.push('level');
  } else {
    if (completion.indexOf('level') !== -1) {
      completion.splice(completion.indexOf('level'),1);
    }
  }
  if (
    JSON.parse(localStorage.getItem('class')) !== null &&
    JSON.parse(localStorage.getItem('subclass')) !== null
  ) {
    completion.push('class');
  } else {
    if (completion.indexOf('class') !== -1) {
      completion.splice(completion.indexOf('class'),1);
    }
  }
  if (JSON.parse(localStorage.getItem('alignment')) !== null) {
    completion.push('alignment');
  } else {
    if (completion.indexOf('alignment') !== -1) {
      completion.splice(completion.indexOf('alignment'),1);
    }
  }
  if (JSON.parse(localStorage.getItem('background')) !== null) {
    completion.push('background');
  } else {
    if (completion.indexOf('background') !== -1) {
      completion.splice(completion.indexOf('background'),1);
    }
  }
  if (
    JSON.parse(localStorage.getItem('skill')) !== null &&
    JSON.parse(localStorage.getItem('tool')) !== null &&
    JSON.parse(localStorage.getItem('artisan')) !== null &&
    JSON.parse(localStorage.getItem('gaming')) !== null &&
    JSON.parse(localStorage.getItem('music')) !== null &&
    JSON.parse(localStorage.getItem('expertise')) !== null &&
    JSON.parse(localStorage.getItem('language')) !== null
  ) {
    completion.push('proficiencies');
  } else {
    if (completion.indexOf('proficiencies') !== -1) {
      completion.splice(completion.indexOf('proficiencies'),1);
    }
  }
  if (JSON.parse(localStorage.getItem('points')) === 0) {
    completion.push('abilities');
  } else {
    if (completion.indexOf('abilities') !== -1) {
      completion.splice(completion.indexOf('abilities'),1);
    }
  }
  if (JSON.parse(localStorage.getItem('name')) !== null) {
    completion.push('name');
  } else {
    if (completion.indexOf('name') !== -1) {
      completion.splice(completion.indexOf('name'),1);
    }
  }
  document.querySelector('progress').value = (completion.length / 8) * 100;
}

if (document.querySelector('progress')) {
  progress();
}
