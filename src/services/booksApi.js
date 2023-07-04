import axios from 'axios';
import { openLoader, closeLoader } from '../js/loader/loader';

const API_ENDPOINTS = {
  baseUrl: 'https://books-backend.p.goit.global',
  categoryList: '/books/category-list',
  topBooks: '/books/top-books',
  categoryBooks: '/books/category',
  book: '/books/',
};

axios.defaults.baseURL = API_ENDPOINTS.baseUrl;

const getCategoryList = async () => {
  try {
    const result = await axios.get(API_ENDPOINTS.categoryList);
    // console.log(result);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } 
};

const getTopBooks = async () => {
  openLoader();
  try {
    const result = await axios.get(API_ENDPOINTS.topBooks);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally{
    closeLoader();
  }
};

const getBooksByCategory = async category => {
  openLoader();
  try {
    const result = await axios.get(API_ENDPOINTS.categoryBooks, {
      params: { category },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally{
    closeLoader();
  }
};

const getBookById = async id => {
  openLoader();
  try {
    const result = await axios.get(API_ENDPOINTS.book + id);
    // console.log(result);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally{
    closeLoader();
  }
};

export const useBooksApi = () => {
  return {
    getCategoryList,
    getTopBooks,
    getBooksByCategory,
    getBookById,
  };
};

// Приклад використання:

// const booksApi = useBooksApi();

// const handleOnPress = (e) => {
//   e.preventDefault();

//   state.isLoading = true;
//   state.isError = false;

// booksApi
//   .getCategoryList()
//   .then((res) => {
//     state.data = res;
//     parceCategoryList(res);
//   })
//   .catch((err) => {
//     state.error = err;
//       state.isError = true;
//       console.log(err);
//   })
//   .finally(() => {
//     state.isLoading = false;
//   });
// };

// const parceCategoryList = (list) => {
//   const innerList = list
//     .map(({ list_name }) => `<li>${list_name}</li>`)
//     .join("");
//   console.log(innerList);
//   ListRef.innerHTML = innerList;
// };
