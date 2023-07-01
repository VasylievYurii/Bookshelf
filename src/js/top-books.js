import { useBooksApi } from '../services/booksApi';
import { addEventListenerOnTopBooks } from './pop-up-book';

const booksApi = useBooksApi();
const categoryContainerRef = document.querySelector('.category-book-container');

async function createCategoriesMarkup(category) {
  try {
    const categoryMarkup = await Promise.all(
      category.map(async ({ list_name, books }) => {
        const bookMarkup = await Promise.all(
          books.map(
            async ({ book_image, title, author, _id }) => `
              <li class="one-book">
                <a href="" value=${_id} class="book-item">
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
        );

        return `
          <li class=''>
            <h3 class=''>${list_name}</h3>
            <ul class='topBookslist list'>
              ${bookMarkup.join('\n')}
            </ul>
            <button type='button' class='btn'>See more</button>
          </li>
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
    addEventListenerOnTopBooks();
  } catch (error) {
    console.log(error);
  }
};

getTopBooksByCategories();
