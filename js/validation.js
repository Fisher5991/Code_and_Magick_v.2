'use strict';

(function () {
  var InputLimitation = {
    'MIN_LENGTH': 2,
    'MAX_LENGTH': 25
  }

  var setupWizardForm = setup.querySelector('.setup-wizard-form');
  var setupUserName = setupWizardForm.querySelector('.setup-user-name');

  var startValidation = function () {

  }

  var onUserNameInput = function (evt) {
    if (evt.target.value.length < InputLimitation.MIN_LENGTH) {
      evt.target.setCustomValidity('Имя персонажа не может содержать менее ' + InputLimitation.MIN_LENGTH + ' символов')
    } else {
      evt.target.setCustomValidity('');
    }
  }

  setupUserName.minLength = InputLimitation.MIN_LENGTH + '';
  setupUserName.maxLength = InputLimitation.MAX_LENGTH + '';
  setupUserName.addEventListener('input', onUserNameInput);
})();
