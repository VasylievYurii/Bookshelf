import { useBooksApi } from '../services/booksApi';
import amazon from '../images/stores/amazon.png';
import amazon2x from '../images/stores/amazon@2x.png';
import bookStore from '../images/stores/book.png';
import bookStore2x from '../images/stores/book@2x.png';
import bookShop from '../images/stores/book-shop.png';
import bookShop2x from '../images/stores/book-shop@2x.png';

const STORAGE_KEY = 'shopping-list';

const modalContainerEl = document.querySelector('.container-popup-for-book');
const btnAddEl = document.querySelector('button[data-action="add"]');
const btnRemoveEl = document.querySelector('button[data-action="remove"]');
const successTextEl = document.querySelector('.modal-congrats-text');
const closeModalEl = document.querySelector('.close-modal');
const backdropEl = document.querySelector('.backdrop-modal');

const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

let defaultImg;

import sprite from '../images/sprite.svg';

function onDefaultImg(bookImg) {
  if (bookImg) {
    defaultImg = `<img class="img-modal" src="${bookImg}" />`;
  } else {
    defaultImg = `<div class="img-modal" style="background-color: #f0f0f0;">
      <svg class="default-book-pop-up" >
      <use href="${sprite}#default-book"></use>
    </svg>
    </div>`;
  }
  return defaultImg;
}

function renderModal(book) {
  const { book_image, title, author, description, buy_links, _id } = book;

  onDefaultImg(book_image);

  return `
  <div class="modal-content-container" value="${_id}">
  <div class="img-container-pop-up">
  ${defaultImg}
   </div> 
   <div class="modal-text-container">
    <h1 class="book-header">${title}</h1>
    <p class="book-author">${author}</p>
    <p class="book-description">${description}</p>
    <div class="book-stores">
    
    <a href="${buy_links[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
    <img
      class="book-modal amazon-logo"
      srcset="${amazon} 1x, ${amazon2x} 2x"
      src="${amazon}";
      alt="Amazon shop"
    />
    </a>
    <a href="${buy_links[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
    <img
      class="book-modal apple-book-logo"
      srcset="${bookStore} 1x, ${bookStore2x} 2x"
      src="${bookStore}"
      alt="Shop"
    />
    </a>
    <a href="${buy_links[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
    <img
    class="book-modal book-shop-logo"
      srcset="
        ${bookShop} 1x,
        ${bookShop2x} 2x
      "
      src="${bookShop2x}"
      alt="Book shop"
    />
    </a>
  </div>
    </div>
    </div>
    `;
}

let bookForShoppingList = {};

export function insertModalBook(item) {
  bookForShoppingList = item;
  modalContainerEl.insertAdjacentHTML('afterbegin', renderModal(item));
}

btnAddEl.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  makeRemoveBtnVisible();
  addToLocalStorage();
}

function makeRemoveBtnVisible() {
  btnAddEl.classList.add('visually-hidden');
  btnRemoveEl.classList.remove('visually-hidden');
  successTextEl.classList.remove('visually-hidden');
}

function addToLocalStorage() {
  shoppingListArray.push(bookForShoppingList);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingListArray));
}

btnRemoveEl.addEventListener('click', onRemoveBtnClick);

function onRemoveBtnClick() {
  makeAddBtnVisible();
  removeFromLocalStorage();
}

function makeAddBtnVisible() {
  btnRemoveEl.classList.add('visually-hidden');
  successTextEl.classList.add('visually-hidden');
  btnAddEl.classList.remove('visually-hidden');
}

function removeFromLocalStorage() {
  const index = shoppingListArray.findIndex(
    item => item._id === bookForShoppingList._id
  );
  if (index !== -1) {
    shoppingListArray.splice(index, 1);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingListArray));
  }
}

closeModalEl.addEventListener('click', onMouseClose);
backdropEl.addEventListener('click', onMouseClose);

function onModalClose() {
  backdropEl.classList.add('is-hidden');
  makeAddBtnVisible();
  modalContainerEl.innerHTML = '';
  window.removeEventListener('keydown', onEscPress);
}

function onMouseClose(e) {
  if (e.target === e.currentTarget) {
    onModalClose();
  }
}

function onEscPress(e) {
  if (e.key === 'Escape') {
    onModalClose();
  }
}

export function onModalOpen() {
  window.addEventListener('keydown', onEscPress);
  backdropEl.classList.remove('is-hidden');
}
