'use strict';

(function () {
  var currentKeyCode = {
    'ENTER': 13,
    'ESC': 27
  }

  window.utils = {
    isEnterEvent: function (evt) {
      if (evt.keyCode === currentKeyCode.ENTER) {
        return true;
      }
    },

    isEscEvent: function (evt) {
      if (evt.keyCode === currentKeyCode.ESC) {
        return true;
      }
    },

    generateNumber: function (minNumber, maxNumber) {
      return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
    }
  }
})();
