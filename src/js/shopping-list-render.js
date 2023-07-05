// import { useBooksApi } from '../services/booksApi';
import amazon from '../images/stores/amazon.png';
import amazon2x from '../images/stores/amazon@2x.png';
import bookStore from '../images/stores/book.png';
import bookStore2x from '../images/stores/book@2x.png';
import bookShop from '../images/stores/book-shop.png';
import bookShop2x from '../images/stores/book-shop@2x.png';
import sprite from '../images/sprite.svg';
import { Notify } from 'notiflix';
import {getChangeStoreColor, getStartThemeColor} from './get-change-store-color';

const optionsNotiflix = {
  timeout: 3000,
  // messageMaxLength: 110,
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.3)',
  width: '500px',
  position: 'center-center',
  borderRadius: '20px',
  opacity: 0.7,
  fontSize: '22px',
  cssAnimation: true,
  cssAnimationDuration: 300,
  cssAnimationStyle: 'zoom', // 'fade'
  // 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  // failure - backOverlayColor: 'rgba(255,85,73,0.2)',
  // warning - backOverlayColor: 'rgba(238,191,49,0.2)',
};

const refs = {
  shoppingListEl: document.querySelector('.shopping-list'),
  shoppingListLink: document.querySelector('.header-sh-list-link'),
  emptyShoppinglistEl: document.querySelector('.empty-sh-list'),
};

const STORAGE_KEY = 'shopping-list';
const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
let defaultDescription;
let defaultBookImage;

function changeToDefaultDescription(description) {
  if (description === '') {
    defaultDescription = `<p class="sh-book-description">Unfortunately,
      there is no description for this book</p>`;
  } else {
    defaultDescription = description;
  }
  return defaultDescription;
}

function changeToDefaultBookImg(book_image) {
  if (book_image) {
    defaultBookImage = `<img class="sh-book-img" src="${book_image}" alt="Boook image" loading="lazy"></img>`;
  } else {
    defaultBookImage = `<div class="sh-default-img width="265" height="198"" style="background-color: #F0F0F0;">
      <svg class="sh-default-svg-icon" >
      <use href="${sprite}#default-book"></use>
    </svg>
    </div>`;
  }
  return defaultBookImage;
}
function renderShoppingList(localBooksArray) {
  if (!localBooksArray.length) {
    refs.emptyShoppinglistEl.style.display = 'block';
    Notify.info(
      'This page is empty, add some books and proceed to order.',
      optionsNotiflix
    );
    return;
  }
  markupShoppingList(localBooksArray);
}

function markupShoppingList(books) {
  const markup = books
    .map(
      ({
        _id,
        book_image,
        title,
        list_name,
        description,
        author,
        buy_links,
      }) => {
        changeToDefaultBookImg(book_image);
        changeToDefaultDescription(description);
        return `
      <li id="${_id}" class="shopping-list-item">
          <img class="sh-book-img" src="${book_image}" alt="Boook image" loading="lazy"></img>
          <div class="sh-wrap">
              <div class="sh-book-info-wrap">
               <button class="sh-list-delete-btn" type="button">
                    <svg class="sh-list-delete-icon" width="18" height="18">
                    <use href="${sprite}#trash"></use>
                    </svg>
                  </button>
                <h2 class="sh-book-title">${title}</h2>
                <p class="sh-book-category">${list_name}</p>
                <div class="div-text-container">
                <p class="sh-book-description">${defaultDescription}</p>
                </div>
             </div>
             <div class="sh-book-info-link-wrap">
         <p class="sh-book-author">${author}</p>
         <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links[0].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${amazon} 1x, ${amazon2x} 2x"
            src="${amazon}" class="amazon-store"
            alt="Amazon Store ${buy_links[0].name}"
            loading="lazy"
            />
            
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${bookStore} 1x, ${bookStore2x} 2x"
                            src="${bookStore}" class="apple-store"
                            alt="Apple Store ${buy_links[1].name}"
                            loading="lazy"
                            />
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${buy_links[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${bookShop} 1x, ${bookShop2x} 2x"
            src="${bookShop}" class="book-shop"
            alt="Book Shop ${buy_links[4].name}"
            loading="lazy"
            />
                         </a>
                       </li>
                      </ul>
      </div>
          </div>
              </li>
           `;
      }
    )
    .join('\n');
  refs.shoppingListEl.insertAdjacentHTML('beforeend', markup);
  getStartThemeColor();
  getChangeStoreColor();
}

renderShoppingList(shoppingListArray);

const shopingList = document.querySelector('.shopping-list');

shopingList.addEventListener('click', onDelBtnClick);

function onDelBtnClick(evt) {
  if (evt.target.nodeName === 'BUTTON' || evt.target.nodeName === 'use') {
    const index = shoppingListArray.findIndex(
      item =>
        item._id ===
        evt.target.closest('.shopping-list-item').getAttribute('id')
    );

    if (index !== -1) {
      shoppingListArray.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingListArray));
    }
    refs.shoppingListEl.innerHTML = '';
    renderShoppingList(shoppingListArray);
  }
}
