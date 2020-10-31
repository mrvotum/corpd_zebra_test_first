"use strict";

var _swiperBundleEsmBrowserMin = _interopRequireDefault(require("https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js"));

var _widget = _interopRequireDefault(require("./widget.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swiper = new _swiperBundleEsmBrowserMin.default('.swiper-container', {
  effect: 'fade',
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var widget = new _widget.default(swiper);
widget.create();