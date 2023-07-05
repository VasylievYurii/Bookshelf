import { useBooksApi } from '../services/booksApi';
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
  let activeCategory = categoryListEl.querySelector('.link-all');
  activeCategory.classList.add('active');
};

handleOnPress();

categoryListEl.addEventListener('click', getBookFromCategory);

function getBookFromCategory(e) {
  e.preventDefault();
  const targetCategory = e.target.closest('.category-link');
  if (!targetCategory) {
    return;
  }
  const linkAllRef = document.querySelector('.link-all');
  const text = targetCategory.textContent.trim();
  clearStyleCategories();
  if (text === 'All categories') {
    const sectionCategoriesRef = document.querySelector('.section-categories');
    const sectionBooksRef = document.querySelector('.section-books');
    sectionBooksRef.classList.add('hidden');
    sectionCategoriesRef.classList.remove('hidden');
    linkAllRef.classList.add('active');
  } else {
    let activeCategory = e.target;
    activeCategory.classList.add('active');
    renderBooksByCategory(text);
  }
}

function clearStyleCategories() {
  const allCategories = document.querySelectorAll('.category-link');
  allCategories.forEach(function (element) {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });
}

export { clearStyleCategories };
