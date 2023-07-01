import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

function makeMarkupForBooks(category) {
  const categoryMarkup = category
    .map(
      ({ list_name }) => `<li class=''>
      <h3 class=''>${list_name}</h3>
      <ul class='list'></ul>
      <button type='button' class='btn'>See more</button>
      </li>`
    )
    .join('\n');

  //console.log(categoryMarkup);

  return categoryMarkup;

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
