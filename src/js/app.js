import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

// const swiperContainer = document.querySelector('[data-id=swiper-container]');
// setTimeout(() => {
//   swiperContainer.style.backgroundColor = 'red';
// }, 900);
// console.log(swiperContainer);

const swiperWrapper = document.querySelector('[data-id=swiper-wrapper]');
// console.log(swiperWrapper.childElementCount);

var swiper = new Swiper('.swiper-container', {
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

let clickerCount = 1;

swiper.navigation.prevEl.addEventListener("click", (event) => {
  console.log('предыдущий слайд');
  const imgArr = swiperWrapper.getElementsByClassName('img');
  
  clickerCount -= 1;

  imgArr[clickerCount].style.transform = 'translateX(100vw)';
  imgArr[clickerCount - 1].style.transform = 'translateX(0)';
});

swiper.navigation.nextEl.addEventListener("click", (event) => {
  const imgArr = swiperWrapper.getElementsByClassName('img');

  console.log('следующий слайд');
  
  imgArr[clickerCount - 1].style.transform = 'translateX(-100vw)';
  imgArr[clickerCount].style.transform = 'translateX(0)';

  clickerCount += 1;
});

swiper.pagination.el.addEventListener("click", (event) => {
  const imgArr = swiperWrapper.getElementsByClassName('img');
  // На какую страницу сейчас переходим
  clickerCount = event.target.getAttribute('aria-label').split(' ')[3];
  clickerCount = parseInt(clickerCount, 10);
  console.log(`Нажали ${clickerCount}`);

  switch (clickerCount) {
    case 1:
      console.log(`case 1 = ${clickerCount}`);
      
      imgArr[0].style.transform = 'translateX(0)';
      imgArr[1].style.transform = 'translateX(100vw)';
      imgArr[2].style.transform = 'translateX(100vw)';
      imgArr[3].style.transform = 'translateX(100vw)';
      break;
    case 2:
      console.log(`case 2 = ${clickerCount}`);

      imgArr[0].style.transform = 'translateX(-100vw)';
      imgArr[1].style.transform = 'translateX(0)';
      imgArr[2].style.transform = 'translateX(100vw)';
      imgArr[3].style.transform = 'translateX(100vw)';
      break;
    case 3:
      console.log(`case 3 = ${clickerCount}`);

      imgArr[0].style.transform = 'translateX(-100vw)';
      imgArr[1].style.transform = 'translateX(-100vw)';
      imgArr[2].style.transform = 'translateX(0)';
      imgArr[3].style.transform = 'translateX(100vw)';
      break;
    case 4:
      console.log(`case 4 = ${clickerCount}`);

      imgArr[0].style.transform = 'translateX(-100vw)';
      imgArr[1].style.transform = 'translateX(-100vw)';
      imgArr[2].style.transform = 'translateX(-100vw)';
      imgArr[3].style.transform = 'translateX(0)';
      break;
    default:
      console.error( "Нет таких значений" );
  }
});