import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

const getTopBooksByCategories = (e, containerRef) => {
  booksApi
    .getTopBooks()
    .then(res => {
      console.log('topBooks :', res);
    })
    .catch(err => {
      console.log(err);
    });
};

getTopBooksByCategories();
