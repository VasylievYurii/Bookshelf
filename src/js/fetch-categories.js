import { useBooksApi } from '../services/booksApi';

const booksApi = useBooksApi();

export const handleOnPress = (e) => {

  booksApi
    .getCategoryList()
    .then((res) => {
      parceCategoryList(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
    });
};

const parceCategoryList = (list) => {
  console.log("list:", list);
};