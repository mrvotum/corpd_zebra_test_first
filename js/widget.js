"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementsAnimation = _interopRequireDefault(require("./elementsAnimation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Widget =
/*#__PURE__*/
function () {
  function Widget(swiper) {
    _classCallCheck(this, Widget);

    this.swiper = swiper;
    this.clickerCount = 1;
  }

  _createClass(Widget, [{
    key: "create",
    value: function create() {
      new _elementsAnimation.default(0, 0).imageAnimaion();
      this.createListeners(this.swiper, this.kek);
    }
  }, {
    key: "createListeners",
    value: function createListeners() {
      this.swiper.on('slideChange', function (swiper) {
        new _elementsAnimation.default(swiper.previousIndex, swiper.activeIndex).imageAnimaion();
      });
      this.swiper.on('transitionEnd', function () {
        this.swiperWrapper = document.querySelector('[data-id=swiper-wrapper]');
        var columnsArr = this.swiperWrapper.getElementsByClassName('column');
        setTimeout(function () {
          new _elementsAnimation.default().contentAnimaionShowMode(columnsArr);
        }, 300);
      });
      this.swiper.on('transitionStart', function () {
        this.swiperWrapper = document.querySelector('[data-id=swiper-wrapper]');
        var columnsArr = this.swiperWrapper.getElementsByClassName('column');
        new _elementsAnimation.default().contentAnimaionHideMode(columnsArr);
      });
    }
  }]);

  return Widget;
}();

exports.default = Widget;