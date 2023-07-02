import { useBooksApi } from '../services/booksApi';
import {makeMarkupForBooks} from './render-books-by-category';
import {insertModalBook, onModalOpen} from './pop-up-book';

const booksApi = useBooksApi();

const sectionCategoriesListEl = document.querySelector(
  '.section-categories-list'
);

function makeMarkupForCategories(categories) {
  const categoriesMarkup = categories
    .map(
      (list_name) => `<li class='category-block'>
      <h3 class='category-block-title'>${list_name}</h3>
      <ul class='books-list' data-category="${list_name}"></ul>
      <button type='button' class='btn'>See more</button>
      </li>`
    )
    .join('\n');
  return categoriesMarkup;
}

async function parceCategoriesBlocks() {
  try {
    const categories = await booksApi.getCategoryList();
    const uniqueCategories = [...new Set(categories.map(({ list_name }) => list_name))].sort();
    sectionCategoriesListEl.innerHTML = makeMarkupForCategories(uniqueCategories);
    const blocksForRenderingBooks =
      sectionCategoriesListEl.querySelectorAll('.books-list');
    const topBooks = await booksApi.getTopBooks();
    blocksForRenderingBooks.forEach(block => {
      const categoryName = block.dataset.category;
      const topBooksOfCategory = topBooks.find(
        elem => elem.list_name === categoryName
      ).books;
      block.innerHTML = makeMarkupForBooks(topBooksOfCategory);
     
    });
    sectionCategoriesListEl.addEventListener('click', onBookSelect);
    function onBookSelect(evt) {
      const bookItem = evt.target.closest('.book-item');
          if (!bookItem) {
            return
          }
          const bookId = bookItem.getAttribute('data-value');
      booksApi
        .getBookById(bookId)
        .then(insertModalBook)
        .catch(error => console.log(error));
      onModalOpen();
  }} catch (err) {
    console.log(err);
  }
}
parceCategoriesBlocks();