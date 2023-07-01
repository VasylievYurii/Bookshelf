import { useBooksApi } from '../services/booksApi';
import amazon from '../images/stores/amazon.png';
import amazon2x from '../images/stores/amazon@2x.png';
import bookStore from '../images/stores/book.png';
import bookStore2x from '../images/stores/book@2x.png';
import bookShop from '../images/stores/book-shop.png';
import bookShop2x from '../images/stores/book-shop@2x.png';

const STORAGE_KEY = 'shopping-list';
const modalContainerEl = document.querySelector('.container-popup');
const btnAddEl = document.querySelector('button[data-action="add"]');
const btnRemoveEl = document.querySelector('button[data-action="remove"]');
const successTextEl = document.querySelector('.modal-congrats-text');
// let bookID = '';
const booksApi = useBooksApi();
let bookForSoppingList = {};

const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

btnAddEl.addEventListener('click', addToLocalStorage);

function onBookSelect(e) {
  //   bookID = e.target.value;
  let bookID = '643282b2e85766588626a0f2';
  booksApi
    .getBookById(bookID)
    .then(insertModalBook)
    .catch(error => console.log(error));
}

onBookSelect();

function renderModal(book) {
  bookForSoppingList = book;
  const { book_image, title, author, description, buy_links } = book;

  return `
  <div class="modal-content-container">
  <div class="img-container-pop-up">
   <img class="img-modal" src="${book_image}" />
   </div> 
   <div class="modal-text-container">
    <h1 class="book-header">${title}</h1>
    <p class="book-author">${author}</p>
    <p class="book-description">${description}</p>
    <div class="book-stores">
    
    <a href="${buy_links[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
    <img
      class="book-modal"
      srcset="${amazon} 1x, ${amazon2x} 2x"
      src="${amazon}";
      alt="Amazon shop"
      width="62"
      height="19"
    />
    </a>
    <a href="${buy_links[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
    <img
      class="book-modal"
      srcset="${bookStore} 1x, ${bookStore2x} 2x"
      src="${bookStore}"
      alt="Shop"
      width="33"
      height="32"
    />
    </a>
    <a href="${buy_links[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
    <img
    class="book-modal"
      srcset="
        ${bookShop} 1x,
        ${bookShop2x} 2x
      "
      src="${bookShop2x}"
      alt="Book shop"
      width="38"
      height="36"
    />
    </a>
  </div>
    </div>
    </div>
    `;
}

function insertModalBook(item) {
  modalContainerEl.insertAdjacentHTML('afterbegin', renderModal(item));
}

function addToLocalStorage() {
  shoppingListArray.push(bookForSoppingList);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingListArray));
}
