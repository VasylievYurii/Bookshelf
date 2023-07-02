(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);

  function openMenu() {
    refs.menu.classList.remove('is-hidden');
  }

  function closeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();
