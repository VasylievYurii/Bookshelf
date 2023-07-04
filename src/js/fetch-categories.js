import { useBooksApi } from '../services/booksApi';
import { parceCategoriesBlocks } from './top-books';
// import { createCategoriesMarkup } from './top-books';
// import { renderBooks } from './renderBooksByCategories';
// import { getCategoryElements } from './categories';
import { renderBooksByCategory } from './render-books-by-category';

const booksApi = useBooksApi();

const handleOnPress = e => {
  booksApi
    .getCategoryList()
    .then(res => {
      parseCategoryList(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {});
};
const categoryListEl = document.querySelector('.category-list');
// const categoryAll = document.querySelector('.category-link');
const categoryLinksElements = document.querySelectorAll('.category-link');
const oneCategory = document.querySelector('.category-item');

const parseCategoryList = list => {
  const uniqueCategories = [
    ...new Set(list.map(({ list_name }) => list_name)),
  ].sort();
  const categoryList = uniqueCategories
    .map(category => {
      if (category !== null && category !== undefined) {
        return `
      <li class="category-item list">
      <a class="category-link link" href="#">${category}</a>
      </li>`;
      }
    })
    .join('');
  categoryListEl.insertAdjacentHTML('beforeend', categoryList);
  getCategoryElements();
};

function getCategoryElements() {
  categoryLinksElements.forEach(link => {
    link.addEventListener('click', evt => {
      evt.preventDefault();
      categoryLinksElements.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

handleOnPress();

categoryListEl.addEventListener('click', getBookFromCategory);

function getBookFromCategory(e) {
  e.preventDefault();
 const targetCategory = e.target.closest('.category-link');
 if (!targetCategory) {
  return;
}

 const text = targetCategory.textContent.trim();
 if (text === 'All categories') {
  console.log('first')
  const sectionBooksRef = document.querySelector('.section-books');
  sectionBooksRef.classList.add('hidden');
  const sectionCategoriesRef = document.querySelector('.section-categories');
  sectionCategoriesRef.classList.remove('hidden');

  // parceCategoriesBlocks();
 } else {
  renderBooksByCategory(text);
 }
}
