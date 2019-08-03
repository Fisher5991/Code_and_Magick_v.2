'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');

  var addWizards = function (wizard) {
    var similarItem = similarWizardTemplate.content.cloneNode(true);
    similarItem.querySelector('.setup-similar-label').textContent = wizard.name;
    similarItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    similarItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return similarItem;
  }

  window.render = function (data) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      fragment.appendChild(addWizards(data[i]));
    }

    setupSimilarList.appendChild(fragment);
  }
})();
