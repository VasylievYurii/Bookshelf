import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

export const getTopBooksByCategories = e => {
  booksApi
    .getTopBooks()
    .then(res => {
      parseTopBooks(res);
    })
    .catch(err => {
      console.log(err);
    });

  const parseTopBooks = topBooksList => {
    console.log('topBooksList:', topBooksList);
    console.log('topBooks:', topBooksList[0]);
    console.log('topBooks:', topBooksList[1]);
  };
};
