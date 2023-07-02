const homeLink = document.querySelector('.header-link-home');
const shoppingListLink = document.querySelector('.header-shopping-link');

homeLink.addEventListener('click', function (event) {
  homeLink.classList.add('current');
  shoppingListLink.classList.remove('current');
});

shoppingListLink.addEventListener('click', function (event) {
  shoppingListLink.classList.add('current');
  homeLink.classList.remove('current');
});
