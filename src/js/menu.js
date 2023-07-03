(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', onOpenMenu);
  refs.closeMenuBtn.addEventListener('click', onCloseMenu);

  function onOpenMenu(e) {
    console.log('e', e);
    refs.menu.classList.remove('is-hidden');
  }

  function onCloseMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();
