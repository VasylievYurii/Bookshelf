import { useBooksApi } from '../services/booksApi';
import amazon from '../images/stores/amazon.png';
import amazon2x from '../images/stores/amazon@2x.png';
import book from '../images/stores/book.png';
import book2x from '../images/stores/book@2x.png';
import bookShop from '../images/stores/book-shop.png';
import bookShop2x from '../images/stores/book-shop@2x.png';
console.log(useBooksApi);
const modalContainerEl = document.querySelector('.container-popup');
function renderModal(book) {
  return `
  <div class="modal-content-container">
  <div class="img-container">
   <img class="img-modal" src="" />
   </div> 
   <div class="modal-text-container">
    <h1 class="book-header">HELLO BEAUTIFUL</h1>
    <p class="book-author">Ann Napolitano</p>
    <p class="book-description">In a homage to Louisa May Alcott's "Little Women," a young man's dark past resurfaces as he gets to the know the family of his college sweetheart.</p>
    <div class="book-stores">
    <img
      class="book-modal"
      srcset="${amazon} 1x, ${amazon2x} 2x"
      src="${amazon}";
      alt="Amazon shop"
      width="62"
      height="19"
    />
    <img
      class="book-modal"
      srcset="${book} 1x, ${book2x} 2x"
      src="${book}"
      alt="Shop"
      width="33"
      height="32"
    />
    <img
      srcset="
        ${bookShop} 1x,
        ${bookShop2x} 2x
      "
      src="${bookShop2x}"
      alt="Book shop"
      width="38"
      height="36"
    />
  </div>
    </div>
    </div>
    `;
}
function insertModalBook(book) {
  modalContainerEl.insertAdjacentHTML('afterbegin', renderModal(book));
}
const modalBook = insertModalBook();
