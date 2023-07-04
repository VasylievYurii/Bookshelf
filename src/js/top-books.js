import { useBooksApi } from '../services/booksApi';
import {
  makeMarkupForBooks,
  renderBooksByCategory,
  onBookSelect,
} from './render-books-by-category';
import { clearStyleCategories } from './fetch-categories';

const booksApi = useBooksApi();

const sectionCategoriesListEl = document.querySelector(
  '.section-categories-list'
);

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

function onButtonClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName === 'BUTTON') {
    const category = evt.target
      .closest('.category-block')
      .getAttribute('data-category');
    renderBooksByCategory(category);
    clearStyleCategories();
    const allCategories = Array.from(
      document.querySelectorAll('.category-link.link')
    );
    const activeCategoryEl = allCategories.find(
      elem => elem.textContent === category
    );
    activeCategoryEl.classList.add('active');
    return;
  }
}

parceCategoriesBlocks();

export { parceCategoriesBlocks };
