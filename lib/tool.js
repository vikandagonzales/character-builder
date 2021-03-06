if (document.querySelector('#character-tool') !== null) {
  document.querySelector('#nav-proficiencies').classList.add('is-active');
  $('#back').removeClass('hide');
  $('#next').removeClass('hide');
  back.href = 'skill.php';
  if (toolGiven) {
    document.querySelector('#tool-addition').classList.remove('hide');
    document.querySelector('#tool-given').innerHTML = toolGiven;
  }
  if (artisanNumber || gamingNumber || musicNumber) {
    document.querySelector('#tool-extras').classList.remove('hide');
    if (artisanNumber) {
      document.querySelector('#artisan').classList.remove('hide');
      document.querySelector('#artisan-number').innerHTML = artisanNumber;
      if (artisanNumber > 1) {
        document.querySelector('#artisan .plural').classList.remove('hide');
      }
      document.querySelector('#header-artisan').classList.remove('hide');
    }
    if (gamingNumber) {
      document.querySelector('#gaming').classList.remove('hide');
      document.querySelector('#gaming-number').innerHTML = gamingNumber;
      if (gamingNumber > 1) {
        document.querySelector('#gaming .plural').classList.remove('hide');
      }
      document.querySelector('#header-gaming').classList.remove('hide');
    }
    if (musicNumber) {
      document.querySelector('#music').classList.remove('hide');
      document.querySelector('#music-number').innerHTML = musicNumber;
      if (musicNumber > 1) {
        document.querySelector('#music .plural').classList.remove('hide');
      }
      document.querySelector('#header-music').classList.remove('hide');
    }
  }
  if (artisanNumber && gamingNumber && !musicNumber || artisanNumber && !gamingNumber && musicNumber) {
    document.querySelectorAll('#tool-extras .and')[0].classList.remove('hide');
  } else if (!artisanNumber && gamingNumber && musicNumber) {
    document.querySelectorAll('#tool-extras .and')[1].classList.remove('hide');
  } else if (artisanNumber && gamingNumber && musicNumber) {
    document.querySelectorAll('#tool-extras .comma')[0].classList.remove('hide');
    document.querySelectorAll('#tool-extras .comma')[1].classList.remove('hide');
    document.querySelectorAll('#tool-extras .and')[1].classList.remove('hide');
  } else if (!toolGiven && !artisanNumber && !gamingNumber && !musicNumber) {
    document.querySelector('#tool-none').classList.remove('hide');
  }
  switch (JSON.parse(localStorage.getItem('class'))) {
    case 'druid':
      document.querySelector('div[data-tool=herbalism-kit]').classList.remove('hide');
      document.querySelector('#herbalism-kit').classList.add('has-background-color');
      document.querySelector('#herbalism-kit').classList.add('is-primary');
      document.querySelector('#herbalism-kit').disabled = true;
      document.querySelector('#herbalism-kit').checked = 'checked';
      break;
    case 'rogue':
      document.querySelector('div[data-tool=thieves-tools]').classList.remove('hide');
      document.querySelector('#thieves-tools').classList.add('has-background-color');
      document.querySelector('#thieves-tools').classList.add('is-primary');
      document.querySelector('#thieves-tools').disabled = true;
      document.querySelector('#thieves-tools').checked = 'checked';
      break;
    default:
  }
  switch (JSON.parse(localStorage.getItem('background'))) {
    case 'charlatan':
      document.querySelector('div[data-tool=disguise-kit]').classList.remove('hide');
      document.querySelector('#disguise-kit').classList.add('has-background-color');
      document.querySelector('#disguise-kit').classList.add('is-primary');
      document.querySelector('#disguise-kit').disabled = true;
      document.querySelector('#disguise-kit').checked = 'checked';
      document.querySelector('div[data-tool=forgery-kit]').classList.remove('hide');
      document.querySelector('#forgery-kit').classList.add('has-background-color');
      document.querySelector('#forgery-kit').classList.add('is-primary');
      document.querySelector('#forgery-kit').disabled = true;
      document.querySelector('#forgery-kit').checked = 'checked';
      break;
    case 'criminal':
      document.querySelector('div[data-tool=thieves-tools]').classList.remove('hide');
      document.querySelector('#thieves-tools').classList.add('has-background-color');
      document.querySelector('#thieves-tools').classList.add('is-primary');
      document.querySelector('#thieves-tools').disabled = true;
      document.querySelector('#thieves-tools').checked = 'checked';
      document.querySelector('div[data-tool=dice-set]').classList.remove('hide');
      document.querySelector('div[data-tool=dragonchess-set]').classList.remove('hide');
      document.querySelector('div[data-tool=playing-card-set]').classList.remove('hide');
      document.querySelector('div[data-tool=three-dragon-ante-set]').classList.remove('hide');
      break;
    default:
  }
  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'dwarf':
      document.querySelector('div[data-tool=smiths-tools]').classList.remove('hide');
      document.querySelector('div[data-tool=brewers-supplies]').classList.remove('hide');
      document.querySelector('div[data-tool=masons-tools]').classList.remove('hide');
      break;
    default:
  }
  $('#instructions').fadeIn();
  tool = JSON.parse(localStorage.getItem('tool')) || [];
  for (var i = 0; i < document.querySelectorAll('input[name=tool]:checked').length; i++) {
    if (!tool.includes(document.querySelectorAll('input[name=tool]:checked')[i].id)) {
      tool.push(document.querySelectorAll('input[name=tool]:checked')[i].id);
      localStorage.setItem('tool', JSON.stringify(tool));
    }
  }
  artisan = JSON.parse(localStorage.getItem('artisan')) || [];
  for (var i = 0; i < inputs.length; i++) {
    if (artisan.indexOf(inputs[i].id) !== -1) {
      inputs[i].checked = true;
    }
  }
  localStorage.setItem('artisan', JSON.stringify(artisan));
  gaming = JSON.parse(localStorage.getItem('gaming')) || [];
  for (var i = 0; i < inputs.length; i++) {
    if (gaming.indexOf(inputs[i].id) !== -1) {
      inputs[i].checked = true;
    }
  }
  localStorage.setItem('gaming', JSON.stringify(gaming));
  music = JSON.parse(localStorage.getItem('music')) || [];
  for (var i = 0; i < inputs.length; i++) {
    if (music.indexOf(inputs[i].id) !== -1) {
      inputs[i].checked = true;
    }
  }
  localStorage.setItem('music', JSON.stringify(music));
  if (JSON.parse(localStorage.getItem('artisan')).length === artisanLimit && JSON.parse(localStorage.getItem('gaming')).length === gamingLimit && JSON.parse(localStorage.getItem('music')).length === musicLimit) {
    $('#error').fadeOut();
    sidenav();
    if (JSON.parse(localStorage.getItem('class')) === 'rogue') {
      next.href = 'expertise.php';
    } else {
      localStorage.setItem('expertise', JSON.stringify(expertise));
      next.href = 'language.php';
    }
    nextArrow();
  } else {
    sidenav();
    next.removeAttribute('href');
    nextArrowRemove();
  }
  next.addEventListener('click', function () {
    if (JSON.parse(localStorage.getItem('artisan')).length !== artisanLimit) {
      $('#error').fadeIn();
    }
    if (JSON.parse(localStorage.getItem('gaming')).length !== gamingLimit) {
      $('#error').fadeIn();
    }
    if (JSON.parse(localStorage.getItem('music')).length !== musicLimit) {
      $('#error').fadeIn();
    }
  });
  $('input[name=artisan]').on('change', function (event) {
    if ($('input[name=artisan]:checked').length > artisanLimit) {
      event.target.checked = false;
    }
    if (event.target.checked) {
      artisan.push(event.target.id);
    } else {
      if (artisan.indexOf(event.target.id) !== -1) {
        artisan.splice(artisan.indexOf(event.target.id), 1);
      }
    }
    localStorage.setItem('artisan', JSON.stringify(artisan));
  });
  $('input[name=gaming]').on('change', function (event) {
    if ($('input[name=gaming]:checked').length > gamingLimit) {
      event.target.checked = false;
    }
    if (event.target.checked) {
      gaming.push(event.target.id);
    } else {
      if (gaming.indexOf(event.target.id) !== -1) {
        gaming.splice(gaming.indexOf(event.target.id), 1);
      }
    }
    localStorage.setItem('gaming', JSON.stringify(gaming));
  });
  $('input[name=music]').on('change', function (event) {
    if ($('input[name=music]:checked').length > musicLimit) {
      event.target.checked = false;
    }
    if (event.target.checked) {
      music.push(event.target.id);
    } else {
      if (music.indexOf(event.target.id) !== -1) {
        music.splice(music.indexOf(event.target.id), 1);
      }
    }
    localStorage.setItem('music', JSON.stringify(music));
  });
  $('input').on('change', function (event) {
    if (JSON.parse(localStorage.getItem('artisan')).length === artisanLimit && JSON.parse(localStorage.getItem('gaming')).length === gamingLimit && JSON.parse(localStorage.getItem('music')).length === musicLimit) {
      $('#error').fadeOut();
      sidenav();
      if (JSON.parse(localStorage.getItem('class')) === 'rogue') {
        next.href = 'expertise.php';
      } else {
        localStorage.setItem('expertise', JSON.stringify(expertise));
        next.href = 'language.php';
      }
      nextArrow();
    } else {
      sidenav();
      next.removeAttribute('href');
      nextArrowRemove();
    }
  });
}