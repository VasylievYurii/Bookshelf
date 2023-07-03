const refs = {
  openMenuBtn: document.querySelector('.menu-open'),
  closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
  menu: document.querySelector('.mobile-menu'),
  bodyRef: document.querySelector('body'),
  logOutBtn: document.querySelector('.logout-btn'),
  backdropEl: document.querySelector('.backdrop-header'),
};

refs.openMenuBtn.addEventListener('click', onOpenMenu);
refs.closeMenuBtn.addEventListener('click', onCloseMenu);
refs.logOutBtn.addEventListener('click', onLogOutBtn);

function onOpenMenu(e) {
  refs.bodyRef.classList.add('no-scroll');
  refs.menu.classList.add('is-visible');
  refs.backdropEl.classList.remove('is-hidden');
}

function onCloseMenu(e) {
  console.log('remove', e);
  refs.bodyRef.classList.remove('no-scroll');
  refs.menu.classList.remove('is-visible');
  refs.backdropEl.classList.add('is-hidden');
}

function onLogOutBtn() {}
