const refs = {
  openMenuBtn: document.querySelector('.menu-open'),
  closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
  menu: document.querySelector('.mobile-menu'),
  bodyRef: document.querySelector('body'),
  logOutBtn: document.querySelector('.logout-btn'),
};

refs.openMenuBtn.addEventListener('click', onOpenMenu);
refs.closeMenuBtn.addEventListener('click', onCloseMenu);
refs.logOutBtn.addEventListener('click', onLogOutBtn);

function onOpenMenu(e) {
  // console.log('e', e);
  refs.bodyRef.classList.add('no-scroll');
  refs.menu.classList.add('is-visible');
}

function onCloseMenu(e) {
  console.log('remove', e);
  refs.bodyRef.classList.remove('no-scroll');
  refs.menu.classList.remove('is-visible');
}

function onLogOutBtn() {}
