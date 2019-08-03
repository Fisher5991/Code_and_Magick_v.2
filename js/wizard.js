'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;
  var setupPlayer = document.querySelector('.setup-player');
  var colorCoatInput = setupPlayer.querySelector('[name="coat-color"]');
  var colorEyesInput = setupPlayer.querySelector('[name="eyes-color"]');
  var colorFireballInput = setupPlayer.querySelector('[name="fireball-color"]');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball');

  var onWizardCoatClick = function (evt) {
    var newColor = window.colorizeElement('coat');
    evt.target.style.fill = newColor;
    colorCoatInput.value = newColor;
    window.utils.stopDebounce(window.similar.setCoatColor, DEBOUNCE_INTERVAL, newColor);
  }

  var onWizardEyesClick = function (evt) {
    var newColor = window.colorizeElement('eyes');
    evt.target.style.fill = newColor;
    colorEyesInput.value = newColor;
    window.utils.stopDebounce(window.similar.setEyesColor, DEBOUNCE_INTERVAL, newColor);
  }

  var onWizardFireballClick = function (evt) {
    fireballColor = window.colorizeElement('fireball');
    colorFireballInput.value = newColor;
  }

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  wizardFireball.addEventListener('click', onWizardFireballClick);
})();
