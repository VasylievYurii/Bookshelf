import { useBooksApi } from '../services/booksApi';
import { Notify } from 'notiflix';

const optionsNotiflix = {
  width: '300px',
  position: 'center-top',
  borderRadius: '25px',
};

const booksApi = useBooksApi();

const refs = {
  shoppingListEl: document.querySelector('.sh-list-container'),
  shoppingListLink: document.querySelector('.header-sh-list-link'),
  emptyShoppinglistEl: document.querySelector('.empty-sh-list'),
};

refs.emptyShoppinglistEl.style.visibility = 'hidden';

console.log(refs.emptyShoppinglistEl);

const STORAGE_KEY = 'shopping-list';
const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

function renderShoppingList(localBooksArray) {
  if (!localBooksArray.length) {
    refs.emptyShoppinglistEl.style.visibility = 'visible';
    clearShoppingList();
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
        return `<ul class="shopping-list">
      <li id="${_id}" class="shopping-item">
        <img class="sh-book-img" src="${book_image}" alt="" width="330" height="485"></img>
        <h2 class="sh-book-title">${title}</h2>
        <p class="sh-book-category">${list_name}</p>
        <p class="sh-book-description">${description}</p>
        <p class="sh-book-author">${author}</p>
        <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links[0].url}" rel="noopener noreferrer nofollow"
            target="_blank"> 
            <img srcset="photo.jpg 1x, photo@2x.jpg 2x" 
            src="photo.jpg"
            alt="Опис зображення для усіх версій"/>
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="photo.jpg 1x, photo@2x.jpg 2x" src="photo.jpg" alt="Опис зображення для усіх версій"/>
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${buy_links[2].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="photo.jpg 1x, photo@2x.jpg 2x" src="photo.jpg" alt="Опис зображення для усіх версій"/>
                         </a>
                       </li>
                      </ul>
              </li>
            </ul>`;
      }
    )
    .join('\n');
  refs.shoppingListEl.insertAdjacentHTML('beforeend', markup);
}

function clearShoppingList() {
  refs.shoppingListEl.innerHTML = '';
}

renderShoppingList(shoppingListArray);
