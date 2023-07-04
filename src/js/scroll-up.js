import throttle from 'lodash.throttle';

const scrollUp = {
  el: document.querySelector('.js-sroll-up'),

  show() {
    this.el.classList.remove('visually-hidden');
  },
  hide() {
    this.el.classList.add('visually-hidden');
  },
  scrollListener() {
    window.addEventListener(
      'scroll',
      throttle(() => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY < 500 ? this.hide() : this.show();
      }, 300)
    );
  },
};

scrollUp.scrollListener();
