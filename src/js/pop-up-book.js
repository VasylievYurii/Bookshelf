import { useBooksApi } from '../services/booksApi';
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
    </div>
    <img
      class="book-modal"
      src="./images/stores/amazon.png"
      alt="Amazon shop"
      width="62"
      height="19"
    />
    </div>
    
    `;
}
function insertModalBook(book) {
  modalContainerEl.insertAdjacentHTML('afterbegin', renderModal(book));
}

const modalBook = insertModalBook();
