'use strict';

(function () {
  var CurrentKeyCode = {
    'ENTER': 13,
    'ESC': 27
  }

  window.utils = {
    isEnterEvent: function (evt) {
      if (evt.keyCode === CurrentKeyCode.ENTER) {
        return true;
      }
    },

    isEscEvent: function (evt) {
      if (evt.keyCode === CurrentKeyCode.ESC) {
        return true;
      }
    },

    generateNumber: function (minNumber, maxNumber) {
      return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
    }
  }
})();
