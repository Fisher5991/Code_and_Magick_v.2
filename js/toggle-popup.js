'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupWizardFormElement = setup.querySelector('.setup-wizard-form');
  var setupUserName = setupWizardFormElement.querySelector('.setup-user-name');
  var currentPopup;

  var onPopupEscPress = function (evt) {
    var resultEscPressAction = window.utils.isEscEvent(evt);

    if (resultEscPressAction && (evt.target !== setupUserName)) {
      window.togglePopup.close();
    }
  }

  window.togglePopup = {
    open: function (evt, popup) {
      currentPopup = popup;
      currentPopup.classList.remove('hidden');
      document.addEventListener('keydown', onPopupEscPress);
    },

    close: function () {
      currentPopup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
      currentPopup.style = '';
    }
  }
})();
