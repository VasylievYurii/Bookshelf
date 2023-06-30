import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

function makeMarkupForBooks({ list_name, books }) {
  const markup = books
    .map(
      ({ book_image, title, author }) => `<li>
    <a href='#' class='book-item'>
      <div class='img-box'>
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
  console.log(markup);
  return markup;
}

const getTopBooksByCategories = (e, containerRef) => {
  booksApi
    .getTopBooks()
    .then(res => {
      console.log('topBooks :', res);
      containerRef.innerHTML = makeMarkupForBooks(res);
    })
    .catch(err => {
      console.log(err);
    });
};

getTopBooksByCategories();
