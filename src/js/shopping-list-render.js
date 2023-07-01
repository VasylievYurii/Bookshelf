// import { useBooksApi } from '../services/booksApi';

// const booksApi = useBooksApi();

// const refs = {
//   shoppingListEl: document.querySelector('.sh-list-container'),
//   shoppingListLink: document.querySelector('.header-sh-list-link'),
//   emptyShoppinglistEl: document.querySelector('.empty-sh-list'),
// };

// // refs.shoppingListLink.addEventListener('click', onShoppingListLink);
// // function onShoppingListLink(e) {}

// function renderShoppingList(book) {
//   book = JSON.parse(localStorage.getItem(book));

//   if (!book) {
//     clearShoppingList();
//     alert('This page is empty, add some books and proceed to order.');
//   }
//   refs.shoppingListEl.innerHTML = markupShoppingList(book);
// }

// function markupShoppingList(book) {
//   return `<ul class="shopping-list">
//   <li id="${book._id}" class="shopping-item">
//     <img class="sh-book-img" src="${book.book_image}" alt="" width="330" height="485"></img>
//     <h2 class="sh-book-title">${book.title}</h2>
//     <p class="sh-book-category">${book.list_name}</p>
//     <p class="sh-book-description">${book.description}</p>
//     <p class="sh-book-author">${book.author}</p>
//     <ul class="shopping-links">
//                         <li class="sh-soc-item">
//                           <a class="sh-soc-link" href="${book.buy_links.url}">
//                             <svg class="sh-soc-icon">
//                               <use href=""></use>
//                             </svg>
//                           </a>
//                         </li>
//                         <li class="sh-soc-item">
//                           <a class="sh-soc-link" href="${book.buy_links.url}">
//                             <svg class="sh-soc-icon">
//                               <use href=""></use>
//                             </svg>
//                          </a>
//                         </li>
//                        <li class="sh-soc-item">
//                       <a class="sh-soc-link" href="${book.buy_links.url}">
//                         <svg class="sh-soc-icon">
//                           <use href=""></use>
//                      </svg>
//                      </a>
//                    </li>
//                   </ul>
//           </li>
//         </ul>`;
// }

// function clearShoppingList() {
//   refs.shoppingListEl.innerHTML = '';
//   refs.emptyShoppinglistEl.style.visibility = 'visible';
// }
