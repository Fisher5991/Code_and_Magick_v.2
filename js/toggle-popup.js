'use strict';

(function () {
  window.togglePopup = {
    open: function (evt, popup) {
      popup.classList.remove('hidden');
    },

    close: function (evt, popup) {
      popup.classList.add('hidden');
    }
  }
})();
