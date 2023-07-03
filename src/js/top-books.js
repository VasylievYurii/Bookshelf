import { useBooksApi } from '../services/booksApi';
import {
  makeMarkupForBooks,
  renderBooksByCategory,
  onBookSelect,
} from './render-books-by-category';

const booksApi = useBooksApi();

const sectionCategoriesListEl = document.querySelector(
  '.section-categories-list'
);

// parceCategoriesBlocks();

function makeMarkupForCategories(categories) {
  const categoriesMarkup = categories
    .map(
      list_name => `<li class='category-block' data-category="${list_name}">
      <h3 class='category-block-title'>${list_name}</h3>
      <ul class='books-list' data-category="${list_name}"></ul>
      <button type='button' class='btn' >See more</button>
      </li>`
    )
    .join('\n');
  return categoriesMarkup;
}

async function parceCategoriesBlocks() {
  try {
    const categories = await booksApi.getCategoryList();
    const uniqueCategories = [
      ...new Set(categories.map(({ list_name }) => list_name)),
    ].sort();
    sectionCategoriesListEl.innerHTML =
      makeMarkupForCategories(uniqueCategories);
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
    sectionCategoriesListEl.addEventListener('click', onButtonClick);
  } catch (err) {
    console.log(err);
  }
}

// Функцию нужно доработать, почему-то не отрабатывает как надо. Пока не смог разобраться.

function onButtonClick(evt) {
  console.log("function onButtonClick:", evt)
  console.log('evt.target.nodeName', evt.target.nodeName)
  
  if (evt.target.nodeName === 'BUTTON') {

console.log('evt.target', evt.target)
// console.log('evt.currentTarget', evt.currentTarget)
    const category = evt.target.closest('.category-block').getAttribute('data-category');

  console.log('category', category);

  renderBooksByCategory(category);

    return;

  } else {
console.log('function onButtonClick return')
    return

  }

 
}
// Розкоментити для отримання всіх книг
parceCategoriesBlocks();

export { parceCategoriesBlocks };
