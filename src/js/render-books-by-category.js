import { useBooksApi } from '../services/booksApi';
import { insertModalBook, onModalOpen } from './pop-up-book';
import {addClassForBookList} from './condition-for-categories-render';

const booksApi = useBooksApi();

const sectionCategoriesEl = document.querySelector('.section-categories');
const sectionBooksEl = document.querySelector('.section-books');
const sectionBooksTitleEl = document.querySelector('.section-books-title');
const booksListEl = document.querySelector('.section-books-list');

//---Раскоментить для ручного запуска функции
// renderBooksByCategory('Paperback Nonfiction'); 

function makeMarkupForBooks(books) {
    let oneBook = addClassForBookList ();
  const markup = books
    .map(
      ({ book_image, title, author, _id }) => `<li class="${oneBook}">
    <button type="button" class='book-item' data-value="${_id}">
      <div class='thumb'>
        <img src='${book_image}' alt='Book cover' />
        <div class='overlay'>
          <p class='overlay-text'>quick view </p>
        </div>
      </div>
      <h3 class='book-title'>${title}</h3>
      <p class='book-author'>${author}</p>
    </button>
  </li>`
    )
    .join('\n');
  return markup;
}

function makeMarkupForTitle(title) {
  const arrFromTitle = title.split(' ');
  if (arrFromTitle.length < 2) {
    return `${title}`;
  }
  const lastWord = arrFromTitle.pop();
  return `${arrFromTitle.join(' ')} <span class="accent">${lastWord}</span>`;
}

async function renderBooksByCategory(category) {
  try {
    const res = await booksApi.getBooksByCategory(category);
    booksListEl.innerHTML = makeMarkupForBooks(res);
    sectionBooksTitleEl.innerHTML = makeMarkupForTitle(category);
    hideElement(sectionCategoriesEl);
    showElement(sectionBooksEl);
    booksListEl.addEventListener('click', onBookSelect);
  } catch (err) {
    console.log(err);
  }
}

function onBookSelect(evt) {
  const bookItem = evt.target.closest('.book-item');
  if (!bookItem) {
    return;
  }
  const bookId = bookItem.getAttribute('data-value');
  booksApi
    .getBookById(bookId)
    .then(insertModalBook)
    .catch(error => console.log(error));
  onModalOpen();
}

function hideElement(elem) {
  elem.classList.add('hidden');
}

function showElement(elem) {
  elem.classList.remove('hidden');
}

export { makeMarkupForBooks, renderBooksByCategory, onBookSelect };
