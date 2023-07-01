import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

function createCategoriesMarkup(category) {
  const categoryMarkup = category
    .map(({ list_name, books }) => {
      const bookMarkup = books
        .map(
          ({ book_image, title, author }) => `
          <li class="">
            <a href="#" class="book-item">
              <div class="img-box">
                <img src="${book_image}" alt="Book cover" />
                <div class="overlay">
                  <p class="overlay-text">quick view </p>
                </div>
              </div>
              <h3 class="book-title">${title}</h3>
              <p class="book-author">${author}</p>
            </a>
          </li>
        `
        )
        .join('\n');

      return `
        <li class=''>
          <h3 class=''>${list_name}</h3>
          <ul class='topBookslist list'>
            ${bookMarkup}
          </ul>
          <button type='button' class='btn'>See more</button>
        </li>
      `;
    })
    .join('\n');

  console.log(categoryMarkup);
  return categoryMarkup;

}

const getTopBooksByCategories = () => {
  booksApi
    .getTopBooks()
    .then(res => {
      console.log('topBooks:', res);
      const markup = createCategoriesMarkup(res);
    })
    .catch(err => {
      console.log(err);
    });
};

getTopBooksByCategories();
