import { useBooksApi } from '../services/booksApi';
import {insertModalBook, onModalOpen} from './pop-up-book'

const booksApi = useBooksApi();
const categoryContainerRef = document.querySelector('.section-categories-list');

async function createCategoriesMarkup(category) {
  try {
    const categoryMarkup = await Promise.all(
      category.map(async ({ books }) => {
        const bookMarkup = await Promise.all(
          books.map(
            async ({ book_image, title, author, _id }) => `
              <li class="one-book">
                <div value=${_id} class="book-item">
                  <div class="img-box">
                    <img src="${book_image}" alt="Book cover" />
                    <div class="overlay">
                      <p class="overlay-text">quick view </p>
                    </div>
                  </div>
                  <h3 class="book-title">${title}</h3>
                  <p class="book-author">${author}</p>
                </div>
              </li>
            `
          )
        );

        return `
        
              ${bookMarkup.join('\n')}
          
        `;
      })
    );

    return categoryMarkup.join('\n');
  } catch (error) {
    console.log(error);
    return '';
  }
}

const getTopBooksByCategories = async () => {
  try {
    const res = await booksApi.getTopBooks();
    const markup = await createCategoriesMarkup(res);
    categoryContainerRef.innerHTML = markup;
    categoryContainerRef.addEventListener('click', onBookSelect);
    function onBookSelect(evt) {
      const bookItem = evt.target.closest('.book-item');
          if (!bookItem) {
            return
          }
          const bookId = bookItem.getAttribute('value');
      booksApi
        .getBookById(bookId)
        .then(insertModalBook)
        .catch(error => console.log(error));
      onModalOpen();
    }
      } catch (error) {
    console.log(error);
  }
};

getTopBooksByCategories();
