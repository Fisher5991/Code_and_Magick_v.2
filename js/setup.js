'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizardFormElement = setup.querySelector('.setup-wizard-form');
  var setupForm = setup.querySelector('.setup-wizard-form');

  var similarItemFragment = document.createDocumentFragment();
  var wizardForm = {
    'ACTION': URL,
    'METHOD': 'post',
    'ENCTYPE': 'multipart/form-data'
  }

  var onSetupOpenClick = function (evt) {
    window.togglePopup.open(evt, setup);
  }

  var onSetupOpenKeydown = function (evt) {
    var resultOpenAction = window.utils.isEnterEvent(evt);

    if (resultOpenAction) {
      window.togglePopup.open(evt, setup);
    }
  }

  var onSetupCloseKeydown = function (evt) {
    var resultCloseAction = window.utils.isEnterEvent(evt);

    if (resultCloseAction) {
      window.togglePopup.close();
    }
  }

  var onSetupCloseClick = function (evt) {
    evt.preventDefault();
    window.togglePopup.close();
  }

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  var onSetupFormSubmit = function (evt) {
    window.backend.save(new FormData(setupForm), window.togglePopup.close, errorHandler);
    evt.preventDefault();
  }

  setupOpen.tabIndex = '0';
  setupClose.tabIndex = '0';
  setupOpen.addEventListener('click', onSetupOpenClick);
  setupOpen.addEventListener('keydown', onSetupOpenKeydown);
  setupClose.addEventListener('click', onSetupCloseClick);
  setupClose.addEventListener('keydown', onSetupCloseKeydown);

  setupWizardFormElement.action = wizardForm.ACTION;
  setupWizardFormElement.method = wizardForm.METHOD;
  setupWizardFormElement.enctype = wizardForm.ENCTYPE;

  setupForm.addEventListener('submit', onSetupFormSubmit);
})();
