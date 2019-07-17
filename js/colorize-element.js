'use strict';

(function () {
  var WIZARD = {
    'coat': {
      'colors': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
            'rgb(0, 0, 0)'],
      'colorCounter': 0
      },

    'eyes': {
      'colors': ['black', 'red', 'blue', 'yellow', 'green'],
      'colorCounter': 0
    },

    'fireball': {
      'colors': ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
      'colorCounter': 0
    },

    'changeColor': function (part) {
      if (this[part].colorCounter < this[part].colors.length - 1) {
        return this[part].colors[++(this[part].colorCounter)];
      } else {
        this[part].colorCounter = 0;
        return this[part].colors[this[part].colorCounter];
      }
    }
  }

  window.colorizeElement = function (element) {
    return WIZARD.changeColor(element);
  }
})();
