import ElementsAnimation from './elementsAnimation.js';

export default class Widget {
  constructor(swiper) {
    this.swiper = swiper;
    this.clickerCount = 1;
  }

  create() {
    new ElementsAnimation(0, 0).imageAnimaion();
    this.createListeners(this.swiper, this.kek);
  }

  createListeners() {
    this.swiper.on('slideChange', function (swiper) {
      new ElementsAnimation(swiper.previousIndex, swiper.activeIndex).imageAnimaion();
    });

    this.swiper.on('transitionEnd', function() {
      this.swiperWrapper = document.querySelector('[data-id=swiper-wrapper]');
      const columnsArr = this.swiperWrapper.getElementsByClassName('swiper-column');

      setTimeout(() => {
        new ElementsAnimation().contentAnimaionShowMode(columnsArr);
      }, 300);
    });

    this.swiper.on('transitionStart', function() {
      this.swiperWrapper = document.querySelector('[data-id=swiper-wrapper]');
      const columnsArr = this.swiperWrapper.getElementsByClassName('swiper-column');

      new ElementsAnimation().contentAnimaionHideMode(columnsArr);
    });
  }
}
