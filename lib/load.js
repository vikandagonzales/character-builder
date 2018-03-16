if (JSON.parse(localStorage.getItem('race'))) {
  switch (JSON.parse(localStorage.getItem('race'))) {
    case 'dwarf':
      if (languageGiven) {
        languageGiven += 2;
      } else {
        languageGiven = 2;
      }
      if (artisanNumber) {
        artisanNumber += 1;
      } else {
        artisanNumber = 1;
      }
      break;
    case 'elf':
      if (skillGiven) {
        skillGiven += 1;
      } else {
        skillGiven = 1;
      }
      if (languageGiven) {
        languageGiven += 2;
      } else {
        languageGiven = 2;
      }
      if (languageNumber) {
        languageNumber += 1;
      } else {
        languageNumber = 1;
      }
      if (JSON.parse(localStorage.getItem('high')) === 'high') {
        languageNumber += 1;
      }
      break;
    case 'human':
      if (languageGiven) {
        languageGiven += 1;
      } else {
        languageGiven = 1;
      }
      if (languageNumber) {
        languageNumber += 1;
      } else {
        languageNumber = 1;
      }
      break;
    default:
  }
}

if (JSON.parse(localStorage.getItem('class'))) {
  switch (JSON.parse(localStorage.getItem('class'))) {
    case 'druid':
      if (skillNumber) {
        skillNumber += 2;
      } else {
        skillNumber = 2;
      }
      if (toolGiven) {
        toolGiven += 1;
      } else {
        toolGiven = 1;
      }
      break;
    case 'paladin':
      if (skillNumber) {
        skillNumber += 2;
      } else {
        skillNumber = 2;
      }
      break;
    case 'rogue':
      if (skillNumber) {
        skillNumber += 4;
      } else {
        skillNumber = 4;
      }
      if (toolGiven) {
        toolGiven += 1;
      } else {
        toolGiven = 1;
      }
      expertiseNumber = 2;
      if (JSON.parse(localStorage.getItem('level')) >= 6) {
        expertiseNumber += 2;
      }
      break;
    default:
  }
}

if (JSON.parse(localStorage.getItem('background'))) {
  switch (JSON.parse(localStorage.getItem('background'))) {
    case 'acolyte':
      if (skillGiven) {
        skillGiven += 2;
      } else {
        skillGiven = 2;
      }
      if (languageNumber) {
        languageNumber += 2;
      } else {
        languageNumber = 2;
      }
      break;
    case 'charlatan':
      if (skillGiven) {
        skillGiven += 2;
      } else {
        skillGiven = 2;
      }
      if (toolGiven) {
        toolGiven += 2;
      } else {
        toolGiven = 2;
      }
      break;
    case 'criminal':
      if (skillGiven) {
        skillGiven += 2;
      } else {
        skillGiven = 2;
      }
      if (toolGiven) {
        toolGiven += 1;
      } else {
        toolGiven = 1;
      }
      if (gamingNumber) {
        gamingNumber += 1;
      } else {
        gamingNumber = 1;
      }
      break;
    default:
  }
}

skillLimit = (skillNumber || 0) + (skillGiven || 0);
toolLimit = toolGiven || 0;
artisanLimit = artisanNumber || 0;
gamingLimit = gamingNumber || 0;
musicLimit = musicNumber || 0;
expertiseLimit = expertiseNumber || 0;
languageLimit = (languageNumber || 0) + (languageGiven || 0);

sidenav();