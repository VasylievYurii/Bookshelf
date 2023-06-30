import { useBooksApi } from '../services/booksApi';
console.log(useBooksApi);
const modalContainerEl = document.querySelector('.container-popup');
function renderModal(book) {
  return `
   <div class="img-container">
   <img class="img-modal" src="" />
   </div> 
    <h1 class="book-header">HELLO BEAUTIFUL</h1>
    <p class="book-author">Ann Napolitano</p>
    <p class="book-description">In a homage to Louisa May Alcott's "Little Women," a young man's dark past resurfaces as he gets to the know the family of his college sweetheart.</p>
    <div class="icons-modal">
      <svg class="modal-icon" width="24" height="24">
    <use href="./images/sprite.svg#close"></use>
  </svg>
    <svg class="modal-icon" width="24" height="24">
    <use href="./images/sprite.svg#close"></use>
  </svg>
    <svg class="modal-icon" width="24" height="24">
    <use href="./images/sprite.svg#close"></use>
  </svg>
    </div>
    `;
}
function insertModalBook(book) {
  modalContainerEl.insertAdjacentHTML('afterbegin', renderModal(book));
}

const modalBook = insertModalBook();