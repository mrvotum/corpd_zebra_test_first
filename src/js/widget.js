import ElementsAnimation from './elementsAnimation';

export default class Widget {
  constructor(swiper) {
    this.swiper = swiper;
    this.swiperWrapper = document.querySelector('[data-id=swiper-wrapper]');
    this.clickerCount = 1;
  }

  create() {
    new ElementsAnimation(0, 0).imageAnimaion();
    this.createListeners(this.swiper, this.kek);
  }

  createListeners() {
    this.swiper.on('slideChange', function (swiper) {
      // console.log(`Это индекс слайда текущего: ${swiper.activeIndex} + 1,
      // а это старого: ${swiper.previousIndex} + 1`);

      new ElementsAnimation(swiper.previousIndex, swiper.activeIndex).imageAnimaion();
    });
  }
}
