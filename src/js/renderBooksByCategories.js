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

// ------------Скрипт для рендера книжек по категориям. Альтернатива скрипту от Фёдора. Скрипт закоментил на всякий случай.------------- //

// const sectionCategoriesListEl = document.querySelector(
//   '.section-categories-list'
// );

// function makeMarkupForCategories(categories) {
//   const categoriesMarkup = categories
//     .map(
//       ({ list_name }) => `<li class='category-block'>
//       <h3 class='category-block-title'>${list_name}</h3>
//       <ul class='books-list' data-category="${list_name}"></ul>
//       <button type='button' class='btn'>See more</button>
//       </li>`
//     )
//     .join('\n');
//   return categoriesMarkup;
// }

// async function parceCategoriesBlocks() {
//   try {
//     const categories = await booksApi.getCategoryList();
//     sectionCategoriesListEl.innerHTML = makeMarkupForCategories(categories);
//     const blocksForRenderingBooks =
//       sectionCategoriesListEl.querySelectorAll('.books-list');
//     const topBooks = await booksApi.getTopBooks();
//     blocksForRenderingBooks.forEach(block => {
//       const categoryName = block.dataset.category;
//       const topBooksOfCategory = topBooks.find(
//         elem => elem.list_name === categoryName
//       ).books;
//       block.innerHTML = makeMarkupForBooks(topBooksOfCategory);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// parceCategoriesBlocks();




