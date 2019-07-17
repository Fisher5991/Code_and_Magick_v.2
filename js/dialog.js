'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupUserPic = setup.querySelector('.setup-user-pic');
  var pageHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  var setupWidth;
  var setupHeight;
  var coord = {};
  var currentViewportSize;

  var onUserPicMouseDown = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    }

    var offsetX;
    var offsetY;

    currentViewportSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (!setupWidth) {
      setupWidth = window.utils.getCoords(setup).right - window.utils.getCoords(setup).left;
    }

    if (!coord.minLeft) {
      coord.minLeft = setupWidth / 2;
    }

    coord.maxLeft = currentViewportSize - window.utils.getScrollbarWidth() - setupWidth / 2;

    if (!setupHeight) {
      setupHeight = window.utils.getCoords(setup).bottom - window.utils.getCoords(setup).top;
    }

    if (coord.minTop === undefined) {
      coord.minTop = 0;
    }

    if (!coord.maxTop) {
      coord.maxTop = Math.max(pageHeight - setupHeight, setupHeight);
    }

    var onUserPicMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: moveEvt.clientX - startCoords.x,
        y: moveEvt.clientY - startCoords.y
      }

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      }

      offsetX = Math.floor(window.utils.getCoords(setup).left) + (setupWidth / 2)
       + shift.x;
      offsetY = Math.floor(window.utils.getCoords(setup).top) + shift.y;

      if (offsetX >= coord.minLeft && offsetX <= coord.maxLeft) {
        setup.style.left = offsetX + 'px';
      }

      if (offsetY >= coord.minTop && offsetY <= coord.maxTop) {
        setup.style.top = offsetY + 'px';
      }
    }

    var onUserPicMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onUserPicMouseMove);
      document.removeEventListener('mouseup', onUserPicMouseUp)
    }

    document.addEventListener('mousemove', onUserPicMouseMove);
    document.addEventListener('mouseup', onUserPicMouseUp);
  }

  setupUserPic.addEventListener('mousedown', onUserPicMouseDown);
})();
