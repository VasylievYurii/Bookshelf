// import { getTopBooksByCategories } from "./top-books";
// import { useBooksApi } from '../services/booksApi';

// const categoryAll = document.querySelector('.category-link');
// console.log(categoryAll);

// const booksApi = useBooksApi()
// categoryAll.addEventListener('click', () => {
//     booksApi
//         .getTopBooks()
//         .then((res) => {
//             const topBooksByCategories = res.reduce((acc, categoryBooks) => {
//                 const category = categoryBooks.category;
//                 const topBooks = categoryBooks.books.slice(0, 5);
//                 acc[{ category }] = topBooks;
//                 return acc;
//             }, {});
//             getTopBooksByCategories(topBooksByCategories);
//         }).catch((err) => {
//             console.log(err);
//         })
//         .finally(() => {
//         });
// })

