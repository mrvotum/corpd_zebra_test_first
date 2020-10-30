export default class ElementsAnimation {
  constructor(lastLocation, currentLocation) {
    this.lastLocation = lastLocation + 1;
    this.currentLocation = currentLocation + 1;
  }

  imageAnimaion() {
    console.log(`Текущий слайд: "${this.currentLocation}"; был: "${this.lastLocation}"`);
    this.newSlide = document.querySelector(`[data-id=img__holder_${this.currentLocation}]`);
    this.oldSlide = document.querySelector(`[data-id=img__holder_${this.lastLocation}]`);

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

    setTimeout(() => {
      this.oldSlide.style.transition = '0.6s';
      this.newSlide.style.transition = '0.6s';
      this.newSlide.style.transform = 'translateX(0)';
    }, 10);
    setTimeout(() => {
      this.oldSlide.style.transition = 'none';
      // this.newSlide.style.transition = 'none';
    }, 600);
  }
}
