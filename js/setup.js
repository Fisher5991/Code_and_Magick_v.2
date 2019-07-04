'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
  'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizards = [];

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizardFormElement = setup.querySelector('.setup-wizard-form');
  var setupUserName = setupWizardFormElement.querySelector('.setup-user-name');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarItemFragment = document.createDocumentFragment();
  var wizardForm = {
    'ACTION': 'https://js.dump.academy/code-and-magick',
    'METHOD': 'post',
    'ENCTYPE': 'multipart/form-data'
  }

  var generateWizards = function (quantity) {
    var wizardsNamesCopy = wizardsNames.slice();
    var wizardsSurnamesCopy = wizardsSurnames.slice();
    var coatsColorsCopy = coatsColors.slice();
    var eyesColorsCopy = eyesColors.slice();

    for (var i = 0; i < quantity; i++) {
      var wizard = {};
      var temporaryName = [];
      var randomNumber = window.utils.generateNumber(0, wizardsNamesCopy.length - 1);

      temporaryName.push(wizardsNamesCopy[randomNumber]);
      wizardsNamesCopy.splice(randomNumber, 1);
      randomNumber = window.utils.generateNumber(0, wizardsSurnamesCopy.length - 1);
      temporaryName.push(wizardsSurnamesCopy[randomNumber]);
      wizardsSurnamesCopy.splice(randomNumber, 1);

      randomNumber = window.utils.generateNumber(0, temporaryName.length - 1);
      wizard.name = temporaryName[randomNumber] + ' ';
      temporaryName.splice(randomNumber, 1);
      wizard.name += temporaryName[0];

      randomNumber = window.utils.generateNumber(0, coatsColorsCopy.length - 1);
      wizard.coatColor = coatsColorsCopy[randomNumber];
      coatsColorsCopy.splice(randomNumber, 1);

      randomNumber = window.utils.generateNumber(0, eyesColorsCopy.length - 1);
      wizard.eyesColor = eyesColorsCopy[randomNumber];
      eyesColorsCopy.splice(randomNumber, 1);

      wizards.push(wizard);
    }
  };

  var addWizards = function () {
    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      var similarItem = similarWizardTemplate.content.cloneNode(true);
      similarItem.querySelector('.setup-similar-label').textContent = wizards[i].name;
      similarItem.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      similarItem.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
      similarItemFragment.appendChild(similarItem);
    }
  }

  var onPopupEscPress = function (evt) {
    var resultEscPressAction = window.utils.isEscEvent(evt);

    if (resultEscPressAction && (evt.target !== setupUserName)) {
      window.togglePopup.close(evt, setup);
      document.removeEventListener('keydown', onPopupEscPress);
    }
  }

  var onSetupOpenClick = function (evt) {
    window.togglePopup.open(evt, setup);
    document.addEventListener('keydown', onPopupEscPress);
  }

  var onSetupOpenKeydown = function (evt) {
    var resultOpenAction = window.utils.isEnterEvent(evt);

    if (resultOpenAction) {
      window.togglePopup.open(evt, setup);
      document.addEventListener('keydown', onPopupEscPress);
    }
  }

  var onSetupCloseKeydown = function (evt) {
    var resultCloseAction = window.utils.isEnterEvent(evt);

    if (resultCloseAction) {
      window.togglePopup.close(evt, setup);
      document.removeEventListener('keydown', onPopupEscPress);
    }
  }

  var onSetupCloseClick = function (evt) {
    evt.preventDefault();
    window.togglePopup.close(evt, setup);
    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpen.tabIndex = '0';
  setupClose.tabIndex = '0';
  setupOpen.addEventListener('click', onSetupOpenClick);
  setupOpen.addEventListener('keydown', onSetupOpenKeydown);
  setupClose.addEventListener('click', onSetupCloseClick);
  setupClose.addEventListener('keydown', onSetupCloseKeydown);

  generateWizards(WIZARDS_NUMBER);
  addWizards();

  setupSimilarList.appendChild(similarItemFragment);
  setupSimilar.classList.remove('hidden');
  setupWizardFormElement.action = wizardForm.ACTION;
  setupWizardFormElement.method = wizardForm.METHOD;
  setupWizardFormElement.enctype = wizardForm.ENCTYPE;
})();
