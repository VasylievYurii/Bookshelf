import { useBooksApi } from '../services/booksApi';
import { getTopBooksByCategories } from "./top-books";
import { createCategoriesMarkup } from './top-books';
import { renderBooks } from './renderBooksByCategories';
const booksApi = useBooksApi();

const handleOnPress = (e) => {

  booksApi
    .getCategoryList()
    .then((res) => {
      parseCategoryList(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    });
};
const categoryListEl = document.querySelector('.category-list');


const parseCategoryList = (list) => {
  const uniqueCategories = [...new Set(list.map(({ list_name }) => list_name))].sort();

  const categoryList = uniqueCategories.map((category) => {
    return `<li class="category-item list"><a class="category-link link" href="">${category}</a></li>`
  }).join('');

  categoryListEl.insertAdjacentHTML('beforeend', categoryList);


  const categoryLinksElements = document.querySelectorAll('.category-link');

  categoryLinksElements.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      categoryLinksElements.forEach((el) => el.classList.remove('active'));
      link.classList.add('active');
    })
  });
};
// const categoryAll = document.querySelector('.category-link');
// categoryAll.addEventListener('click', () => {
//   const topBooksByCategories = res.reduce((acc, categoryBooks) => {
//     const category = categoryBooks.category;
//     const topBooks = categoryBooks.books.slice(0, 5);
//     acc[category] = topBooks;
//     return acc;
//   }, {});
//   renderBooks(topBooksByCategories);
// })
handleOnPress();
