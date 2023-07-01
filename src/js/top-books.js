import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

function makeMarkupForBooks(category) {
  const markup = category
    .map(
      ({ list_name }) => `ul class='list'>
      <h3 class=''>${list_name}</h3>
      <button type='button' class='btn'>See more</button>
      </ul>`
    )
    .join('\n');
  // console.log(markup);
  return markup;
}

const getTopBooksByCategories = (e, containerRef) => {
  booksApi
    .getTopBooks()
    .then(res => {
      // console.log('topBooks :', res);
      containerRef.innerHTML = makeMarkupForBooks(res);
    })
    .catch(err => {
      console.log(err);
    });
};

getTopBooksByCategories();
