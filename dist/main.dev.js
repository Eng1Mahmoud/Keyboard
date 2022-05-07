"use strict";

var buttom = document.querySelectorAll(".contener .buttons .buttom");
var text = document.querySelector(".contener .text input");
console.log(text);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = buttom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    e = _step.value;
    e.addEventListener('click', function () {
      text.focus();

      if (this.textContent.trim().length != 1) {
        text.value += " ";
      } else {
        text.value += this.textContent.trim().toLowerCase();
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}