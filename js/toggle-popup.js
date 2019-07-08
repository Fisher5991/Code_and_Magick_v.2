'use strict';

(function () {
  window.togglePopup = {
    open: function (evt, popup, escHandler) {
      popup.classList.remove('hidden');
      document.addEventListener('keydown', escHandler);
    },

    close: function (evt, popup, escHandler) {
      popup.classList.add('hidden');
      document.removeEventListener('keydown', escHandler);
      popup.style = '';
    }
  }
})();
