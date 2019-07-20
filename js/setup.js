'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var URL = 'https://js.dump.academy/code-and-magick';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizardFormElement = setup.querySelector('.setup-wizard-form');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var setupForm = setup.querySelector('.setup-wizard-form');

  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball');

  var similarItemFragment = document.createDocumentFragment();
  var wizardForm = {
    'ACTION': 'https://js.dump.academy/code-and-magick',
    'METHOD': 'post',
    'ENCTYPE': 'multipart/form-data'
  }

  var addWizards = function (wizard) {
    var similarItem = similarWizardTemplate.content.cloneNode(true);
    similarItem.querySelector('.setup-similar-label').textContent = wizard.name;
    similarItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    similarItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return similarItem;
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

  var onWizardCoatClick = function (evt) {
    evt.target.style.fill = window.colorizeElement('coat');
  }

  var onWizardEyesClick = function (evt) {
    evt.target.style.fill = window.colorizeElement('eyes');
  }

  var onWizardFireballClick = function (evt) {
    evt.target.style.backgroundColor = window.colorizeElement('fireball');
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

  window.loadWizardData = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      fragment.appendChild(addWizards(wizards[i]));
    }

    setupSimilarList.appendChild(fragment);

    setupSimilar.classList.remove('hidden');
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

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  wizardFireball.addEventListener('click', onWizardFireballClick);

  // window.backend.load(loadWizardData, errorHandler);
  window.backend.getJSONP('loadWizardData');

  setupForm.addEventListener('submit', onSetupFormSubmit);
})();
