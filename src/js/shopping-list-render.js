import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

const refs = {
  shoppingListEl: document.querySelector('.sh-list-container'),
  shoppingListLink: document.querySelector('.header-sh-list-link'),
  emptyShoppinglistEl: document.querySelector('.empty-sh-list'),
};

const STORAGE_KEY = 'shopping-list';
const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];


function renderShoppingList(localbooksarray) {
  if (!localbooksarray) {
    clearShoppingList();
    alert('This page is empty, add some books and proceed to order.');
  }
  refs.shoppingListEl.innerHTML = markupShoppingList(localbooksarray);
}

function markupShoppingList(books) {
    const markup = books
    .map(
      ({ _id, book_image, title, list_name, description, author, buy_links }) => `<ul class="shopping-list">
      <li id="${_id}" class="shopping-item">
        <img class="sh-book-img" src="${book_image}" alt="" width="330" height="485"></img>
        <h2 class="sh-book-title">${title}</h2>
        <p class="sh-book-category">${list_name}</p>
        <p class="sh-book-description">${description}</p>
        <p class="sh-book-author">${author}</p>
        <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links.url}">
                                <svg class="sh-soc-icon">
                                  <use href=""></use>
                                </svg>
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links.url}">
                                <svg class="sh-soc-icon">
                                  <use href=""></use>
                                </svg>
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${buy_links.url}">
                            <svg class="sh-soc-icon">
                              <use href=""></use>
                         </svg>
                         </a>
                       </li>
                      </ul>
              </li>
            </ul>`
    )
    .join('\n');
  return markup;
}

function clearShoppingList() {
  refs.shoppingListEl.innerHTML = '';
  refs.emptyShoppinglistEl.style.visibility = 'visible';
}

renderShoppingList(shoppingListArray);