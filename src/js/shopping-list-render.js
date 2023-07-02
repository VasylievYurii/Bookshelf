import { useBooksApi } from '../services/booksApi';
import amazon from '../images/stores/amazon.png';
import amazon2x from '../images/stores/amazon@2x.png';
import bookStore from '../images/stores/book.png';
import bookStore2x from '../images/stores/book@2x.png';
import bookShop from '../images/stores/book-shop.png';
import bookShop2x from '../images/stores/book-shop@2x.png';
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

console.log(refs.emptyShoppinglistEl);

const STORAGE_KEY = 'shopping-list';
const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

function renderShoppingList(localBooksArray) {
  if (!localBooksArray.length) {
    // makeEmptyShoppingListPage();
    refs.emptyShoppinglistEl.style.visibility = 'visible';
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
        return `
      <li id="${_id}" class="shopping-item">
        <img class="sh-book-img" src="${book_image}" alt="" width="330" height="485"></img>
        <div>
            <button class="sh-list-delete-btn" type="button">
              <svg class="sh-list-delete-icon" width="18" height="18"<symbol id="icon-trash" viewBox="0 0 32 32">
<path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2" d="M12 4h8M4 8h24M25.334 8l-0.936 14.026c-0.14 2.104-0.21 3.156-0.664 3.954-0.406 0.703-0.997 1.259-1.709 1.61l-0.023 0.010c-0.826 0.4-1.88 0.4-3.99 0.4h-4.024c-2.11 0-3.164 0-3.99-0.4-0.735-0.361-1.326-0.917-1.722-1.601l-0.010-0.019c-0.454-0.798-0.524-1.85-0.664-3.954l-0.936-14.026M13.334 14v6.666M18.666 14v6.666"></path>
</symbol>>
              </svg>
            </button>
          </div>
        <h2 class="sh-book-title">${title}</h2>
        <p class="sh-book-category">${list_name}</p>
        <p class="sh-book-description">${description}</p>
        <p class="sh-book-author">${author}</p>
        <ul class="shopping-links">
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links[0].url}" rel="noopener noreferrer nofollow"
            target="_blank"> 
            <img srcset="${amazon} 1x, ${amazon2x} 2x" 
            src="${amazon}"
            alt="Amazon Store ${buy_links[0].name}"/>
                              </a>
                            </li>
                            <li class="sh-soc-item">
                              <a class="sh-soc-link" href="${buy_links[1].url}" rel="noopener noreferrer nofollow"
            target="_blank">
                            <img srcset="${bookStore} 1x, ${bookStore2x} 2x" 
                            src="${bookStore}" 
                            alt="Apple Store ${buy_links[1].name}"/>
                             </a>
                            </li>
                           <li class="sh-soc-item">
                          <a class="sh-soc-link" href="${buy_links[4].url}" rel="noopener noreferrer nofollow"
            target="_blank">
            <img srcset="${bookShop} 1x, ${bookShop2x} 2x" 
            src="${bookShop}" 
            alt="Book Shop ${buy_links[4].name}"/>
                         </a>
                       </li>
                      </ul>
              </li>
           `;
      }
    )
    .join('\n');
  refs.shoppingListEl.insertAdjacentHTML('beforeend', markup);
}

// function makeEmptyShoppingListPage() {
//   const emptyShPage = `
//             <img
//               srcset="
//                 ./images/book-column@1x.png 1x,
//                 ./images/book-column@2x.png 2x
//               "
//               src="./images/book-column@1x.png"
//               alt="book-column"
//             />`;
//   refs.emptyShoppinglistEl.insertAdjacentHTML('beforeend', emptyShPage);
//   return emptyShPage;
// }

renderShoppingList(shoppingListArray);
