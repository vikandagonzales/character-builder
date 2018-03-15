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