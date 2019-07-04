'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball');

  var WIZARD = {
    'coat': {
      'colors': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
            'rgb(0, 0, 0)'],
      'colorCounter': 0
      },

    'eyes': {
      'colors': ['black', 'red', 'blue', 'yellow', 'green'],
      'colorCounter': 0
    },

    'fireball': {
      'colors': ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
      'colorCounter': 0
    },

    'changeColor': function (part) {
      if (part.colorCounter < part.colors.length - 1) {
        return part.colors[++(part.colorCounter)];
      } else {
        part.colorCounter = 0;
        return part.colors[part.colorCounter];
      }
    }
  }

  var onWizardCoatClick = function (evt) {
    evt.target.style.fill = WIZARD.changeColor(WIZARD.coat);
  }

  var onWizardEyesClick = function (evt) {
    evt.target.style.fill = WIZARD.changeColor(WIZARD.eyes);
  }

  var onWizardFireballClick = function (evt) {
    evt.target.style.backgroundColor = WIZARD.changeColor(WIZARD.fireball);
  }

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  wizardFireball.addEventListener('click', onWizardFireballClick);
})();
