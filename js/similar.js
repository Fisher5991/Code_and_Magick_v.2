'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var setupPlayer = document.querySelector('.setup-player');
  var colorCoatInput = setupPlayer.querySelector('[name="coat-color"]');
  var colorEyesInput = setupPlayer.querySelector('[name="eyes-color"]');
  var colorFireballInput = setupPlayer.querySelector('[name="fireball-color"]');
  var setupSimilarListElement = document.querySelector('.setup-similar-list');
  var wizards = [];
  var coatColor = colorCoatInput.value;
  var eyesColor = colorEyesInput.value;
  var fireballColor = colorFireballInput.value;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  var removeWizards = function (oldWizards) {
    [].forEach.call(oldWizards, function (it) {
      setupSimilarListElement.removeChild(it);
    });
  }

  var namesComparator = function (left, right) {
    if (left < right) {
      return -1;
    } else if (left > right) {
      return 1;
    } else {
      return 0;
    }
  }

  var updateWizards = function () {
    var oldWizards = setupSimilarListElement.querySelectorAll('.setup-similar-item');

    if (oldWizards) {
      removeWizards(oldWizards);
    }

    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }))
  }

  window.loadWizardData = function (data) {
    wizards = data;
    updateWizards();
    setupSimilar.classList.remove('hidden');
  }

  window.similar = {
    setCoatColor: function (color) {
      coatColor = color;
      updateWizards();
    },

    setEyesColor: function (color) {
      eyesColor = color;
      updateWizards();
    }
  }

  // window.backend.load(loadWizardData, errorHandler);
  window.backend.getJSONP('loadWizardData');
})();
