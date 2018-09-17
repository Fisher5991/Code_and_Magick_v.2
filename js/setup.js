'use script';

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
var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarItemFragment = document.createDocumentFragment();

var generateNumber = function (minNumber, maxNumber) {
  return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
};

var generateWizards = function (quantity) {
  var wizardsNamesCopy = wizardsNames.slice();
  var wizardsSurnamesCopy = wizardsSurnames.slice();
  var coatsColorsCopy = coatsColors.slice();
  var eyesColorsCopy = eyesColors.slice();

  for (var i = 0; i < quantity; i++) {
    var wizard = {};
    var temporaryName = [];
    var randomNumber = generateNumber(0, wizardsNamesCopy.length - 1);

    temporaryName.push(wizardsNamesCopy[randomNumber]);
    wizardsNamesCopy.splice(randomNumber, 1);
    randomNumber = generateNumber(0, wizardsSurnamesCopy.length - 1);
    temporaryName.push(wizardsSurnamesCopy[randomNumber]);
    wizardsSurnamesCopy.splice(randomNumber, 1);

    randomNumber = generateNumber(0, temporaryName.length - 1);
    wizard.name = temporaryName[randomNumber] + ' ';
    temporaryName.splice(randomNumber, 1);
    wizard.name += temporaryName[0];

    randomNumber = generateNumber(0, coatsColorsCopy.length - 1);
    wizard.coatColor = coatsColorsCopy[randomNumber];
    coatsColorsCopy.splice(randomNumber, 1);

    randomNumber = generateNumber(0, eyesColorsCopy.length - 1);
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

setup.classList.remove('hidden');
generateWizards(WIZARDS_NUMBER);
addWizards();

setupSimilarList.appendChild(similarItemFragment);
setupSimilar.classList.remove('hidden');
