export default class Widget {
  constructor(swiper) {
    this.swiper = swiper;
    this.swiperWrapper = document.querySelector('[data-id=swiper-wrapper]');
    this.clickerCount = 1;
  }

  create() {
    this.createListeners();
  }


  createListeners() {
    this.swiper.navigation.prevEl.addEventListener("click", () => {
      console.log('предыдущий слайд');
      const imgArr = this.swiperWrapper.getElementsByClassName('img');

      this.clickerCount -= 1;

      imgArr[this.clickerCount].style.transform = 'translateX(100vw)';
      imgArr[this.clickerCount - 1].style.transform = 'translateX(0)';
    });

    this.swiper.navigation.nextEl.addEventListener("click", () => {
      const imgArr = this.swiperWrapper.getElementsByClassName('img');

      console.log('следующий слайд');

      imgArr[this.clickerCount - 1].style.transform = 'translateX(-100vw)';
      imgArr[this.clickerCount].style.transform = 'translateX(0)';

      this.clickerCount += 1;
    });

    this.swiper.pagination.el.addEventListener("click", (event) => {
      const imgArr = this.swiperWrapper.getElementsByClassName('img');
      // На какую страницу сейчас переходим
      this.clickerCount = event.target.getAttribute('aria-label').split(' ')[3];
      this.clickerCount = parseInt(this.clickerCount, 10);
      console.log(`Нажали ${this.clickerCount}`);

      switch (this.clickerCount) {
        case 1:
          imgArr[0].style.transform = 'translateX(0)';
          imgArr[1].style.transform = 'translateX(100vw)';
          imgArr[2].style.transform = 'translateX(100vw)';
          imgArr[3].style.transform = 'translateX(100vw)';
          break;
        case 2:
          imgArr[0].style.transform = 'translateX(-100vw)';
          imgArr[1].style.transform = 'translateX(0)';
          imgArr[2].style.transform = 'translateX(100vw)';
          imgArr[3].style.transform = 'translateX(100vw)';
          break;
        case 3:
          imgArr[0].style.transform = 'translateX(-100vw)';
          imgArr[1].style.transform = 'translateX(-100vw)';
          imgArr[2].style.transform = 'translateX(0)';
          imgArr[3].style.transform = 'translateX(100vw)';
          break;
        case 4:
          imgArr[0].style.transform = 'translateX(-100vw)';
          imgArr[1].style.transform = 'translateX(-100vw)';
          imgArr[2].style.transform = 'translateX(-100vw)';
          imgArr[3].style.transform = 'translateX(0)';
          break;
        default:
          console.error("Нет таких значений");
      }
    });
  }
}
