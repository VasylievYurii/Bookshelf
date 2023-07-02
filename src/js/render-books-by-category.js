import { useBooksApi } from '../services/booksApi';
// import booksTemplate from '../templates/main-book.hbs';

const booksApi = useBooksApi();

// Пока сделал без хендлбара - нужно разобраться, почему не находит трансформер для шаблона, из-за этого не импортирует его

function makeMarkupForBooks(books) {
  const markup = books
    .map(
      ({ book_image, title, author, _id }) => `<li>
    <a href='#' class='book-item' data-value="${_id}">
      <div class='thumb'>
        <img src='${book_image}' alt='Book cover' />
        <div class='overlay'>
          <p class='overlay-text'>quick view </p>
        </div>
      </div>
      <h3 class='book-title'>${title}</h3>
      <p class='book-author'>${author}</p>
    </a>
  </li>`
    )
    .join('\n');
  // console.log(markup);
  return markup;
}

function renderBooksByCategory(category) {
  booksApi
    .getBooksByCategory(category)
    .then(res => {
      // console.log('res:', res);
      booksListEl.innerHTML = makeMarkupForBooks(res);
    })
    .catch(err => {
      console.log(err);
    });
}

const booksListEl = document.querySelector('.section-books-list');
renderBooksByCategory('Paperback Nonfiction');

export { makeMarkupForBooks };