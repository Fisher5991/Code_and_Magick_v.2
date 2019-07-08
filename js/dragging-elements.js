'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem;

  var onShopElementDragstart = function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  }

  var onArtifactsElementDragover = function (evt) {
    evt.preventDefault();
  }

  var onArtifactsElementDrop = function (evt) {
    if (!evt.target.children.length && evt.target.tagName.toLowerCase() !== 'img' && draggedItem) {
      var draggedItemCopy = draggedItem.cloneNode(true);
      draggedItemCopy.draggable = false;
      evt.target.style.outline = '';
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(draggedItemCopy);
    }
    evt.preventDefault();
  }

  var onArtifactsElementDragEnter = function (evt) {
    if (!evt.target.children.length && evt.target.tagName.toLowerCase() !== 'img' && draggedItem) {
      evt.target.style.outline = '2px dashed red';
      evt.target.style.backgroundColor = 'yellow';
    }
    evt.preventDefault();
  }

  var onArtifactsElementDragLeave = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.style.outline = '';
    evt.preventDefault();
  }

  var onShopElementDragend = function (evt) {
    draggedItem = null;
  }

  shopElement.addEventListener('dragstart', onShopElementDragstart);
  shopElement.addEventListener('dragend', onShopElementDragend);
  artifactsElement.addEventListener('dragover', onArtifactsElementDragover);
  artifactsElement.addEventListener('drop', onArtifactsElementDrop);
  artifactsElement.addEventListener('dragenter', onArtifactsElementDragEnter);
  artifactsElement.addEventListener('dragleave', onArtifactsElementDragLeave);
})();
