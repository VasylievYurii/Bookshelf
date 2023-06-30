import { useBooksApi } from '../services/booksApi';

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


const parseCategoryList = (list) => {
  const categoryList = list.map(({ list_name }) => {
    return `<li class="category-item list"><a class="category-link link" href="">${list_name}</a></li>`
  }).join('');
  const categoryListEl = document.querySelector('.category-list');
  categoryListEl.insertAdjacentHTML('beforeend', categoryList);
};
handleOnPress();