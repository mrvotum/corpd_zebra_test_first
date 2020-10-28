import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
import Widget from '../js/widget.js';

const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const widget = new Widget(swiper);
widget.create();
