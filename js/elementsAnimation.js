"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElementsAnimation =
/*#__PURE__*/
function () {
  function ElementsAnimation(lastLocation, currentLocation) {
    _classCallCheck(this, ElementsAnimation);

    this.lastLocation = lastLocation + 1;
    this.currentLocation = currentLocation + 1;
  }

  _createClass(ElementsAnimation, [{
    key: "imageAnimaion",
    value: function imageAnimaion() {
      var _this = this;

      console.log("\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434: \"".concat(this.currentLocation, "\"; \u0431\u044B\u043B: \"").concat(this.lastLocation, "\""));
      this.newSlide = document.querySelector("[data-id=img__holder_".concat(this.currentLocation, "]"));
      this.oldSlide = document.querySelector("[data-id=img__holder_".concat(this.lastLocation, "]"));

      if (this.currentLocation > this.lastLocation) {
        console.log('листаем вперёд');
        this.newSlide.style.transform = 'translateX(100vw)';
        this.oldSlide.style.transform = 'translateX(-100vw)';
      } else if (this.currentLocation === this.lastLocation) {
        console.log('start');
        this.newSlide.style.transform = 'translateX(0)';
      } else {
        console.log('листаем назад');
        this.newSlide.style.transform = 'translateX(-100vw)';
        this.oldSlide.style.transform = 'translateX(100vw)';
      }

      setTimeout(function () {
        _this.oldSlide.style.transition = '0.6s';
        _this.newSlide.style.transition = '0.6s';
        _this.newSlide.style.transform = 'translateX(0)';
      }, 10);
      setTimeout(function () {
        _this.oldSlide.style.transition = 'none';
      }, 600);
    } // eslint-disable-next-line

  }, {
    key: "contentAnimaionShowMode",
    value: function contentAnimaionShowMode(columnsArr) {
      for (var i = 0; i < columnsArr.length; i += 1) {
        var element = columnsArr[i];

        try {
          element.classList.remove('hideMode');
        } catch (error) {
          console.error('Таких слайдов нет');
        }

        element.classList.add('showMode');
      }
    } // eslint-disable-next-line

  }, {
    key: "contentAnimaionHideMode",
    value: function contentAnimaionHideMode(columnsArr) {
      for (var i = 0; i < columnsArr.length; i += 1) {
        var element = columnsArr[i];

        try {
          element.classList.remove('showMode');
        } catch (error) {
          console.error('Таких слайдов нет');
        }

        element.classList.add('hideMode');
      }
    }
  }]);

  return ElementsAnimation;
}();

exports.default = ElementsAnimation;